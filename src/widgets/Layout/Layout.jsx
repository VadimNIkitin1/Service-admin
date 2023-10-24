import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import style from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={style.page}>
      <div className={style.navbar}>
        <NavBar />
      </div>
      <div className={style.content}>
        <Outlet />
      </div>
      <div className={style.sidebar}>
        <SideBar />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
