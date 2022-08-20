import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducer/favoriteReducer";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
