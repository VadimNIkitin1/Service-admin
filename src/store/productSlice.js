import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  toggleProduct,
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
  async (data) => {
    return await editProduct(data);
  }
);

export const decreaseProduct = createAsyncThunk(
  "products/decreaseProduct",
  async (id) => {
    return await deleteProduct(id);
  }
);

export const toggleCheckbox = createAsyncThunk(
  "products/toggleCheckbox",
  async (data) => {
    return await toggleProduct(data);
  }
);

const isError = (action) => {
  return action.type.endsWith("rejected");
};

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    quantity: 0,
  },
  reducers: {
    incrementProduct(state) {
      state.quantity = state.quantity + 1;
    },
    decrementProduct(state) {
      state.quantity = state.quantity - 1;
    },
    saveProduct(state, action) {
      state.product = action.payload;
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
      .addCase(toggleCheckbox.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleCheckbox.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { incrementProduct, decrementProduct, saveProduct } =
  slice.actions;

export default slice.reducer;
