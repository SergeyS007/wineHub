import { createSlice } from "@reduxjs/toolkit";

const showFiltersInitialState = {
  show: false,
};

const showFiltersSlice = createSlice({
  name: "showFilters",
  initialState: showFiltersInitialState,
  reducers: {
    setShowFilter(state, action) {
      state.show = !state.show;
    },
  },
});

export const { setShowFilter } = showFiltersSlice.actions;
export const showFiltersReducer = showFiltersSlice.reducer;
