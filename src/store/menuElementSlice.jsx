import { createSlice } from "@reduxjs/toolkit";

import {
  MdOutlineMenuBook,
  MdMessage,
  MdAnalytics,
  MdOutlineSettings,
  MdOutlineMenuOpen,
  MdPeopleAlt,
  MdStore,
} from "react-icons/md";

const slice = createSlice({
  name: "menuElement",
  initialState: {
    sideBarList: [
      { name: "Магазины", link: "/shops", icon: <MdStore /> },
      { name: "Меню", link: "/menu", icon: <MdOutlineMenuBook /> },
      {
        name: "Категории",
        link: "/categories",
        icon: <MdOutlineMenuOpen />,
      },
      {
        name: "Пользователи",
        link: "/clients",
        icon: <MdPeopleAlt />,
      },
      {
        name: "Рассылки",
        link: "/notification",
        icon: <MdMessage />,
      },
      {
        name: "Аналитика",
        link: "/analytic",
        icon: <MdAnalytics />,
      },
      {
        name: "Настройки",
        link: "/settings",
        icon: <MdOutlineSettings />,
      },
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
    tableHeaderClients: [
      { name: "User Name", code: "name", type: "str" },
      { name: "User ID", code: "userId", type: "str" },
    ],
    tableHeaderAnalytic: [
      { name: "Метрика", code: "name", type: "str" },
      { name: "Показатель", code: "quantity", type: "str" },
    ],
    tableHeaderSettings: [
      { name: "Настройки", code: "name", type: "str" },
      { name: "", code: "values", type: "str" },
    ],
  },
});

export default slice.reducer;
