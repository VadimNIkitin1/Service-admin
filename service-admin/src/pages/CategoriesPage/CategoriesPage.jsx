import Checkbox from "../../shared/Checkbox/Checkbox";
import style from "./CategoriesPage.module.scss";

const CategoriesPage = () => {
  const categories = ["Пицца", "Роллы", "Салаты", "Морепродукты", "BBQ"];
  return (
    <div className={style.CategoriesPage}>
      <div className={style.widget}>
        <p className={style.widgetItem}>Наименование</p>
        <p className={style.widgetItem}>В наличии</p>
      </div>
      <div className={style.list}>
        {categories.map((cat) => (
          <div className={style.listItem} key={cat}>
            <p>{cat}</p>
            <Checkbox className={style.checkbox} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
