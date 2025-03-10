import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateSchema } from "./types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
