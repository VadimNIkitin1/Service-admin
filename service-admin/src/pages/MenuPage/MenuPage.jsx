import Checkbox from "../../shared/Checkbox/Checkbox";

import style from "./MenuPage.module.scss";

const MenuPage = () => {
  const products = [
    { name: "Цезарь", cat: "Салат", price: 500 },
    { name: "Оливье", cat: "Салат", price: 400 },
    { name: "Греческий", cat: "Салат", price: 600 },
    { name: "Борщ", cat: "Супы", price: 500 },
    { name: "Уха", cat: "Супы", price: 500 },
    { name: "Харчо", cat: "Супы", price: 500 },
    { name: "Стейк", cat: "Второе", price: 1500 },
    { name: "Шашлык", cat: "Второе", price: 1200 },
    { name: "Азу", cat: "Второе", price: 900 },
    { name: "4 сыра", cat: "Пицца", price: 1000 },
    { name: "Мясная", cat: "Пицца", price: 1300 },
    { name: "Грибная", cat: "Пицца", price: 1000 },
  ];
  return (
    <div className={style.MenuPage}>
      <div className={style.widget}>
        <div className={style.widgetHeader}>
          <p className={style.widgetItemName}>Наименование</p>
          <p className={style.widgetItemCategories}>Категория</p>
          <p className={style.widgetItemPrice}>Цена</p>
          <p className={style.widgetItemQuantity}>Количество</p>
          <p className={style.widgetItemAvailability}>В наличии</p>
          <p className={style.widgetItemPopular}>Популярное</p>
        </div>
        <div className={style.list}>
          {products.map((prod) => (
            <div className={style.listItem} key={prod}>
              <p className={style.itemName}>{prod.name}</p>
              <p className={style.itemCategories}>{prod.cat}</p>
              <p className={style.itemPrice}>{prod.price}</p>
              <p className={style.itemQuantity}>{prod.price}</p>
              <Checkbox className={style.checkbox} />
              <Checkbox className={style.checkboxPopular} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
