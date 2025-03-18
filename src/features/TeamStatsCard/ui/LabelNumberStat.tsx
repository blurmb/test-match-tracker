import classNames from "classnames";
import classes from "./LabelNumberStat.module.scss";

export type LabelNumberStatProps = {
  label: string;
  count: number | string;
  className?: string;
};
export const LabelNumberStat = ({
  label,
  count,
  className,
}: LabelNumberStatProps) => (
  <div className={classNames(classes.wrapper, className)}>
    <span className={classes.label}>{label}</span>
    <span className={classes.count}>{count}</span>
  </div>
);
