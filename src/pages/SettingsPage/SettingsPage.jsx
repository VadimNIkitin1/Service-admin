import Table from "../../widgets/Table/Table";
import { settings } from "../../assets/db";
import style from "./SettingsPage.module.scss";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const tableHeaderSettings = useSelector(
    (state) => state.tableHeader.tableHeaderSettings
  );
  return (
    <div className={style.SettingsPage}>
      <Table data={settings} tableHeader={tableHeaderSettings} />
    </div>
  );
};

export default SettingsPage;
