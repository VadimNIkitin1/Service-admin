import AuthForm from "../../widgets/AuthForm/AuthForm";
import style from "./AuthPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.AuthPage}>
      <h1 className={style.title}>LOGO</h1>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
