// Use throughout your app instead of plain `useDispatch` and `useSelector`
import {AppDispatch} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector = useSelector
