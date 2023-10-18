import { useDispatch, useSelector } from "react-redux";
import Button from "../../shared/Button/Button";
import Table from "../../widgets/Table/Table";
import style from "./CategoriesPage.module.scss";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { toggleModalCategories } from "../../store/activeSlice";
import ModalCategories from "../../widgets/ModalCategories/ModalCategories";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categorySlice";

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);
  const quantity = useSelector((state) => state.categories.quantity);
  const dispatch = useDispatch();

  const modalCategories = useSelector(
    (state) => state.activeTab.modalCategories
  );

  const tableHeaderCategories = useSelector(
    (state) => state.menuElement.tableHeaderCategories
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategories());
    }, 100);
  }, [quantity]);

  return (
    <div className={style.page}>
      <Button view="add" onClick={() => dispatch(toggleModalCategories(true))}>
        Добавить категорию <BsFillPlusSquareFill />
      </Button>
      <Table data={categories} tableHeader={tableHeaderCategories} />
      {modalCategories && <ModalCategories />}
    </div>
  );
};

export default CategoriesPage;
