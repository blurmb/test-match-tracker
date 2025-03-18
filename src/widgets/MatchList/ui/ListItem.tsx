import { Card } from "@src/shared/ui/Card";

import classes from "./ListItem.module.scss";
import { Match, MatchStatus as MatchStatusType } from "@src/entities/Match";
import { AlertIcon, DefaultTeamLogo } from "@src/shared/assets/icons";
import { MatchStatusCard } from "@src/features/MatchStatusCard";
import classNames from "classnames";
import { useSmoothValue } from "@src/shared/lib/hooks";
import { TeamStatsCard } from "@src/features/TeamStatsCard";

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
      <div className={classes.briefContent}>
        <CommandLabel command={match.homeTeam.name} />
        <MatchStatus
          status={match.status}
          score={[match.homeScore, match.awayScore]}
        />
        <CommandLabel command={match.awayTeam.name} />
      </div>
      <div className={classes.stats}>
        <TeamStatsCard team={match.homeTeam} />
        <Divider />
        <TeamStatsCard team={match.awayTeam} />
      </div>
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
  const displayScoreHome = useSmoothValue(score[0]);
  const displayScoreAway = useSmoothValue(score[1]);
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

const Divider = () => <div className={classes.divider}>VS</div>;
