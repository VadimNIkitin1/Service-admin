import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tableHeader",
  initialState: {
    tableHeaderCategories: [
      { name: "Наименование", code: "name_rus", type: "str" },
      { name: "В наличии", code: "availability", type: "checkbox" },
    ],
    tableHeaderMenu: [
      { name: "Наименование", code: "name_rus", type: "str" },
      { name: "Категория", code: "category_id", type: "str" },
      { name: "Цена", code: "price", type: "str" },
      { name: "В наличии", code: "availability", type: "checkbox" },
      { name: "Популярное", code: "popular", type: "checkbox" },
      { name: "Самовывоз", code: "takeaway", type: "checkbox" },
      { name: "Доставка", code: "delivery", type: "checkbox" },
      { name: "Зал", code: "dinein", type: "checkbox" },
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
