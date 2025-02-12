import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import "./header.scss";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const [hide, setHide] = useState(false);

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
          className={`header__list ${hide ? "header__show" : ""} ${
            isScrolled ? "scrolled" : ""
          } ${pathname === "/" ? "" : "black"} `}
        >
          <li className="header__item header__dropdown">
            <span className="header__item">Loyiha haqida</span>
            <div className="header__dropdown-open">
              <span className="header__item">
                <Link to="projects">Loyiha haqida</Link>
              </span>
              <span className="header__item">
                <Link to={"business"}>Biznes haqida</Link>
              </span>
              <span className="header__item">
                <Link to={"document"}>Hujjatlar</Link>
              </span>
            </div>
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
            <Link to="contact">Aloqa</Link>
          </li>
        </ul>
        {!hide ? (
          <button onClick={() => setHide(true)} className="header__menu">
            <RxHamburgerMenu />
          </button>
        ) : (
          <button onClick={() => setHide(false)} className="header__menu">
            <MdClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
