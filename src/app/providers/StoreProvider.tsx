import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "@src/shared/store/types";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const store = configureStore<StateSchema>({
  reducer: {},
});

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
