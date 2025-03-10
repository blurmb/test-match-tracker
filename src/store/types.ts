import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { MatchesSliceState } from "@src/entities/Match";

export type AppDispatch = ReturnType<
  typeof configureStore<StateSchema>
>["dispatch"];
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {
  matches: MatchesSliceState;
}
