import classNames from "classnames";
import classes from "./Button.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "naked";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "md",
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        classes.button,
        classes[variant],
        classes[size],
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
