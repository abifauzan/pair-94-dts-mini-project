import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => ({
      ...state,
      theme: action.payload,
    }),
  },
});

export const selectAppTheme = (state) => state.app.theme;

export const { setTheme } = appSlice.actions;

export default appSlice;
