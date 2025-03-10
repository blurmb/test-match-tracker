import "./global.scss";

import { StoreProvider } from "../providers/StoreProvider";
import { MatchTrackerPage } from "@src/pages/MatchTrackerPage";

export const App = () => {
  return (
    <StoreProvider>
      <MatchTrackerPage />
    </StoreProvider>
  );
};
