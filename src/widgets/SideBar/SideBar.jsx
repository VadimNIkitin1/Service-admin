import style from "./SideBar.module.scss";
import clsx from "clsx";

import SideBarList from "../../entities/SideBarList/SideBarList";
import { useDispatch, useSelector } from "react-redux";
import BurgerButton from "../../shared/BurgerButton/BurgerButton";
import { toggleSidebar } from "../../store/activeSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.active.theme);
  const sidebar = useSelector((state) => state.active.sidebar);

  return sidebar ? (
    <section className={clsx(style.sidebar, theme && style.light)}>
      <SideBarList />
    </section>
  ) : (
    <section className={clsx(style.button, theme && style.light)}>
      <BurgerButton onClick={() => dispatch(toggleSidebar(true))} />
    </section>
  );
};

export default SideBar;
