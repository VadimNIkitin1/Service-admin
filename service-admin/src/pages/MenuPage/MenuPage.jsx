import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";

import style from "./MenuPage.module.scss";

const MenuPage = () => {
  const tableHeader = [
    { name: "Наименование", code: "name", type: "str" },
    { name: "Категория", code: "categories", type: "str" },
    { name: "Цена", code: "price", type: "str" },
    { name: "В наличии", code: "availability", type: "checkbox" },
    { name: "Самовывоз", code: "pickup", type: "checkbox" },
    { name: "Доставка", code: "delivery", type: "checkbox" },
    { name: "Зал", code: "hall", type: "checkbox" },
    { name: "Популярное", code: "popular", type: "checkbox" },
  ];

  return (
    <div className={style.MenuPage}>
      <Table data={products} tableHeader={tableHeader} />
    </div>
  );
};

export default MenuPage;
