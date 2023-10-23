import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import style from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={style.HomePage}>
      <NavBar />
      <div className={style.content}>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
