import Checkbox from "../../shared/Checkbox/Checkbox";
import style from "./TableRow.module.scss";
import { useSelector } from "react-redux";
import clsx from "clsx";

const TableRow = ({ className, el, tableHeader }) => {
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <div className={clsx(style.tableRow, theme && style.light)}>
      {tableHeader.map((i) => {
        switch (i.type) {
          case "button":
            return (
              <button key={i.name} onClick={el[i.code]}>
                {i.name}
              </button>
            );
          case "checkbox":
            return (
              <Checkbox
                key={i.name}
                checked={el[i.code]}
                className={className}
              />
            );
          default:
            return (
              <p key={i.name} className={className}>
                {el[i.code]}
              </p>
            );
            break;
        }
      })}
    </div>
  );
};

export default TableRow;
