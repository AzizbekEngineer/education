import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/logo.png";
import "./header.scss";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  //
  useEffect(() => {}, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header ${isScrolled ? "scrolled" : ""} ${
        pathname === "/" ? "" : "shadow"
      }`}
    >
      <div className="container header__container">
        <div className="header__logo">
          <Link to={"/"}>
            <img
              width={150}
              height={80}
              src={logo}
              alt="logo"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <ul
          className={`header__list ${isScrolled ? "scrolled" : ""} ${
            pathname === "/" ? "" : "black"
          }`}
        >
          <li className="header__item">
            <Link to="">Loyiha haqida</Link>
          </li>
          <li className="header__item">
            <Link to="">Yangiliklar</Link>
          </li>
          <li className="header__item">
            <Link to="/trainings">Treninglar</Link>
          </li>
          <li className="header__item">
            <Link to="/events">Tadbirlar</Link>
          </li>
          <li className="header__item">
            <Link to="">Sorovnomalar</Link>
          </li>
          <li className="header__item">
            <Link to="">Aloqa</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
