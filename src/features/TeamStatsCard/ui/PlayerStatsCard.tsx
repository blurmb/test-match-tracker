import { Player } from "@src/entities/Player";
import { useSmoothValue } from "@src/shared/lib/hooks";
import { Card } from "@src/shared/ui";
import classNames from "classnames";
import classes from "./PlayerStatsCard.module.scss";
import { defaultUserpicSrc } from "@src/shared/assets/images";
import { LabelNumberStat } from "./LabelNumberStat";

export type PlayerStatsCardProps = {
  player: Player;
  className?: string;
};
export const PlayerStatsCard = ({
  player,
  className,
}: PlayerStatsCardProps) => {
  const { username, kills } = player;
  const displayKills = useSmoothValue(kills);
  return (
    <Card className={classNames(classes.card, className)} variant="secondary">
      <div className={classes.name}>
        <img src={defaultUserpicSrc} alt="" className={classes.userpic} />
        <span className={classes.username}>{username}</span>
      </div>
      <LabelNumberStat label="Убийств:" count={displayKills} />
    </Card>
  );
};
