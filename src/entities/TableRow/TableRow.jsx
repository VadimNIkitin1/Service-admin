import Checkbox from "../../shared/Checkbox/Checkbox";
import style from "./TableRow.module.scss";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Button from "../../shared/Button/Button";

const TableRow = ({ el, tableHeader }) => {
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
      <Button className={style.editBtn}>Изменить</Button>
      <Button className={style.deleteBtn}>Удалить</Button>
    </div>
  );
};

export default TableRow;
