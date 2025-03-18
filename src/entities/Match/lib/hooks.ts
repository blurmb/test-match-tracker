import { MatchesApi } from "@src/shared/api";
import { useAppDispatch } from "@src/store/hooks";
import { useEffect } from "react";
import { setError, setIsLoading, setMatches } from "../model/slice";
import { socketService } from "./socketService";

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
      const onError = (error: CloseEvent) => {
        console.error("WebSocket error", error);
        dispatch(setError("WebSocket error"));
      };
      useEffect(() => {
        dispatch(setIsLoading(true));
        socketService.connect(dispatchCB, onError);
        return () => {
          dispatch(setIsLoading(false));
          socketService.disconnect();
        };
      }, [dispatch]);
    }
  : () => {};
