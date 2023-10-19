import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { toggleModalProducts } from "../../store/activeSlice";
import { fetchProducts } from "../../store/productSlice";

import Table from "../../widgets/Table/Table";
import ModalProducts from "../../widgets/ModalProducts/ModalProducts";
import ModalEditProducts from "../../widgets/ModalEditProducts/ModalEditProducts";

import Button from "../../shared/Button/Button";

import style from "./MenuPage.module.scss";

const MenuPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const quantity = useSelector((state) => state.products.quantity);
  const modalProducts = useSelector((state) => state.activeTab.modalProducts);
  const modalEditProducts = useSelector(
    (state) => state.activeTab.modalEditProducts
  );
  const tableHeaderMenu = useSelector(
    (state) => state.tableHeader.tableHeaderMenu
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 100);
  }, [quantity]);

  return (
    <div className={style.MenuPage}>
      <div style={{ display: "flex" }}>
        <Button
          view={"add"}
          onClick={() => dispatch(toggleModalProducts(true))}
        >
          Добавить продукт <BsFillPlusSquareFill />
        </Button>
      </div>
      <Table data={products} tableHeader={tableHeaderMenu} />
      {modalProducts && <ModalProducts />}
      {modalEditProducts && <ModalEditProducts />}
    </div>
  );
};

export default MenuPage;
