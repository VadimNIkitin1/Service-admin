import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";
import { tableHeaderMenu } from "../../assets/db";

import style from "./MenuPage.module.scss";

const MenuPage = () => {
  return (
    <div className={style.MenuPage}>
      <Table data={products} tableHeader={tableHeaderMenu} />
    </div>
  );
};

export default MenuPage;
