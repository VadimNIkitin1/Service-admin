import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import menuElementReducer from "./menuElementSlice";
import AuthReducer from "./authSlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    menuElement: menuElementReducer,
    auth: AuthReducer,
  },
});
