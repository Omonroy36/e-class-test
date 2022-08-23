import { createSlice } from "@reduxjs/toolkit";
import { Favorite, FavoriteState } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const savedFavorites = localStorage.getItem("favorites") || "";
console.log();

const initialState: FavoriteState = {
  results: Array.isArray(JSON.parse(savedFavorites))
    ? JSON.parse(savedFavorites)
    : [],
};

const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Favorite>) => {
      const { payload } = action;
      state.results.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      //filter if favorite id is equal a given id coming as the payload
      state.results = state.results.filter(
        (favorite: Favorite) => favorite.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
  },
});

export const { setFavorite, deleteFavorite } = favoriteReducer.actions;
export default favoriteReducer.reducer;
