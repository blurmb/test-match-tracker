export type {
  Match,
  MatchStatus,
  MatchesSliceState,
  MatchFilter,
} from "./model/types";
export { fetchMatchesThunk } from "./api/fetchMatchesThunk";
export { matchesSlice, setFilter } from "./model/slice";
export {
  getMatches,
  getMatchesError,
  getMatchesLoading,
  getMatchesFilter,
  getFilteredMatches,
} from "./model/selectors";
