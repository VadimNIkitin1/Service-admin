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
    tableHeaderCategories: [
      { name: "Наименование", code: "name", type: "str" },
      { name: "В наличии", code: "availability", type: "checkbox" },
    ],
    tableHeaderMenu: [
      { name: "Наименование", code: "name", type: "str" },
      { name: "Категория", code: "categories", type: "str" },
      { name: "Цена", code: "price", type: "str" },
      { name: "В наличии", code: "availability", type: "checkbox" },
      { name: "Самовывоз", code: "pickup", type: "checkbox" },
      { name: "Доставка", code: "delivery", type: "checkbox" },
      { name: "Зал", code: "hall", type: "checkbox" },
      { name: "Популярное", code: "popular", type: "checkbox" },
    ],
  },
});

export default slice.reducer;
