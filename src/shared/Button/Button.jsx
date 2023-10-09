import { useSelector } from "react-redux";

import clsx from "clsx";
import style from "./Button.module.scss";

const Button = ({ type, ...props }) => {
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <button
      {...props}
      className={clsx(
        type === "add" && style.add,
        type === "delete" && style.delete,
        type === "edit" && style.edit,
        theme && style.light
      )}
    />
  );
};

export default Button;
