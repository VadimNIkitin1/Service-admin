import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "active",
  initialState: {
    active: "/shops",
    theme: false,
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
    triggerRender(state) {
      state.render = !state.render;
    },
    toggleSidebar(state, action) {
      state.sidebar = action.payload;
    },
  },
});

export const { toggleTabs, toggleTheme, triggerRender, toggleSidebar } =
  slice.actions;

export default slice.reducer;
