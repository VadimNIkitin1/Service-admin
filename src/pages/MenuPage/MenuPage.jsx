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
      {products === undefined ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
          <Button view="add" onClick={() => setModal(true)}>
            Добавить
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default MenuPage;
