import { createSlice } from "@reduxjs/toolkit";
import { countryFilters, typeFilters, ratingFilters } from "./constants";

const filtersInitialState = {
  type: typeFilters.red,
  country: countryFilters.Spain,
  rating: ratingFilters.Excellent,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setTypeFilter(state, action) {
      state.type = action.payload;
    },
    setCountryFilter(state, action) {
      state.country = action.payload;
    },
    setRatingFilter(state, action) {
      state.rating = action.payload;
    },
  },
});

export const { setTypeFilter, setCountryFilter, setRatingFilter } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
