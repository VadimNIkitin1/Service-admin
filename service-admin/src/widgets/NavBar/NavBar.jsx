import ThemeSwitches from "../../shared/ThemeSwitches/ThemeSwitches";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.logo}>LOGO</h1>
      <ThemeSwitches />
    </nav>
  );
};

export default NavBar;
