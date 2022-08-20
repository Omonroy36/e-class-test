import { createSlice } from "@reduxjs/toolkit";
import { Favorite, Favorites, FavoriteState } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Favorite>) => {},
    getFavorites: (state, action: PayloadAction<Favorites>) => {},
  },
});

export const { setFavorite, getFavorites } = favoriteReducer.actions;
export default favoriteReducer.reducer;
