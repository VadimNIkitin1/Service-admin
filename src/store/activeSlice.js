import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "active",
  initialState: {
    active: "/menu",
    theme: false,
  },
  reducers: {
    toggleTabs(state, action) {
      state.active = action.payload;
    },
    toggleTheme(state, action) {
      console.log("toggleTheme", "123");
      state.theme = !state.theme;
    },
  },
});

export const { toggleTabs, toggleTheme } = slice.actions;

export default slice.reducer;
