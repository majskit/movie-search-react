import { Link, useLocation } from "react-router-dom";
import s from "./NavBar.module.css";

const getPageTitle = (pathname) => {
  if (pathname === "/") {
    return "Home";
  } else if (pathname === "/movies") {
    return "Search Results";
  } else if (pathname.startsWith("/movies/")) {
    return "Movie Details";
  }
  return "Home";
};

const NavBar = () => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <nav className={s.nav}>
      <Link to="/" className={s.logoLink}>
        <img
          src="/logo.png"
          alt="Movie Search application logo featuring stylized film reel on a light background, conveying a modern and inviting atmosphere"
          className={s.logo}
        />
      </Link>
      <div className={s.pageTitle}>{pageTitle}</div>
    </nav>
  );
};

export default NavBar;
