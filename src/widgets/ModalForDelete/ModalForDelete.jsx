import style from "./ModalForDelete.module.scss";
import Button from "../../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModalCategories,
  toggleModalForDelete,
  triggerRender,
} from "../../store/activeSlice";
import { decreaseCategory } from "../../store/categorySlice";

const ModalForDelete = () => {
  const categoryId = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();

  const handleDeleteCategory = () => {
    dispatch(decreaseCategory(categoryId));
    dispatch(toggleModalForDelete(false));
    dispatch(triggerRender());
  };

  return (
    <div
      className={style.ModalCategories}
      onClick={() => dispatch(toggleModalForDelete(false))}
    >
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modalTitle}>
          Вы действительно хотите удалить категорию?
        </h1>
        <Button view="add" onClick={() => handleDeleteCategory()}>
          Да
        </Button>
        <Button
          view="delete"
          onClick={() => dispatch(toggleModalForDelete(false))}
        >
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default ModalForDelete;
