import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";

import style from "./MenuPage.module.scss";
import { useSelector } from "react-redux";

const MenuPage = () => {
  const tableHeaderMenu = useSelector(
    (state) => state.menuElement.tableHeaderMenu
  );
  return (
    <div className={style.MenuPage}>
      <Table data={products} tableHeader={tableHeaderMenu} />
    </div>
  );
};

export default MenuPage;
