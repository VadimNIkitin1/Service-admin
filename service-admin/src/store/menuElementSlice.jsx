import { createSlice } from "@reduxjs/toolkit";

import {
  MdOutlineMenuBook,
  MdMessage,
  MdAnalytics,
  MdOutlineSettings,
  MdOutlineMenuOpen,
  MdPeopleAlt,
} from "react-icons/md";

const slice = createSlice({
  name: "menuElement",
  initialState: {
    sideBarList: [
      { name: "Меню", link: "/menu", icon: <MdOutlineMenuBook /> },
      { name: "Категории", link: "/categories", icon: <MdOutlineMenuOpen /> },
      { name: "Клиенты", link: "/clients", icon: <MdPeopleAlt /> },
      { name: "Рассылки", link: "/notification", icon: <MdMessage /> },
      { name: "Аналитика", link: "/analytic", icon: <MdAnalytics /> },
      { name: "Настройки", link: "/settings", icon: <MdOutlineSettings /> },
    ],
  },
});

export default slice.reducer;
