import { Team } from "@src/entities/Team";
import { Card } from "@src/shared/ui";
import classes from "./TeamStatsCard.module.scss";
import { PlayerStatsCard } from "./PlayerStatsCard";
import { LabelNumberStat } from "./LabelNumberStat";
import { useSmoothValue } from "@src/shared/lib/hooks";

export type TeamStatsCardProps = {
  team: Team;
};
export const TeamStatsCard = ({ team }: TeamStatsCardProps) => {
  const points = useSmoothValue(team.points);
  const place = useSmoothValue(team.place);
  const totalKills = useSmoothValue(team.totalKills);
  return (
    <div className={classes.wrapper}>
      <div className={classes.players}>
        {team.players.map((player) => (
          <PlayerStatsCard
            key={player.username}
            player={player}
            className={classes.card}
          />
        ))}
      </div>
      <Card className={classes.stats} variant="secondary">
        <LabelNumberStat
          label="Points:"
          count={points > 0 ? `+${points}` : points === 0 ? "0" : `-${points}`}
          className={classes.label}
        />
        <LabelNumberStat
          label="Место:"
          count={place}
          className={classes.label}
        />
        <LabelNumberStat
          label="Всего убийств:"
          count={totalKills}
          className={classes.label}
        />
      </Card>
    </div>
  );
};
