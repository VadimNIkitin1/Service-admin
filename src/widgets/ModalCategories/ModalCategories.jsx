import { useForm } from "react-hook-form";

import style from "./ModalCategories.module.scss";
import Button from "../../shared/Button/Button";
import { useDispatch } from "react-redux";
import { toggleModalCategories } from "../../store/activeSlice";

const ModalCategories = ({ setModal }) => {
  const dispatch = useDispatch();
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
    <div
      className={style.ModalCategories}
      onClick={() => dispatch(toggleModalCategories(false))}
    >
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
          <Button view="add" type={"submit"}>
            Добавить
          </Button>
          <Button
            view="delete"
            onClick={() => dispatch(toggleModalCategories(false))}
          >
            Закрыть
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalCategories;
