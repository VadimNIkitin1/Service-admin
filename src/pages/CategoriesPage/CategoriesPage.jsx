import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { categories } from "../../assets/db";
import { tableHeaderCategories } from "../../assets/db";

const CategoriesPage = () => {
  return (
    <div className={style.CategoriesPage}>
      <Table data={categories} tableHeader={tableHeaderCategories} />
    </div>
  );
};

export default CategoriesPage;