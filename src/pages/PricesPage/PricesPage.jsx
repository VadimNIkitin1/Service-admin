import Table from "../../widgets/Table/Table";
import { settings } from "../../assets/db";
import style from "./PricesPage.module.scss";
import { useSelector } from "react-redux";

const PricesPage = () => {
  const tableHeaderSettings = useSelector(
    (state) => state.menuElement.tableHeaderSettings
  );
  return (
    <div className={style.PricesPage}>
      <Table data={settings} tableHeader={tableHeaderSettings} />
    </div>
  );
};

export default PricesPage;
