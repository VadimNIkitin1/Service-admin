import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Checkbox from "../../shared/Checkbox/Checkbox";
import Button from "../../shared/Button/Button";

import clsx from "clsx";
import style from "./TableRow.module.scss";

const TableRow = ({ el, tableHeader }) => {
  const location = useLocation();
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <div className={style.container}>
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
      </div>
      {location.pathname === "/menu" || location.pathname === "/categories" ? (
        <>
          <Button className={style.editBtn}>Изменить</Button>
          <Button className={style.deleteBtn}>Удалить</Button>
        </>
      ) : null}
    </div>
  );
};

export default TableRow;
