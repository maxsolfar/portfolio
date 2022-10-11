import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { addDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<addDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;