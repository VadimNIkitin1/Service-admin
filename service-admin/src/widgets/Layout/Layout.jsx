import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={style.HomePage}>
      <NavBar />
      <div className={style.content}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
