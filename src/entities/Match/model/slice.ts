import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match, MatchesSliceState, MatchFilter } from "./types";
import { fetchMatchesThunk } from "../api/fetchMatchesThunk";

const initialState: MatchesSliceState = {
  matches: [],
  isLoading: false,
  error: undefined,
};
export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<MatchFilter>) => {
      if (action.payload === "All") {
        state.filter = undefined;
        return;
      }
      state.filter = action.payload;
    },
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
      state.isLoading = false;
      state.error = undefined;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.matches = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.matches = [];
      })
      .addCase(fetchMatchesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.matches = action.payload.matches;
        state.error = undefined;
      })
      .addCase(fetchMatchesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, setMatches, setError } = matchesSlice.actions;
