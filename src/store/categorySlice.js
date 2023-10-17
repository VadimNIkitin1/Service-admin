import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, addCategory, deleteCategory } from "../app/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await getCategories();
  }
);

export const addedCategory = createAsyncThunk(
  "categories/addedCategory",
  async (data) => {
    return await addCategory(data);
  }
);

export const decreaseCategory = createAsyncThunk(
  "categories/decreaseCategory",
  async (id) => {
    return await deleteCategory(id);
  }
);

const isError = (action) => {
  return action.type.endsWith("rejected");
};

const slice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addedCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addedCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(decreaseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decreaseCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default slice.reducer;
