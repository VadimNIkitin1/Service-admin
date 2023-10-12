import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "active",
  initialState: {
    active: "/shops",
    theme: false,
    modalProducts: false,
    modalCategories: false,
  },
  reducers: {
    toggleTabs(state, action) {
      state.active = action.payload;
    },
    toggleTheme(state) {
      state.theme = !state.theme;
    },
    toggleModalProducts(state, action) {
      state.modalProducts = action.payload;
    },
    toggleModalCategories(state, action) {
      state.modalCategories = action.payload;
    },
  },
});

export const {
  toggleTabs,
  toggleTheme,
  toggleModalProducts,
  toggleModalCategories,
} = slice.actions;

export default slice.reducer;
