import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/activeSlice";
import style from "./ThemeSwitches.module.scss";

const ThemeSwitches = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.active.theme);

  return (
    <div
      className={style.toggle_switch}
      onClick={(target) => {
        target.preventDefault();
        return dispatch(toggleTheme());
      }}
    >
      <label className={style.switch_label}>
        <input
          type="checkbox"
          checked={theme}
          onChange={() => console.log(theme)}
          className={style.checkbox}
        />
        <span className={style.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSwitches;
