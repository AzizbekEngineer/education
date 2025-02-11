import React from "react";
import logo from "../../assets/icons/logo.jpg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__top">
          <a href="tel:+99893-771-43-20">+99893-771-43-20</a>
        </div>
        <div className="header__bottom">
          <div className="header__logo">
            <a href="">
              <img width={130} height={80} src={logo} alt="" />
            </a>
          </div>
          <div className="header__list">
            <li className="header__item">
              <a href="">Loyiha haqida</a>
            </li>
            <li className="header__item">
              <a href="">Yangiliklar</a>
            </li>
            <li className="header__item">
              <a href="">Treninglar</a>
            </li>
            <li className="header__item">
              <a href="">Tadbirlar</a>
            </li>
            <li className="header__item">
              <a href="">Sorovnomalar</a>
            </li>
            <li className="header__item">
              <a href="">Aloqa</a>
            </li>
            <li className="header__item">
              <a href="">Kabinet</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
