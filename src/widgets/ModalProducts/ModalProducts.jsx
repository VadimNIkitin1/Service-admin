import { useForm } from "react-hook-form";
import { categories } from "../../assets/db";

import style from "./ModalProducts.module.scss";
import InputFile from "../../entities/InputFile/InputFile";

const ModalProducts = ({ setModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    setModal(false);
    reset();
  };

  return (
    <div className={style.ModalProducts} onClick={() => setModal(false)}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modalTitle}>Добавить продукт</h1>
        <form className={style.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={style.modalLabel}>
            <p className={style.productTitle}>Категория</p>
            <select
              {...register("category", { required: true })}
              name="categories"
              className={style.modalInput}
            >
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className={style.errorMsg}>{errors.category.message}</p>
            )}
          </label>
          <label className={style.modalLabel}>
            <p className={style.productTitle}>Наименование</p>
            <input
              type="text"
              className={style.modalInput}
              {...register("name", {
                maxLength: { value: 20, message: "Не более 20 символов" },
              })}
            />
            {errors.name && (
              <p className={style.errorMsg}>{errors.name.message}</p>
            )}
          </label>
          <div
            style={{ display: "flex", columnGap: "20px", marginBottom: "30px" }}
          >
            <label className={style.modalLabel}>
              <p className={style.productTitle}>Описание</p>
              <textarea
                type="text"
                className={style.modalDescription}
                {...register("description", { required: true })}
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
                <p className={style.productTitle}>Выход</p>
                <div className={style.descGroup}>
                  <input
                    type="number"
                    className={style.modalInputSmall}
                    {...register("weight", { required: true })}
                  />
                  <select
                    {...register("point", { required: true })}
                    name="point"
                    className={style.modalInput}
                  >
                    <option value="item">Шт.</option>
                    <option value="gr">Гр.</option>
                    <option value="kg">Кг.</option>
                    <option value="portion">Порц.</option>
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
            <InputFile {...register("image", { required: true })} />
          </div>
          <input type="submit" value="Добавить" className={style.modalBtn} />
          <button
            className={style.closeModalBtn}
            onClick={() => setModal(false)}
          >
            Закрыть
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalProducts;
