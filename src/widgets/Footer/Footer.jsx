import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <p className={style.text}>
        Разработано командой
        <Link className={style.link} to={"/about"}>
          Envelope-App
        </Link>
      </p>
    </div>
  );
};

export default Footer;
