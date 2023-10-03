import LoginForm from "../../widgets/LoginForm/LoginForm";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.LoginPage}>
      <h1 className={style.title}>LOGO</h1>
      <p className={style.text}>
        Сервис по созданию персонализированного приложения в Телеграмм
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
