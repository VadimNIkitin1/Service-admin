import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import menuElementReducer from "./menuElementSlice";
import AuthReducer from "./authSlice";
import categoriesReducer from "./categorySlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    menuElement: menuElementReducer,
    categories: categoriesReducer,
    auth: AuthReducer,
  },
});
