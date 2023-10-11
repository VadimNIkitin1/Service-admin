import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Checkbox from "../../shared/Checkbox/Checkbox";
import Button from "../../shared/Button/Button";

import clsx from "clsx";
import style from "./TableRow.module.scss";

const TableRow = ({ el, tableHeader }) => {
  const location = useLocation();
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <div className={clsx(style.tableRow, theme && style.light)}>
      {tableHeader.map((i) => {
        switch (i.type) {
          case "checkbox":
            return (
              <Checkbox
                key={i.name}
                checked={el[i.code]}
                className={style.tableColumn}
              />
            );
          default:
            return (
              <p key={i.name} className={style.tableColumn}>
                {el[i.code]}
              </p>
            );
            break;
        }
      })}
      {location.pathname === "/:company_id/menu" ||
      location.pathname === "/:company_id/categories" ? (
        <>
          <Button view="edit">Изменить</Button>
          <Button view="delete">Удалить</Button>
        </>
      ) : null}
    </div>
  );
};

export default TableRow;
