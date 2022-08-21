import { createSlice } from "@reduxjs/toolkit";
import { CharacterState, Characters } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CharacterState = {
  results: [],
};

const characterReducer = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Characters>) => {
      state.results = [...state.results, ...action.payload];
    },
    getCharacters: (state, action: PayloadAction<Characters>) => {},
  },
});

export const { setCharacters, getCharacters } = characterReducer.actions;
export default characterReducer.reducer;
