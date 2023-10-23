import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  toggleCheckbox,
  getUnits,
} from "../api/products";

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

export const toggleCheckboxProduct = createAsyncThunk(
  "products/toggleCheckboxProduct",
  async (data) => {
    return await toggleCheckbox(data);
  }
);

export const fetchUnits = createAsyncThunk("products/fetchUnits", async () => {
  return await getUnits();
});

const isError = (action) => {
  return action.type.endsWith("rejected");
};

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    quantity: 0,
    units: [],
  },
  reducers: {
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
      .addCase(toggleCheckboxProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleCheckboxProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUnits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUnits.fulfilled, (state, action) => {
        state.units = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { saveProduct } = slice.actions;

export default slice.reducer;
