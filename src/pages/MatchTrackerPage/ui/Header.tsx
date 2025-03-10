import { Button, ButtonProps } from "@src/shared/ui";
import { MatchTrackerLogo } from "./assets/icons";
import classes from "./Header.module.scss";
import { AlertIcon, RefreshIcon } from "@src/shared/assets/icons";
import { Card } from "@src/shared/ui";
import classNames from "classnames";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import {
  fetchMatchesThunk,
  getMatchesError,
  getMatchesLoading,
} from "@src/entities/Match";

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
  const dispatch = useAppDispatch();
  const error = useAppSelector(getMatchesError);
  const isError = error && error !== "aborted";
  const data = useAppSelector((state) => state.matches);

  const handleUpdate = useCallback(() => {
    const abortController = new AbortController();
    dispatch(fetchMatchesThunk({ signal: abortController.signal }));

    return () => abortController.abort("aborted");
  }, [dispatch]);

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
        <RefreshButton onClick={handleUpdate} />
      </div>
    </div>
  );
};
