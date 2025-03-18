export type {
  Match,
  MatchStatus,
  MatchesSliceState,
  MatchFilter,
} from "./model/types";
export { fetchMatchesThunk } from "./api/fetchMatchesThunk";
export {
  matchesSlice,
  setFilter,
  setMatches,
  setError,
  setIsLoading,
} from "./model/slice";
export {
  getMatches,
  getMatchesError,
  getMatchesLoading,
  getMatchesFilter,
  getFilteredMatches,
} from "./model/selectors";
export { useMatchesAutoUpdate } from "./lib/hooks";
