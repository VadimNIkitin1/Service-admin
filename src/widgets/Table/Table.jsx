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
        data.map((cell) => (
          <TableRow key={cell.name_rus} cell={cell} tableHeader={tableHeader} />
        ))
      )}
    </>
  );
};

export default Table;
