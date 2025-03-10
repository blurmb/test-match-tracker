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

type RefreshButtonProps = Pick<ButtonProps, "onClick" | "disabled"> & {
  isLoading: boolean;
};
const RefreshButton = ({
  onClick,
  disabled,
  isLoading,
}: RefreshButtonProps) => (
  <Button variant="primary" size="md" onClick={onClick} disabled={disabled}>
    <div className={classes.refreshButton}>
      <span>Обновить</span>
      <RefreshIcon
        className={classNames(classes.refreshIcon, {
          [classes.loading]: isLoading,
        })}
      />
    </div>
  </Button>
);
export const MatchTrackerPageHeader = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getMatchesError);
  const isError = error && error !== "aborted";
  const isLoading = useAppSelector(getMatchesLoading);

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
        <RefreshButton
          onClick={handleUpdate}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
