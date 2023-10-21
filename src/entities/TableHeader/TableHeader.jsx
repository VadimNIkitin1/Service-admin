import { useSelector } from "react-redux";
import style from "./TableHeader.module.scss";
import clsx from "clsx";

const TableHeader = ({ tableHeader }) => {
  const theme = useSelector((state) => state.active.theme);

  return (
    <div className={clsx(style.tableHeader, theme && style.light)}>
      {tableHeader.map((column) => (
        <p key={column.name} className={style.tableColumn}>
          {column.name}
        </p>
      ))}
    </div>
  );
};

export default TableHeader;
