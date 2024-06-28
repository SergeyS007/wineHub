import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";
import { showFiltersReducer } from "./showFiltersSlice";

export const store = configureStore({
  reducer: {
    // tasks: tasksReducer,
    filters: filtersReducer,
    showFilters: showFiltersReducer,
  },
});
