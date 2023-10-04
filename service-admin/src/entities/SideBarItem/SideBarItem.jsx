import { Link } from "react-router-dom";
import style from "./SideBarItem.module.scss";

const SideBarItem = ({ item, idx, activeTab, toggleTabs }) => {
  const { name, link, icon } = item;

  return (
    <Link
      className={
        activeTab === idx ? style.sidebarItemActive : style.sidebarItem
      }
      to={link}
      onClick={() => toggleTabs(idx)}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};

export default SideBarItem;
