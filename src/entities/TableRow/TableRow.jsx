import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Checkbox from "../../shared/Checkbox/Checkbox";

import clsx from "clsx";
import style from "./TableRow.module.scss";
import Button from "../../shared/Button/Button";

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
      {location.pathname === "/menu" || location.pathname === "/categories" ? (
        <>
          <Button type="edit">Изменить</Button>
          <Button type="delete">Удалить</Button>
        </>
      ) : null}
    </div>
  );
};

export default TableRow;
