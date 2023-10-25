import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import tableHeaderReducer from "./tableHeaderSlice";
import authReducer from "./authSlice";
import categoriesReducer from "./categorySlice";
import productsReducer from "./productSlice";
import modalsReducer from "./modalsSlice";

export default configureStore({
  reducer: {
    active: activeReducer,
    modals: modalsReducer,
    tableHeader: tableHeaderReducer,
    categories: categoriesReducer,
    products: productsReducer,
    auth: authReducer,
  },
});
