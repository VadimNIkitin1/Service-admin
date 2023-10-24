import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://swarovskidmitrii.ru/api/v1/";
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/json";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`category/`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`category/`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`category/?category_id=${data.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`category/?category_id=${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const toggleCheckboxCategory = createAsyncThunk(
  "products/toggleCheckboxCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `category/${data.id}/checkbox/?checkbox=${data.code}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const isError = (action) => {
  return action.type.endsWith("rejected");
};

const slice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    category: null,
  },
  reducers: {
    saveCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(editCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(toggleCheckboxCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleCheckboxCategory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { saveCategory } = slice.actions;

export default slice.reducer;
