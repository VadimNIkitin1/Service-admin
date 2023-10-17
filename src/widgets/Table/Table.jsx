import TableRow from "../../entities/TableRow/TableRow";
import TableHeader from "../../entities/TableHeader/TableHeader";

import style from "./Table.module.scss";

const Table = ({ data, tableHeader }) => {
  return (
    <>
      <TableHeader tableHeader={tableHeader} />
      {data === undefined || data.length === 0 ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
        </div>
      ) : (
        data.map((el) => {
          // el["delete"] = () => {
          //   console.log(`delete product-${el.name}`);
          // };
          // data.map((el) => {
          //   el["edit"] = () => {
          //     console.log(`edit product-${el.name}`);
          //   };
          // });
          return <TableRow key={el.name} el={el} tableHeader={tableHeader} />;
        })
      )}
    </>
  );
};

export default Table;
