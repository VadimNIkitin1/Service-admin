import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { getCategories } from "../../store/categorySlice";
import {
  toggleModalCategories,
  toggleModalError,
} from "../../store/activeSlice";

import Button from "../../shared/Button/Button";
import ModalCategories from "../../widgets/ModalCategories/ModalCategories";
import ModalEditCategories from "../../widgets/ModalEditCategories/ModalEditCategories";
import ModalForDelete from "../../widgets/ModalForDelete/ModalForDelete";

import Table from "../../widgets/Table/Table";

import style from "./CategoriesPage.module.scss";
import ModalError from "../../widgets/ModalError/ModalError";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories, error } = useSelector((state) => state.categories);
  const render = useSelector((state) => state.active.render);

  const modalCategories = useSelector((state) => state.active.modalCategories);

  const modalEditCategories = useSelector(
    (state) => state.active.modalEditCategories
  );
  const modalForDelete = useSelector((state) => state.active.modalForDelete);

  const tableHeaderCategories = useSelector(
    (state) => state.tableHeader.tableHeaderCategories
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCategories());
    }, 200);
  }, [render]);

  return (
    <div className={style.page}>
      <Button view="add" onClick={() => dispatch(toggleModalCategories(true))}>
        Добавить категорию <BsFillPlusSquareFill />
      </Button>
      <Table data={categories} tableHeader={tableHeaderCategories} />
      {modalCategories && <ModalCategories />}
      {modalEditCategories && <ModalEditCategories />}
      {modalForDelete && <ModalForDelete />}
      {error && <ModalError />}
    </div>
  );
};

export default CategoriesPage;
