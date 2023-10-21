import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { fetchCategories } from "../../store/categorySlice";
import { toggleModalCategories } from "../../store/activeSlice";

import Button from "../../shared/Button/Button";
import ModalCategories from "../../widgets/ModalCategories/ModalCategories";
import ModalEditCategories from "../../widgets/ModalEditCategories/ModalEditCategories";

import Table from "../../widgets/Table/Table";

import style from "./CategoriesPage.module.scss";

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);
  const render = useSelector((state) => state.active.render);

  const dispatch = useDispatch();

  const modalCategories = useSelector((state) => state.active.modalCategories);

  const modalEditCategories = useSelector(
    (state) => state.active.modalEditCategories
  );

  const tableHeaderCategories = useSelector(
    (state) => state.tableHeader.tableHeaderCategories
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategories());
    }, 100);
  }, [render]);

  return (
    <div className={style.page}>
      <Button view="add" onClick={() => dispatch(toggleModalCategories(true))}>
        Добавить категорию <BsFillPlusSquareFill />
      </Button>
      <Table data={categories} tableHeader={tableHeaderCategories} />
      {modalCategories && <ModalCategories />}
      {modalEditCategories && <ModalEditCategories />}
    </div>
  );
};

export default CategoriesPage;
