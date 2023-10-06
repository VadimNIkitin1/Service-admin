import TableRow from "../../entities/TableRow/TableRow";
import { useSelector } from "react-redux";
import clsx from "clsx";

import style from "./Table.module.scss";

const Table = ({ data, tableHeader }) => {
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <div className={style.table}>
      <div className={clsx(style.tableHeader, theme && style.light)}>
        {tableHeader.map((el) => (
          <p key={el.name} className={style.tableColumn}>
            {el.name}
          </p>
        ))}
      </div>
      <div className={style.table}>
        {data.map((el) => {
          el["delete"] = () => {
            console.log(`delete product-${el.name}`);
          };
          return (
            <TableRow
              key={el.name}
              className={style.tableColumn}
              el={el}
              tableHeader={tableHeader}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
