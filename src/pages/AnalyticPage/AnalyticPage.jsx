import Table from "../../widgets/Table/Table";
import { useSelector } from "react-redux";
import { analytic } from "../../assets/db";
import style from "./AnalyticPage.module.scss";

const AnalyticPage = () => {
  const tableHeaderAnalytic = useSelector(
    (state) => state.tableHeader.tableHeaderAnalytic
  );
  return (
    <div className={style.AnalyticPage}>
      <Table data={analytic} tableHeader={tableHeaderAnalytic} />
    </div>
  );
};

export default AnalyticPage;
