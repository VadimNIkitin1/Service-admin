import style from "./SideBar.module.scss";

import SideBarList from "../../entities/SideBarList/SideBarList";

const SideBar = () => {
  return (
    <section className={style.sidebar}>
      <SideBarList />
    </section>
  );
};

export default SideBar;
