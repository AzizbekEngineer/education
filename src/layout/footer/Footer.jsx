import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__info">
            <h3 className="footer__sub-title">Samarqand biznes HUB</h3>
            <p className="footer__desc">
              "Har bir insonning ichida ulkan imkoniyatlar yashirin. G‘oyangizni
              amalda sinab ko‘ring va uni haqiqiy muvaffaqiyat hikoyasiga
              aylantiring. Har bir qiyinchilik – bu yangi imkoniyatning
              boshlanishi. Sizga ishonganlar bor ekan, orzularingizga erishishda
              to‘xtamang!"…]
            </p>
            <div className="footer__icons">
              <div className="footer__icon">
                <FaFacebookSquare />
              </div>
              <div className="footer__icon">
                <FaGooglePlusSquare />
              </div>
              <div className="footer__icon">
                <FaLinkedin />
              </div>
              <div className="footer__icon">
                <FaTwitter />
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer__sub-title">Eng kerakli</h3>
            <ul className="footer__list">
              <li className="footer__item">
                Samarqand tadbirkorlar biznes klubi
              </li>
              <li className="footer__item">
                Tadbirkorlar murojatlari telegram guruhi
              </li>
              <li className="footer__item">Tadbirkorlar uchun yangiliklar</li>
              <li className="footer__item">Tadbirkorlikka oid hujjatlar</li>
              <li className="footer__item">
                Korrupsiyaga qarshi normativ hujjatlar
              </li>
            </ul>
          </div>
          <div className="footer__forma">
            <h3 className="footer__sub-title">Maslahat olish uchun</h3>
            <form action="" className="footer__form">
              <p className="footer__desc">
                Menejerlarimiz siz bilan bog'lanishadi
              </p>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <button>Yuborish</button>
            </form>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__line"></div>
        <h4>Samarqand business HUB © 2024 bbhub.uz</h4>
      </div>
    </div>
  );
};

export default Footer;
