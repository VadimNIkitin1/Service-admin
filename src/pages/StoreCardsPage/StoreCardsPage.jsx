import StoreCard from "../../entities/StoreCard/StoreCard";
import { storeCard } from "../../assets/db";
import style from "./StoreCardsPage.module.scss";

const StoreCardsPage = () => {
  return (
    <div className={style.StoreCardsPage}>
      {storeCard.map((card) => (
        <StoreCard key={card} name={card} />
      ))}
    </div>
  );
};

export default StoreCardsPage;
