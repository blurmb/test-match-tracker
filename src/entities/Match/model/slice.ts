import { createSlice } from "@reduxjs/toolkit";
import { MatchesSliceState } from "./types";
import { fetchMatchesThunk } from "../api/fetchMatchesThunk";

const initialState: MatchesSliceState = {
  matches: [],
  isLoading: false,
  error: undefined,
};
export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
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
