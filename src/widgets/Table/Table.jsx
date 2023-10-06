import TableRow from "../../entities/TableRow/TableRow";

import style from "./Table.module.scss";

const Table = ({ data, tableHeader }) => {
  return (
    <div className={style.table}>
      <div className={style.tableHeader}>
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
