import classes from "./MatchTrackerPage.module.scss";
import { MatchTrackerPageHeader } from "./Header";
import { MatchList } from "@src/widgets/MatchList";
export const MatchTrackerPage = () => {
  return (
    <div className={classes.wrapper}>
      <MatchTrackerPageHeader />
      <MatchList />
    </div>
  );
};
