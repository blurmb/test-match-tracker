import { Button, ButtonProps } from "@src/shared/ui";
import { MatchTrackerLogo } from "./assets/icons";
import classes from "./Header.module.scss";
import { AlertIcon, RefreshIcon } from "@src/shared/assets/icons";
import { Card } from "@src/shared/ui";
import classNames from "classnames";
import { useState } from "react";

const RefreshButton = ({
  onClick,
  disabled,
}: Pick<ButtonProps, "onClick" | "disabled">) => (
  <Button variant="primary" size="md" onClick={onClick} disabled={disabled}>
    <div className={classes.refreshButton}>
      <span>Обновить</span>
      <RefreshIcon />
    </div>
  </Button>
);
export const MatchTrackerPageHeader = () => {
  const [isError, setIsError] = useState(true); // TODO: entity update
  return (
    <div className={classes.wrapper}>
      <MatchTrackerLogo />
      <div className={classes.refreshBlock}>
        <Card
          className={classNames(classes.alert, { [classes.error]: isError })}
        >
          <AlertIcon />
          <span>Ошибка: не удалось загрузить информацию</span>
        </Card>
        <RefreshButton onClick={() => setIsError((e) => !e)} />
      </div>
    </div>
  );
};
