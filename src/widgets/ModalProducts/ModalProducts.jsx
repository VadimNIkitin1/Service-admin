import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { toggleModalProducts } from "../../store/activeSlice";

import InputFile from "../../shared/InputFile/InputFile";
import Button from "../../shared/Button/Button";

import style from "./ModalProducts.module.scss";
import { addedProduct, incrementProduct } from "../../store/productSlice";
import Checkbox from "../../shared/Checkbox/Checkbox";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/categorySlice";
import clsx from "clsx";

const ModalProducts = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const theme = useSelector((state) => state.activeTab.theme);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const requestData = {
      category_id: Number(data.category_id),
      name_rus: data.name_rus,
      description_rus: data.description_rus,
      price: Number(data.price),
      unit: Number(data.unit),
      wt: Number(data.wt),
      availability: data.availability,
      popular: data.popular,
      delivery: data.delivery,
      takeaway: data.takeaway,
      dinein: data.dinein,
    };

    dispatch(addedProduct(requestData));
    dispatch(incrementProduct());
    dispatch(toggleModalProducts(false));
    reset();
  };

  return (
    <div
      className={style.ModalProducts}
      onClick={() => dispatch(toggleModalProducts(false))}
    >
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modalTitle}>Добавить продукт</h1>
        <form className={style.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              columnGap: "100px",
              marginBottom: "30px",
            }}
          >
            <label className={style.modalLabel}>
              <p className={style.productTitle}>Категория</p>
              <select
                {...register("category_id", { required: true })}
                name="category_id"
                className={style.modalSelect}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name_rus}
                  </option>
                ))}
              </select>
              {errors.category_id && (
                <p className={style.errorMsg}>{errors.category_id.message}</p>
              )}
            </label>
            <label className={style.modalLabel}>
              <p className={style.productTitle}>Наименование</p>
              <input
                type="text"
                className={style.modalInput}
                placeholder="Наименование"
                {...register("name_rus", {
                  maxLength: { value: 20, message: "Не более 20 символов" },
                })}
              />
              {errors.name_rus && (
                <p className={style.errorMsg}>{errors.name_rus.message}</p>
              )}
            </label>
          </div>
          <div
            style={{ display: "flex", columnGap: "20px", marginBottom: "30px" }}
          >
            <label className={style.modalLabel}>
              <p className={style.productTitle}>Описание</p>
              <textarea
                placeholder="Описание"
                type="text"
                className={style.modalDescription}
                {...register("description_rus", { required: true })}
              />
              <div className={style.descGroup}>
                <input
                  placeholder="Ккал"
                  type="number"
                  className={style.modalInputSmall}
                  {...register("calories", { required: true })}
                />
                <input
                  placeholder="Белки"
                  type="number"
                  className={style.modalInputSmall}
                  {...register("protein", { required: true })}
                />
                <input
                  placeholder="Жиры"
                  type="number"
                  className={style.modalInputSmall}
                  {...register("fat", { required: true })}
                />
                <input
                  placeholder="Углеводы"
                  type="number"
                  className={style.modalInputSmall}
                  {...register("carbohydrates", { required: true })}
                />
              </div>
              <label className={style.modalLabel}>
                <p className={style.productTitle}>Цена</p>
                <input
                  placeholder="Цена"
                  type="number"
                  className={style.modalInputSmall}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <p className={style.errorMsg}>{errors.price.message}</p>
                )}
              </label>
              <label className={style.modalLabel}>
                <p className={style.productTitle}>Выход</p>
                <div className={style.descGroup}>
                  <input
                    placeholder="Выход"
                    type="number"
                    className={style.modalInputSmall}
                    {...register("wt", { required: true })}
                  />
                  <select
                    {...register("unit", { required: true })}
                    name="unit"
                    className={style.modalSelect}
                  >
                    <option value="1">Шт.</option>
                    <option value="2">Гр.</option>
                    <option value="3">Кг.</option>
                    <option value="4">Порц.</option>
                  </select>
                </div>
                {errors.weight && (
                  <p className={style.errorMsg}>{errors.weight.message}</p>
                )}
              </label>
              {errors.description && (
                <p className={style.errorMsg}>{errors.description.message}</p>
              )}
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              {/* <InputFile {...register("image")} /> */}
              <label className={style.containerCheckbox}>
                В наличии
                <input type="checkbox" {...register("availability")} />
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className={clsx(style.path, theme && style.light)}
                  ></path>
                </svg>
              </label>
              <label className={style.containerCheckbox}>
                Популярное
                <input type="checkbox" {...register("popular")} />
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className={clsx(style.path, theme && style.light)}
                  ></path>
                </svg>
              </label>
              <label className={style.containerCheckbox}>
                Доставка
                <input type="checkbox" {...register("delivery")} />
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className={clsx(style.path, theme && style.light)}
                  ></path>
                </svg>
              </label>
              <label className={style.containerCheckbox}>
                Самовывоз
                <input type="checkbox" {...register("takeaway")} />
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className={clsx(style.path, theme && style.light)}
                  ></path>
                </svg>
              </label>
              <label className={style.containerCheckbox}>
                Зал
                <input type="checkbox" {...register("dinein")} />
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className={clsx(style.path, theme && style.light)}
                  ></path>
                </svg>
              </label>
              {/* <label className={style.labelCheckbox}>
                В наличии
                <Checkbox {...register("availability")} />
              </label> */}
            </div>
          </div>
          <Button view="add" onClick={() => handleSubmit(onSubmit)}>
            Добавить
          </Button>
          <Button
            view="delete"
            onClick={() => dispatch(toggleModalProducts(false))}
          >
            Закрыть
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalProducts;
