import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";
import Button from "../../shared/Button/Button";
import ModalProducts from "../../widgets/ModalProducts/ModalProducts";

import style from "./MenuPage.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const MenuPage = () => {
  const [modal, setModal] = useState(false);
  const tableHeaderMenu = useSelector(
    (state) => state.menuElement.tableHeaderMenu
  );

  const products = undefined;

  return (
    <div className={style.MenuPage}>
      <Table data={products} tableHeader={tableHeaderMenu} />
      {modal && <ModalProducts setModal={setModal} />}
      {products === undefined || products.length === 0 ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
          <Button view="add" onClick={() => setModal(true)}>
            Добавить продукт
          </Button>
        </div>
      ) : (
        <div className={style.messageAddButton}>
          <Button view="add" onClick={() => setModal(true)}>
            Добавить продукт
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
