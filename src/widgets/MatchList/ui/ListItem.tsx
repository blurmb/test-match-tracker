import { Card } from "@src/shared/ui/Card";

import classes from "./ListItem.module.scss";
import { Match, MatchStatus as MatchStatusType } from "@src/entities/Match";
import { AlertIcon, DefaultTeamLogo } from "@src/shared/assets/icons";
import { MatchStatusCard } from "@src/features/MatchStatusCard";
import classNames from "classnames";
import { useEffect, useState } from "react";

export type ListItemSkeletonProps = {
  isLoading: boolean;
  isError: boolean;
};
export const ListItemSkeleton = ({
  isLoading,
  isError,
}: ListItemSkeletonProps) => (
  <Card
    variant="darker"
    className={classNames(classes.card, classes.skeleton, {
      [classes.loading]: isLoading,
    })}
  >
    {isError && <AlertIcon />}
  </Card>
);

export type ListItemProps = {
  match: Match;
};
export const ListItem = ({ match }: ListItemProps) => {
  return (
    <Card variant="darker" className={classes.card}>
      <CommandLabel command={match.homeTeam.name} />
      <MatchStatus
        status={match.status}
        score={[match.homeScore, match.awayScore]}
      />
      <CommandLabel command={match.awayTeam.name} />
    </Card>
  );
};

const CommandLabel = ({ command }: { command: string }) => (
  <div className={classes.command}>
    <DefaultTeamLogo />
    <span>{command}</span>
  </div>
);

const MatchStatus = ({
  status,
  score,
}: {
  status: MatchStatusType;
  score: [number, number];
}) => {
  const displayScoreHome = useSmoothScore(score[0]);
  const displayScoreAway = useSmoothScore(score[1]);
  return (
    <div className={classes.status}>
      <span className={classes.score}>
        {status === "Scheduled"
          ? "— : —"
          : `${displayScoreHome} : ${displayScoreAway}`}
      </span>
      <MatchStatusCard status={status} />
    </div>
  );
};

const SCORE_CHANGE_TIME_MS = 250;
const useSmoothScore = (score: number) => {
  const [displayScore, setDisplayScore] = useState(score);
  useEffect(() => {
    const delta = score - displayScore;
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
        SCORE_CHANGE_TIME_MS / Math.abs(delta),
      );
    }
    return () => clearInterval(interval);
  }, [score]);
  return displayScore;
};
