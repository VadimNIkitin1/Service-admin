import Checkbox from "../../shared/Checkbox/Checkbox";
import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { categories } from "../../assets/db";

const CategoriesPage = () => {
  const tableHeader = [
    { name: "Наименование", code: "name", type: "str" },
    { name: "В наличии", code: "availability", type: "checkbox" },
  ];
  return (
    <div className={style.CategoriesPage}>
      <Table data={categories} tableHeader={tableHeader} />
    </div>
  );
};

export default CategoriesPage;
