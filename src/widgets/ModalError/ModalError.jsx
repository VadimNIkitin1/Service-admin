import style from "./ModalError.module.scss";
import Button from "../../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalError } from "../../store/modalsSlice";

const ModalError = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.categories);
  console.log("MODAL ERROR!!!");
  console.log(error);

  return (
    <div
      className={style.wrapper}
      onClick={() => dispatch(toggleModalError(false))}
    >
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        {error && <h1 className={style.modalTitle}>{error.detail}</h1>}
        <Button view="delete" onClick={() => dispatch(toggleModalError(false))}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default ModalError;
