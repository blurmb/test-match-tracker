import classes from "./MatchList.module.scss";
import { getMatches, getMatchesError } from "@src/entities/Match";
import { ListItem } from "./ListItem";
import { useAppSelector } from "@src/store/hooks";

export const MatchList = () => {
  const data = useAppSelector(getMatches);
  return (
    <div className={classes.wrapper}>
      {data.map((match) => (
        <ListItem key={match.title} match={match} />
      ))}
    </div>
  );
};
