import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import menuElementReducer from "./menuElementSlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    menuElement: menuElementReducer,
  },
});
