import classNames from "classnames";

import classes from "./Card.module.scss";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export const Card = ({ children, className }: CardProps) => (
  <div className={classNames(classes.card, className)}>{children}</div>
);
