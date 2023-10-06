import { Link } from "react-router-dom";
import ThemeSwitches from "../../shared/ThemeSwitches/ThemeSwitches";
import { toggleTabs } from "../../store/activeSlice";
import { GiEnvelope } from "react-icons/gi";
import style from "./NavBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.activeTab.theme);
  return (
    <nav className={clsx(style.navbar, theme && style.light)}>
      <Link
        to={"/menu"}
        onClick={() => dispatch(toggleTabs("/menu"))}
        className={clsx(style.logoText, theme && style.light)}
      >
        ENVELOPE <GiEnvelope className={style.logo} />
      </Link>
      <ThemeSwitches />
    </nav>
  );
};

export default NavBar;
