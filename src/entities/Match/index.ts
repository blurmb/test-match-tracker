export type { Match, MatchStatus, MatchesSliceState } from "./model/types";
export { fetchMatchesThunk } from "./api/fetchMatchesThunk";
export { matchesSlice } from "./model/slice";
export {
  getMatches,
  getMatchesError,
  getMatchesLoading,
} from "./model/selectors";
