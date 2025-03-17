import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@src/store/types";

export const getMatches = (state: StateSchema) => state.matches.matches;
export const getMatchesLoading = (state: StateSchema) =>
  state.matches.isLoading;
export const getMatchesError = (state: StateSchema) => state.matches.error;

export const getMatchesFilter = (state: StateSchema) => state.matches.filter;

export const getFilteredMatches = createSelector(
  [getMatches, getMatchesFilter],
  (matches, filter) => {
    if (filter) {
      return matches.filter((match) => match.status === filter);
    }
    return matches;
  },
);
