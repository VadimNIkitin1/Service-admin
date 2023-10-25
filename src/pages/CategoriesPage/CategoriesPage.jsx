import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { getCategories } from "../../store/categorySlice";
import {
  toggleModalCategories,
  toggleModalError,
} from "../../store/modalsSlice";

import ModalCategories from "../../widgets/ModalCategories/ModalCategories";
import ModalEditCategories from "../../widgets/ModalEditCategories/ModalEditCategories";
import ModalForDelete from "../../widgets/ModalForDelete/ModalForDelete";
import ModalError from "../../widgets/ModalError/ModalError";
import Table from "../../widgets/Table/Table";

import Button from "../../shared/Button/Button";

import style from "./CategoriesPage.module.scss";
import Loader from "../../shared/Loader/Loader";

const CategoriesPage = () => {
  console.log("Render category page");
  const dispatch = useDispatch();
  const { categories, error, loading } = useSelector(
    (state) => state.categories
  );

  const render = useSelector((state) => state.active.render);

  const modalCategories = useSelector((state) => state.modals.modalCategories);

  const modalEditCategories = useSelector(
    (state) => state.modals.modalEditCategories
  );
  const modalForDelete = useSelector((state) => state.modals.modalForDelete);
  const modalError = useSelector((state) => state.modals.modalError);

  const tableHeaderCategories = useSelector(
    (state) => state.tableHeader.tableHeaderCategories
  );

  useEffect(() => {
    dispatch(getCategories());
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
    </div>
  );
};

export default CategoriesPage;
