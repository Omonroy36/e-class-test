import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducer/characterReducer";
import favoriteReducer from "./reducer/favoriteReducer";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    character: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
