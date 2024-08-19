import { createSlice } from "@reduxjs/toolkit";

const showHeroInitialState = {
  showHero: true,
};

const showHeroSlice = createSlice({
  name: "showHero",
  initialState: showHeroInitialState,
  reducers: {
    setShowHero(state, action) {
      state.showHero = action.payload;
    },
  },
});

export const { setShowHero } = showHeroSlice.actions;
export const showHeroReducer = showHeroSlice.reducer;
