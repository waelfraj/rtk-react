import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api";

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
