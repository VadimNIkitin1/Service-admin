import { Link } from "react-router-dom";
import ThemeSwitches from "../../shared/ThemeSwitches/ThemeSwitches";
import { toggleTabs } from "../../store/activeSlice";
import { GiEnvelope } from "react-icons/gi";
import style from "./NavBar.module.scss";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className={style.navbar}>
      <Link
        to={"/menu"}
        onClick={() => dispatch(toggleTabs("/menu"))}
        className={style.logoText}
      >
        ENVELOPE <GiEnvelope className={style.logo} />
      </Link>
      <ThemeSwitches />
    </nav>
  );
};

export default NavBar;
