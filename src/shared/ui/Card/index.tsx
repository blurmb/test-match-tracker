import classNames from "classnames";

import classes from "./Card.module.scss";

export type CardVariant =
  | "dark"
  | "darker"
  | "accent"
  | "accentSecondary"
  | "primary";
export type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
};
export const Card = ({ children, className, variant = "dark" }: CardProps) => (
  <div className={classNames(classes.card, classes[variant], className)}>
    {children}
  </div>
);
