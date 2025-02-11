import React from "react";
import logo from "../../assets/icons/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
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
                <ul className="header__list">
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
