import classNames from "classnames";
import classes from "./ListBox.module.scss";
import { useState } from "react";
import { Chevron } from "./assets/icons";
import { Button } from "../Button";

export type ListBoxItem<Value extends string> = {
  value: Value;
  content: string;
};

export type ListBoxProps<Value extends string> = {
  className?: string;
  items: ListBoxItem<Value>[];
  selected?: ListBoxItem<Value>;
  placeholder?: string;
  onChange?: (value: Value) => void;
};
export const ListBox = <T extends string>({
  className,
  items,
  selected,
  placeholder,
  onChange,
}: ListBoxProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const handleItemClick = (value: T) => {
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <div className={classNames(classes.wrapper, className)}>
      <Button
        className={classNames(classes.button, { [classes.open]: isOpen })}
        aria-expanded={isOpen}
        onClick={handleClick}
        variant="secondary"
      >
        <span className={classes.value}>
          {selected?.content || placeholder || "No value"}
        </span>
        <Chevron />
      </Button>
      <ul className={classNames(classes.list, { [classes.open]: isOpen })}>
        {items.map((item) => (
          <DropItem
            key={item.value}
            item={item}
            onClick={handleItemClick}
            selected={selected?.value === item.value}
          />
        ))}
      </ul>
    </div>
  );
};

type DropItemProps<T extends string> = {
  item: ListBoxItem<T>;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (value: T) => void;
};
const DropItem = <T extends string>({
  item,
  selected,
  disabled,
  onClick,
}: DropItemProps<T>) => (
  <li key={item.value}>
    <button
      onClick={() => onClick?.(item.value)}
      disabled={disabled}
      className={classNames(classes.item, { [classes.selected]: selected })}
    >
      {item.content}
    </button>
  </li>
);
