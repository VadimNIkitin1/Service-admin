import { useDispatch, useSelector } from "react-redux";
import Button from "../../shared/Button/Button";
import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { BsFillPlusSquareFill } from "react-icons/bs";
// import { categories } from "../../assets/db";
import { toggleModalCategories } from "../../store/activeSlice";
import ModalCategories from "../../widgets/ModalCategories/ModalCategories";
import { useEffect, useState } from "react";
import { getCategories } from "../../app/api";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  console.log(categories);

  const tableHeaderCategories = useSelector(
    (state) => state.menuElement.tableHeaderCategories
  );

  const modalCategories = useSelector(
    (state) => state.activeTab.modalCategories
  );

  return (
    <div className={style.page}>
      <Button view="add" onClick={() => dispatch(toggleModalCategories(true))}>
        Добавить категорию <BsFillPlusSquareFill />
      </Button>
      <Table data={categories} tableHeader={tableHeaderCategories} />
      {modalCategories && <ModalCategories />}
      {categories === undefined || categories.length === 0 ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesPage;
