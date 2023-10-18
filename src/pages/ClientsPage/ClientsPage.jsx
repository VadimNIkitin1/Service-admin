import { useSelector } from "react-redux";
import { clients } from "../../assets/db";
import Table from "../../widgets/Table/Table";
import style from "./ClientsPage.module.scss";

const ClientsPage = () => {
  const tableHeaderClients = useSelector(
    (state) => state.tableHeader.tableHeaderClients
  );
  return (
    <div className={style.ClientsPage}>
      <Table data={clients} tableHeader={tableHeaderClients} />
    </div>
  );
};

export default ClientsPage;
