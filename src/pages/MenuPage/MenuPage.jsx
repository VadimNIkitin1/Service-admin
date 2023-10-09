import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";
import Button from "../../shared/Button/Button";

import style from "./MenuPage.module.scss";
import { useSelector } from "react-redux";

const MenuPage = () => {
  const tableHeaderMenu = useSelector(
    (state) => state.menuElement.tableHeaderMenu
  );

  const products = undefined;

  return (
    <div className={style.MenuPage}>
      <Table data={products} tableHeader={tableHeaderMenu} />
      {products === undefined ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
          <Button type="add">Добавить</Button>
        </div>
      ) : null}
    </div>
  );
};

export default MenuPage;
