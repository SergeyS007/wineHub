import { createSlice } from "@reduxjs/toolkit";
// import { logOut } from "redux/auth/operations";
import {
  fetchWines,
  // , addTask, deleteTask
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const winesSlice = createSlice({
  name: "wines",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addTask: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(text) {
    //     return {
    //       payload: {
    //         text,
    //         id: nanoid(),
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    // makeFavorite(state, action) {
    //   const index = state.items.findIndex((item) => item.id === action.payload);
    //   state.splice(index, 1);
    // },
    makeFavorite(state, action) {
      for (const item of state.items) {
        if (item.winery.id === action.payload) {
          item.favourite = !item.favourite;
          break;
        }
      }
    },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWines.pending, handlePending)
      .addCase(fetchWines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchWines.rejected, handleRejected);
    //   .addCase(addTask.pending, handlePending)
    //   .addCase(addTask.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addTask.rejected, handleRejected)

    //   .addCase(deleteTask.pending, handlePending)
    //   .addCase(deleteTask.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       (task) => task.id === action.payload.id
    //     );
    //     state.items.splice(index, 1);
    //   })
    //     .addCase(deleteTask.rejected, handleRejected)

    //   .addCase(logOut.fulfilled, (state) => {
    //     state.items = [];
    //     state.error = null;
    //     state.isLoading = false;
    //   });
  },
});

export const { makeFavorite } = winesSlice.actions;
export const winesReducer = winesSlice.reducer;
