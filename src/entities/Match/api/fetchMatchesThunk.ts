import { createAsyncThunk } from "@reduxjs/toolkit";
import { MatchesApi, matchesApi } from "@src/shared/api";

export const fetchMatchesThunk = createAsyncThunk<
  MatchesApi.DataMatches,
  { signal: AbortSignal },
  { rejectValue: string }
>(
  "matches/fetchMatches",
  async ({ signal }: { signal: AbortSignal }, { rejectWithValue }) =>
    matchesApi
      .getMatches({ signal })
      .then((res) =>
        res.ok
          ? (res.data ?? { matches: [] })
          : Promise.reject("Response is not ok"),
      )
      .catch((err) => rejectWithValue(err.toString())),
);
