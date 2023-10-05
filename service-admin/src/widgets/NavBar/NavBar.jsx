import ThemeSwitches from "../../shared/ThemeSwitches/ThemeSwitches";
import { GiEnvelope } from "react-icons/gi";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.logoText}>
        ENVELOPE <GiEnvelope className={style.logo} />
      </h1>
      <ThemeSwitches />
    </nav>
  );
};

export default NavBar;
