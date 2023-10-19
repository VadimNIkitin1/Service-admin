import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../app/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

export const addedProduct = createAsyncThunk(
  "products/addedProduct",
  async (data) => {
    return await addProduct(data);
  }
);

export const editedProduct = createAsyncThunk(
  "products/editedProduct",
  async (data, id) => {
    return await editProduct(data, id);
  }
);

export const decreaseProduct = createAsyncThunk(
  "products/decreaseProduct",
  async (id) => {
    return await deleteProduct(id);
  }
);

const isError = (action) => {
  return action.type.endsWith("rejected");
};

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    incrementProduct(state) {
      state.quantity = state.quantity + 1;
    },
    decrementProduct(state) {
      state.quantity = state.quantity - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addedProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addedProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(decreaseProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decreaseProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { incrementProduct, decrementProduct } = slice.actions;

export default slice.reducer;
