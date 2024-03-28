import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./showsSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
