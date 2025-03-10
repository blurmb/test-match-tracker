import classes from "./MatchList.module.scss";
import {
  getMatches,
  getMatchesError,
  getMatchesLoading,
} from "@src/entities/Match";
import { ListItem, ListItemSkeleton } from "./ListItem";
import { useAppSelector } from "@src/store/hooks";

export const MatchList = () => {
  const data = useAppSelector(getMatches);
  const isLoading = useAppSelector(getMatchesLoading);
  const error = useAppSelector(getMatchesError);
  const isError = (error && error !== "aborted") || false;
  return (
    <div className={classes.wrapper}>
      {data.length === 0 &&
        Array(5)
          .fill(0)
          .map((_, i) => (
            <ListItemSkeleton key={i} isLoading={isLoading} isError={isError} />
          ))}
      {data.map((match) => (
        <ListItem key={match.title} match={match} />
      ))}
    </div>
  );
};
