import { MatchesApi, matchesApi } from "@src/shared/api";
import { useAppDispatch } from "@src/store/hooks";
import { useEffect } from "react";
import { setError, setMatches } from "../model/slice";

type DispatchCB = (matches: MatchesApi.MatchSocketMessage) => void;
class SocketService {
  socket?: WebSocket;
  private dispatch?: DispatchCB;
  private onMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data) as MatchesApi.MatchSocketMessage;
    console.log(data.data);
    this.dispatch?.(data);
  };
  connect(dispatch: DispatchCB) {
    if (this.socket) {
      throw new Error("Socket is already connected");
    }
    this.socket = matchesApi.createMatchesSocket();
    this.dispatch = dispatch;
    this.socket.addEventListener("message", this.onMessage);
  }
  disconnect() {
    this.socket?.close();
    this.socket = undefined;
  }
}
const socketService: SocketService = new SocketService();

export const useMatchesAutoUpdate = __FEATURES__.AUTO_UPDATE
  ? () => {
      const dispatch = useAppDispatch();
      const dispatchCB = (matches: MatchesApi.MatchSocketMessage) => {
        if (matches.type !== "update_matches") {
          console.error("Unexpected matches type", matches);
          dispatch(setError("Unexpected matches type"));
          return;
        }
        dispatch(setMatches(matches.data));
      };
      useEffect(() => {
        socketService.connect(dispatchCB);
        return () => {
          socketService.disconnect();
        };
      }, [dispatch]);
    }
  : () => {};
