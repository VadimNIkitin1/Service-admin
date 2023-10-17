import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdOutlineEditCalendar, MdDeleteForever } from "react-icons/md";

import Checkbox from "../../shared/Checkbox/Checkbox";
import Button from "../../shared/Button/Button";

import clsx from "clsx";
import style from "./TableRow.module.scss";

const TableRow = ({ el, tableHeader }) => {
  console.log(el);
  const location = useLocation();
  const theme = useSelector((state) => state.activeTab.theme);
  const company_id = useSelector((state) => state.auth.company_id);

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
      {location.pathname === `/${company_id}/menu` ||
      location.pathname === `/${company_id}/categories` ? (
        <>
          <Button view="edit">
            <MdOutlineEditCalendar />
          </Button>
          <Button view="delete">
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
