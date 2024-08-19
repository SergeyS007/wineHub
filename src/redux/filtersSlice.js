import { createSlice } from "@reduxjs/toolkit";
// import { countryFilters, typeFilters, ratingFilters } from "./constants";

const filtersInitialState = {
  type: [],
  price: 0,
  country: [],
  rating: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setTypeFilter(state, action) {
      state.type.push(action.payload);
    },
    deleteTypeFilter(state, action) {
      const index = state.type.findIndex((item) => item === action.payload);
      state.type.splice(index, 1);
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
    setCountryFilter(state, action) {
      state.country.push(action.payload);
    },
    deleteCountryFilter(state, action) {
      const index = state.country.findIndex((item) => item === action.payload);
      state.country.splice(index, 1);
    },
    setRatingFilter(state, action) {
      state.rating = action.payload;
    },
  },
});

export const {
  setTypeFilter,
  deleteTypeFilter,
  setPriceFilter,
  setCountryFilter,
  deleteCountryFilter,
  setRatingFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
