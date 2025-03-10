import { StateSchema } from "@src/store/types";

export const getMatches = (state: StateSchema) => state.matches.matches;
export const getMatchesLoading = (state: StateSchema) =>
  state.matches.isLoading;
export const getMatchesError = (state: StateSchema) => state.matches.error;
