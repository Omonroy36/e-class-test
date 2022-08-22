import { createSlice } from "@reduxjs/toolkit";
import { Favorite, FavoriteState } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  results: [],
};

const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Favorite>) => {
      const { payload } = action;
      state.results.push(payload);
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
