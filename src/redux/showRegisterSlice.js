import { createSlice } from "@reduxjs/toolkit";

const showRegisterInitialState = {
  showRegister: false,
  showSignIn: false,
};

const showRegisterSlice = createSlice({
  name: "showRegister",
  initialState: showRegisterInitialState,
  reducers: {
    setShowRegister(state, action) {
      state.showRegister = action.payload;
    },
    setShowSignIn(state, action) {
      state.showSignIn = action.payload;
    },
  },
});

export const { setShowRegister, setShowSignIn } = showRegisterSlice.actions;
export const showRegisterReducer = showRegisterSlice.reducer;
