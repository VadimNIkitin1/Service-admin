import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import style from "./BurgerButton.module.scss";
import { useSelector } from "react-redux";

const BurgerButton = (props) => {
  const sidebar = useSelector((state) => state.active.sidebar);
  return (
    <button {...props} className={style.button}>
      {sidebar ? <MdOutlineKeyboardDoubleArrowUp /> : <GiHamburgerMenu />}
    </button>
  );
};

export default BurgerButton;
