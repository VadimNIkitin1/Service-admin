import style from "./SideBar.module.scss";
import {
  MdOutlineMenuBook,
  MdMessage,
  MdAnalytics,
  MdOutlineSettings,
  MdOutlineMenuOpen,
  MdPeopleAlt,
} from "react-icons/md";

const SideBar = () => {
  return (
    <section className={style.sidebar}>
      <div className={style.sidebarItem}>
        <MdOutlineMenuBook />
        <p>Меню</p>
      </div>
      <div className={style.sidebarItem}>
        <MdOutlineMenuOpen />
        <p>Категории</p>
      </div>
      <div className={style.sidebarItem}>
        <MdPeopleAlt />
        <p>Клиенты</p>
      </div>
      <div className={style.sidebarItem}>
        <MdMessage />
        <p>Рассылки</p>
      </div>
      <div className={style.sidebarItem}>
        <MdAnalytics />
        <p>Аналитика</p>
      </div>
      <div className={style.sidebarItem}>
        <MdOutlineSettings />
        <p>Настройки</p>
      </div>
    </section>
  );
};

export default SideBar;
