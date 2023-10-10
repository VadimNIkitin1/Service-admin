import { useSelector } from "react-redux";

import clsx from "clsx";
import style from "./Button.module.scss";

const Button = ({ view, ...props }) => {
  const theme = useSelector((state) => state.activeTab.theme);

  return (
    <button
      {...props}
      className={clsx(
        view === "add" && style.add,
        view === "delete" && style.delete,
        view === "edit" && style.edit,
        theme && style.light
      )}
    />
  );
};

export default Button;
