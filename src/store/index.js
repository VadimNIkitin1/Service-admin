import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import tableHeaderReducer from "./tableHeaderSlice";
import AuthReducer from "./authSlice";
import categoriesReducer from "./categorySlice";
import productsReducer from "./productSlice";

export default configureStore({
  reducer: {
    active: activeReducer,
    tableHeader: tableHeaderReducer,
    categories: categoriesReducer,
    products: productsReducer,
    auth: AuthReducer,
  },
});
