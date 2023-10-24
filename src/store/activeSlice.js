import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "active",
  initialState: {
    active: "/shops",
    theme: false,
    modalProducts: false,
    modalCategories: false,
    modalEditCategories: false,
    modalEditProducts: false,
    render: false,
    sidebar: false,
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
    toggleModalEditCategories(state, action) {
      state.modalEditCategories = action.payload;
    },
    toggleModalEditProducts(state, action) {
      state.modalEditProducts = action.payload;
    },
    triggerRender(state) {
      state.render = !state.render;
    },
    toggleSidebar(state, action) {
      state.sidebar = action.payload;
    },
  },
});

export const {
  toggleTabs,
  toggleTheme,
  toggleModalProducts,
  toggleModalCategories,
  toggleModalEditCategories,
  toggleModalEditProducts,
  triggerRender,
  toggleSidebar,
} = slice.actions;

export default slice.reducer;
