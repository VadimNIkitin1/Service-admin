import TableRow from "../../entities/TableRow/TableRow";
import TableHeader from "../../entities/TableHeader/TableHeader";

import style from "./Table.module.scss";

const Table = ({ data, tableHeader }) => {
  return (
    <div className={style.table}>
      <TableHeader tableHeader={tableHeader} />
      <div className={style.table}>
        {data === undefined
          ? null
          : data.map((el) => {
              el["delete"] = () => {
                console.log(`delete product-${el.name}`);
              };
              data.map((el) => {
                el["edit"] = () => {
                  console.log(`edit product-${el.name}`);
                };
              });
              return (
                <TableRow key={el.name} el={el} tableHeader={tableHeader} />
              );
            })}
      </div>
    </div>
  );
};

export default Table;
