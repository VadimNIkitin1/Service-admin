import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEditCalendar, MdDeleteForever } from "react-icons/md";

import {
  decreaseCategory,
  saveCategory,
  toggleCheckboxCategory,
} from "../../store/categorySlice";
import {
  decreaseProduct,
  saveProduct,
  toggleCheckboxProduct,
} from "../../store/productSlice";
import {
  toggleModalEditCategories,
  toggleModalEditProducts,
  triggerRender,
} from "../../store/activeSlice";

import Checkbox from "../../shared/Checkbox/Checkbox";
import Button from "../../shared/Button/Button";

import clsx from "clsx";
import style from "./TableRow.module.scss";

const TableRow = ({ cell, tableHeader }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.active.theme);
  const company_id = useSelector((state) => state.auth.company_id);

  const deleteCategory = (id) => {
    dispatch(decreaseCategory(id));
    dispatch(triggerRender());
  };

  const deleteProduct = (id) => {
    dispatch(decreaseProduct(id));
    dispatch(triggerRender());
  };

  const handleEditCategory = (name) => {
    dispatch(saveCategory(name));
    dispatch(toggleModalEditCategories(true));
  };

  const handleEditProduct = (name) => {
    dispatch(saveProduct(name));
    dispatch(toggleModalEditProducts(true));
  };

  const handleCheckbox = (id, code) => {
    if (location.pathname === `/${company_id}/menu`) {
      dispatch(toggleCheckboxProduct({ id, code }));
    }
    if (location.pathname === `/${company_id}/categories`) {
      dispatch(toggleCheckboxCategory({ id, code }));
    }
    dispatch(triggerRender());
  };

  return (
    <div className={clsx(style.tableRow, theme && style.light)}>
      {tableHeader.map((column) => {
        switch (column.type) {
          case "checkbox":
            return (
              <Checkbox
                key={column.name}
                checked={cell[column.code]}
                className={style.tableColumn}
                onChange={() => handleCheckbox(cell.id, column.code)}
              />
            );
          default:
            return (
              <p key={column.name} className={style.tableColumn}>
                {cell[column.code]}
              </p>
            );
            break;
        }
      })}
      {location.pathname === `/${company_id}/categories` ? (
        <>
          <Button view="edit" onClick={() => handleEditCategory(cell)}>
            <MdOutlineEditCalendar />
          </Button>
          <Button view="delete" onClick={() => deleteCategory(cell.id)}>
            <MdDeleteForever />
          </Button>
        </>
      ) : null}
      {location.pathname === `/${company_id}/menu` ? (
        <>
          <Button view="edit" onClick={() => handleEditProduct(cell)}>
            <MdOutlineEditCalendar />
          </Button>
          <Button view="delete" onClick={() => deleteProduct(cell.id)}>
            <MdDeleteForever />
          </Button>
        </>
      ) : null}
      {location.pathname === `/${company_id}/settings` ? (
        <>
          <Button view="edit">
            <MdOutlineEditCalendar />
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default TableRow;
