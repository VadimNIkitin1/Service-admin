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
      { name: "Магазины", link: "/:company_id/shops", icon: <MdStore /> },
      { name: "Меню", link: "/:company_id/menu", icon: <MdOutlineMenuBook /> },
      {
        name: "Категории",
        link: "/:company_id/categories",
        icon: <MdOutlineMenuOpen />,
      },
      {
        name: "Пользователи",
        link: "/:company_id/clients",
        icon: <MdPeopleAlt />,
      },
      {
        name: "Рассылки",
        link: "/:company_id/notification",
        icon: <MdMessage />,
      },
      {
        name: "Аналитика",
        link: "/:company_id/analytic",
        icon: <MdAnalytics />,
      },
      {
        name: "Настройки",
        link: "/:company_id/settings",
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
