import LoginForm from "../../widgets/LoginForm/LoginForm";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.LoginPage}>
      <h1 className={style.title}>ENVELOPE</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
