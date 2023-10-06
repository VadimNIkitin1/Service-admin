import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./SideBarItem.module.scss";
import { toggleTabs } from "../../store/activeSlice";

const SideBarItem = ({ item }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab.active);
  const { name, link, icon } = item;

  return (
    <Link
      className={
        activeTab === link ? style.sidebarItemActive : style.sidebarItem
      }
      to={link}
      onClick={() => dispatch(toggleTabs(link))}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};

export default SideBarItem;
