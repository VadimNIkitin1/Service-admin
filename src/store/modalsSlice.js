import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modals",
  initialState: {
    modalProducts: false,
    modalCategories: false,
    modalEditCategories: false,
    modalEditProducts: false,
    modalForDelete: false,
    modalError: false,
  },
  reducers: {
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
    toggleModalForDelete(state, action) {
      state.modalForDelete = action.payload;
    },
    toggleModalError(state, action) {
      state.modalError = action.payload;
    },
  },
});

export const {
  toggleModalProducts,
  toggleModalCategories,
  toggleModalEditCategories,
  toggleModalEditProducts,
  toggleModalForDelete,
  toggleModalError,
} = slice.actions;

export default slice.reducer;
