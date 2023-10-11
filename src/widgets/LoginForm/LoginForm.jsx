import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GiEnvelope } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../../store/authSlice";

import style from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const PASSWORD_REGEXP =
    /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?()]).*$/iu;

  const onSubmit = () => {
    dispatch(toggleAuth(true));
    // alert(JSON.stringify(data));
    reset();
  };

  console.log(auth);

  useEffect(() => {
    if (auth) {
      navigate("/menu", { replace: true });
    }
  }, [auth]);

  return (
    <div className={style.LoginForm}>
      <h1 className={style.logoText}>
        ENVELOPE <GiEnvelope className={style.logo} />
      </h1>
      <h2 className={style.title}>Авторизация</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>
          <p>Логин</p>
          <input
            type="email"
            className={style.input}
            {...register("login", {
              required: "Это поле обязательно для заполнения!",
              pattern: {
                value: EMAIL_REGEXP,
                message: "Некоректный email!",
              },
            })}
          />
          {errors.login && (
            <p className={style.errorMsg}>{errors.login.message}</p>
          )}
        </label>
        <label className={style.label}>
          <p>Пароль</p>
          <input
            className={style.input}
            type="password"
            {...register("password", {
              required: "Это поле обязательно для заполнения!",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов!",
              },
              maxLength: {
                value: 40,
                message: "Пароль должен содержать не более 40 символов!",
              },
              pattern: {
                value: PASSWORD_REGEXP,
                message:
                  "Должен содержать по крайней мере одно число, одну заглавную и строчную буквы, не менее 8 и более символов, а также люой из символов !@#$%^&*?",
              },
            })}
          />
          {errors.password && (
            <p className={style.errorMsg}>{errors.password.message}</p>
          )}
        </label>
        <button className={style.submit}>
          <input type="submit" value="Войти" disabled={!isValid} />
        </button>
      </form>
      <Link className={style.link} to={"/auth"}>
        У вас нет аккаунта?
      </Link>
    </div>
  );
};

export default LoginForm;
