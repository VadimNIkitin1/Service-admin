import { useForm } from "react-hook-form";

import style from "./ModalCategories.module.scss";

const ModalCategories = ({ setModal }) => {
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
    <div className={style.ModalCategories} onClick={() => setModal(false)}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modalTitle}>Добавить категорию</h1>
        <form className={style.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={style.modalLabel}>
            <p>Наименование</p>
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

export default ModalCategories;
