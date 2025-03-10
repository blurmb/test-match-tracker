import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

export type AppDispatch = ReturnType<
  typeof configureStore<StateSchema>
>["dispatch"];
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {}
