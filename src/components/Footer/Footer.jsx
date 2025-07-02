import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.logoSection}>
          <Link to="/" className={s.logoLink}>
            <img src="/logo.png" alt="Movie Search logo" className={s.logo} />
          </Link>
          <span className={s.logoText}>Movie Search</span>
        </div>

        <div className={s.infoSection}>
          <p className={s.copyright}>
            © 2025 Movie Search. All rights reserved.
          </p>
          <p className={s.powered}>
            Powered by <span className={s.tmdb}>TMDB</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
