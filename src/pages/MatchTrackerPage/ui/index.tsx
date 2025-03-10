import classes from "./MatchTrackerPage.module.scss";
import { MatchTrackerPageHeader } from "./Header";
export const MatchTrackerPage = () => {
  return (
    <div className={classes.wrapper}>
      <MatchTrackerPageHeader />
      <div>content</div>
    </div>
  );
};
