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
        data.map((el) => (
          <TableRow key={el.name_rus} el={el} tableHeader={tableHeader} />
        ))
      )}
    </>
  );
};

export default Table;
