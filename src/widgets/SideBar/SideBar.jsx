import style from "./SideBar.module.scss";
import clsx from "clsx";

import SideBarList from "../../entities/SideBarList/SideBarList";
import { useSelector } from "react-redux";

const SideBar = () => {
  const theme = useSelector((state) => state.active.theme);
  return (
    <section className={clsx(style.sidebar, theme && style.light)}>
      <SideBarList />
    </section>
  );
};

export default SideBar;
