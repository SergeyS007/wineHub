import { createSlice } from "@reduxjs/toolkit";

const showModalInitialState = {
  showModal: false,
};

const showModalSlice = createSlice({
  name: "showModal",
  initialState: showModalInitialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const { setShowModal } = showModalSlice.actions;
export const showModalReducer = showModalSlice.reducer;
