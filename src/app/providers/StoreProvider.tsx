import { configureStore } from "@reduxjs/toolkit";
import { matchesSlice } from "@src/entities/Match";
import { StateSchema } from "@src/store/types";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const store = configureStore<StateSchema>({
  reducer: {
    matches: matchesSlice.reducer,
  },
});

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
