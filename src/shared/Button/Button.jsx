import clsx from "clsx";
import style from "./Button.module.scss";

const Button = ({ type, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        type === "add" && style.add,
        type === "delete" && style.delete,
        type === "edit" && style.edit
      )}
    />
  );
};

export default Button;
