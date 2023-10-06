import { useForm } from "react-hook-form";
import style from "./NotificationForm.module.scss";

const NotificationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p className={style.label}>Заголовок рассылки</p>
          <input className={style.titleNotification} {...register("title")} />
          {errors.title && (
            <p className={style.errorMsg}>{errors.title.message}</p>
          )}
        </label>
        <label>
          <p className={style.label}>Текст рассылки</p>
          <textarea className={style.textNotification} {...register("text")} />
          {errors.text && (
            <p className={style.errorMsg}>{errors.text.message}</p>
          )}
        </label>
        <label className={style.imageInput}>
          <p className={style.labelImage}>Выберите изображение рассылки</p>
          <input
            type="file"
            className={style.imageNotification}
            {...register("image")}
          />
          {errors.image && (
            <p className={style.errorMsg}>{errors.image.message}</p>
          )}
        </label>
        <label className={style.imageInput}>
          <p className={style.labelImage}>Выберите получателей рассылки</p>
          <input
            type="button"
            className={style.imageNotification}
            {...register("users")}
          />
          {errors.sendMe && (
            <p className={style.errorMsg}>{errors.sendMe.message}</p>
          )}
        </label>
        <label className={style.sendMeButton}>
          <p className={style.labelImage}></p>
          <input
            type="submit"
            value={"Отправить себе"}
            className={style.imageNotification}
            {...register("sendMe")}
          />
          {errors.sendMe && (
            <p className={style.errorMsg}>{errors.sendMe.message}</p>
          )}
        </label>
        <label className={style.sendButton}>
          <p className={style.labelImage}></p>
          <input
            type="submit"
            value={"Отправить рассылку"}
            className={style.imageNotification}
            {...register("send")}
          />
          {errors.send && (
            <p className={style.errorMsg}>{errors.send.message}</p>
          )}
        </label>
      </form>
    </div>
  );
};

export default NotificationForm;
