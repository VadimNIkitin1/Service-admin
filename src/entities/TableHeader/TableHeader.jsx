import { useDispatch, useSelector } from "react-redux";
import style from "./TableHeader.module.scss";
import clsx from "clsx";
import Button from "../../shared/Button/Button";
import { toggleModalProducts } from "../../store/activeSlice";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const TableHeader = ({ tableHeader }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.activeTab.theme);
  const company_id = useSelector((state) => state.auth.company_id);

  return (
    <div className={clsx(style.tableHeader, theme && style.light)}>
      {tableHeader.map((el) => (
        <p key={el.name} className={style.tableColumn}>
          {el.name}
        </p>
      ))}
      {location.pathname === `/${company_id}/menu` && (
        <Button
          view={"add"}
          onClick={() => dispatch(toggleModalProducts(true))}
        >
          <BsFillPlusSquareFill />
        </Button>
      )}
    </div>
  );
};

export default TableHeader;
