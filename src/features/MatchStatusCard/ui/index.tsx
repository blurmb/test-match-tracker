import { MatchStatus } from "@src/entities/Match";
import classes from "./MatchStatusCard.module.scss";
import { Card, CardVariant } from "@src/shared/ui/Card";
import classNames from "classnames";

export type MatchStatusCardProps = {
  status: MatchStatus;
};
export const MatchStatusCard = ({ status }: MatchStatusCardProps) => (
  <Card
    variant={statusToCardVariant[status]}
    className={classNames(classes.card, {
      [classes.scheduled]: status === "Scheduled",
    })}
  >
    <span>{statusToMessage[status]}</span>
  </Card>
);

const statusToCardVariant: Record<MatchStatus, CardVariant> = {
  Scheduled: "accentSecondary",
  Ongoing: "accent",
  Finished: "primary",
};

const statusToMessage: Record<MatchStatus, string> = {
  Scheduled: "Match preparing",
  Ongoing: "Live",
  Finished: "Finished",
};
