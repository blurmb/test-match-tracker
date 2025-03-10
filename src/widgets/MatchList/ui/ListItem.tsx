import { Card } from "@src/shared/ui/Card";

import classes from "./ListItem.module.scss";
import { Match, MatchStatus as MatchStatusType } from "@src/entities/Match";
import { DefaultTeamLogo } from "@src/shared/assets/icons";
import { MatchStatusCard } from "@src/features/MatchStatusCard";

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
}) => (
  <div className={classes.status}>
    <span className={classes.score}>
      {status === "Scheduled" ? "— : —" : score.join(" : ")}
    </span>
    <MatchStatusCard status={status} />
  </div>
);
