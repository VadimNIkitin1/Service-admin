import Checkbox from "../../shared/Checkbox/Checkbox";
import style from "./TableRow.module.scss";

const TableRow = ({ className, el, tableHeader }) => {
  console.log(tableHeader);
  return (
    <div className={style.tableRow}>
      {tableHeader.map((i) => {
        switch (i.type) {
          case "button":
            return <button onClick={el[i.code]}>{i.name}</button>;
          case "checkbox":
            return <Checkbox checked={el[i.code]} className={className} />;
          default:
            return <p className={className}>{el[i.code]}</p>;
            break;
        }
      })}
    </div>
  );
};

export default TableRow;
