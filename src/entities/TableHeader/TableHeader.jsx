import { useSelector } from "react-redux";
import style from "./TableHeader.module.scss";
import clsx from "clsx";

const TableHeader = ({ tableHeader }) => {
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <div className={clsx(style.tableHeader, theme && style.light)}>
      {tableHeader.map((el) => (
        <p key={el.name} className={style.tableColumn}>
          {el.name}
        </p>
      ))}
    </div>
  );
};

export default TableHeader;
