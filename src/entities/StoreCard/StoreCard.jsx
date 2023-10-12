import clsx from "clsx";
import style from "./StoreCard.module.scss";
import { useSelector } from "react-redux";

const StoreCard = (props) => {
  const theme = useSelector((state) => state.activeTab.theme);
  return (
    <div className={clsx(style.card, theme && style.light)}>
      <p>{props.name}</p>
    </div>
  );
};

export default StoreCard;
