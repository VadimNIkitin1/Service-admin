import style from "./ThemeSwitches.module.scss";

const ThemeSwitches = () => {
  return (
    <div className={style.toggle_switch}>
      <label className={style.switch_label}>
        <input type="checkbox" className={style.checkbox} />
        <span className={style.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSwitches;
