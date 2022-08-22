import { createSlice } from "@reduxjs/toolkit";
import { Favorite, Favorites, FavoriteState } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  results: [],
  messageError: "",
};

const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Favorite>) => {
      const { payload } = action;
      const found = state.results.find(
        (favorite: Favorite) => favorite.id === payload.id
      );
      state.messageError = "";
      if (!found) {
        state.results.push(action.payload);
      } else
        state.messageError = "You have this favorite, you surely love this one";
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      //filter if favorite id is equal a given id coming as the payload
      state.results = state.results.filter(
        (favorite: Favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { setFavorite, deleteFavorite } = favoriteReducer.actions;
export default favoriteReducer.reducer;
