import { useState } from "react";
import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { categories } from "../../assets/db";
import Button from "../../shared/Button/Button";

import { useSelector } from "react-redux";
import ModalCategories from "../../widgets/ModalCategories/ModalCategories";

const CategoriesPage = () => {
  const [modal, setModal] = useState(false);

  let tableHeaderCategories = useSelector(
    (state) => state.menuElement.tableHeaderCategories
  );

  const categories = undefined;

  return (
    <div className={style.CategoriesPage}>
      <Table data={categories} tableHeader={tableHeaderCategories} />
      {modal && <ModalCategories setModal={setModal} />}
      {categories === undefined ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
          <Button type="add" onClick={() => setModal(true)}>
            Добавить
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesPage;
