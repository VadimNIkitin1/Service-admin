import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { categories } from "../../assets/db";

import { useSelector } from "react-redux";

const CategoriesPage = () => {
  let tableHeaderCategories = useSelector(
    (state) => state.menuElement.tableHeaderCategories
  );

  return (
    <div className={style.CategoriesPage}>
      <Table data={categories} tableHeader={tableHeaderCategories} />
    </div>
  );
};

export default CategoriesPage;
