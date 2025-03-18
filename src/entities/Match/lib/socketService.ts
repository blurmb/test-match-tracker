import { MatchesApi, matchesApi } from "@src/shared/api";

export type DispatchCB = (matches: MatchesApi.MatchSocketMessage) => void;
export type WebSocketErrorCB = (error: CloseEvent) => void;
const CONNECT_TIMEOUT_MS = 5000;
const INACTIVE_TIMEOUT_MS = 5000;
class SocketService {
  socket?: WebSocket;
  private dispatch?: DispatchCB;
  private onError?: WebSocketErrorCB;
  private connectTimeout?: ReturnType<typeof setTimeout>;
  private inactiveTimeout?: ReturnType<typeof setTimeout>;
  private inactiveTimeoutCB = () => {
    this.socket?.close(4002, "Inactivity timeout");
  };
  private updateInactiveTimeout = () => {
    clearTimeout(this.inactiveTimeout);
    this.inactiveTimeout = setTimeout(
      this.inactiveTimeoutCB,
      INACTIVE_TIMEOUT_MS,
    );
  };
  private onClose = (event: CloseEvent) => {
    if (event.code !== 1000) {
      this.onError?.(event);
    }
  };
  private onMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data) as MatchesApi.MatchSocketMessage;
    this.updateInactiveTimeout();
    this.dispatch?.(data);
  };
  connect = (dispatch: DispatchCB, onError: WebSocketErrorCB) => {
    if (this.socket) {
      throw new Error("Socket is already connected");
    }
    this.socket = matchesApi.createMatchesSocket();
    this.dispatch = dispatch;
    this.onError = onError;
    this.socket.addEventListener("message", this.onMessage);
    this.socket.addEventListener("close", this.onClose);
    this.socket.addEventListener("open", () => {
      clearTimeout(this.connectTimeout);
      this.updateInactiveTimeout();
    });
    this.connectTimeout = setTimeout(() => {
      this.socket?.close(4001, "Connection timeout");
    }, CONNECT_TIMEOUT_MS);
  };
  disconnect = () => {
    clearTimeout(this.connectTimeout);
    clearTimeout(this.inactiveTimeout);

    this.socket?.removeEventListener("message", this.onMessage);
    this.socket?.removeEventListener("close", this.onClose);
    this.socket?.close();
    this.socket = undefined;
  };
}

export const socketService: SocketService = new SocketService();
