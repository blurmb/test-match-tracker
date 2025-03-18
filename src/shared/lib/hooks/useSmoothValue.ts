import { useEffect, useState } from "react";

const SCORE_CHANGE_TIME_MS = 250;
export const useSmoothValue = (
  value: number,
  time_ms: number = SCORE_CHANGE_TIME_MS,
) => {
  const [displayScore, setDisplayScore] = useState(value);
  useEffect(() => {
    const delta = value - displayScore;
    let interval: ReturnType<typeof setInterval> | undefined;
    if (delta !== 0) {
      let iterations = Math.abs(delta);
      interval = setInterval(
        () => {
          iterations--;
          setDisplayScore((prev) => prev + (delta > 0 ? 1 : -1));
          if (iterations === 0) {
            clearInterval(interval);
          }
        },
        time_ms / Math.abs(delta),
      );
    }
    return () => clearInterval(interval);
  }, [value]);
  return displayScore;
};
