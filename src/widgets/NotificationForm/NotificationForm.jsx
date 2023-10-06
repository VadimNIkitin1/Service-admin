import { useForm } from "react-hook-form";
import style from "./NotificationForm.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";

const NotificationForm = () => {
  const theme = useSelector((state) => state.activeTab.theme);

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
          <input
            className={clsx(style.titleNotification, theme && style.light)}
            {...register("title")}
          />
          {errors.title && (
            <p className={style.errorMsg}>{errors.title.message}</p>
          )}
        </label>
        <label>
          <p className={style.label}>Текст рассылки</p>
          <textarea
            className={clsx(style.textNotification, theme && style.light)}
            {...register("text")}
          />
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
          <p className={style.labelImage}>Отправить себе</p>
          <input
            type="button"
            value={"Отправить себе"}
            className={style.imageNotification}
            {...register("sendMe")}
          />
          {errors.sendMe && (
            <p className={style.errorMsg}>{errors.sendMe.message}</p>
          )}
        </label>
        <label className={style.sendButton}>
          <p></p>
          <input
            type="submit"
            value={"Отправить рассылку"}
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
