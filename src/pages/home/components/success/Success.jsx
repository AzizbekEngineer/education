import React from "react";
import { FaFly, FaAudible } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import img from "../../../../assets/icons/logo.jpg";
import "./success.scss";

const Success = () => {
  return (
    <div className="success">
      <div className="container">
        <div className="success__box">
          <h3 className="success__title">
            Qanday qilib muvaffaqiyatli tadbirkor bo‘lishni bilishni istaysizmi?
          </h3>
          <div className="success__cards">
            <ul className="success__list">
              <li className="success__item">
                <div className="success__icon">
                  <FaFly />
                </div>
                <div className="success__info">
                  <h3>O‘z imkoniyatlaringizni aniqlang</h3>
                  <p>
                    "Har bir buyuk biznes kichik bir qadamdan boshlanadi.
                    Bizning inkubatorda sizning g‘oyangizni haqiqiy
                    muvaffaqiyatga aylantirish uchun barcha imkoniyatlar
                    mavjud!"
                  </p>
                </div>
              </li>
              <li className="success__item">
                <div className="success__icon">
                  <FaAudible />
                </div>
                <div className="success__info">
                  <h3>Bilim va ko‘nikmalaringizni rivojlantiring</h3>
                  <p>
                    "Muvaffaqiyat tasodifan kelmaydi; u bilim va mehnat mahsuli.
                    Bizning treninglarimiz orqali tajribali tadbirkorga aylanish
                    imkoniyatini qo‘ldan boy bermang!"
                  </p>
                </div>
              </li>
              <li className="success__item">
                <div className="success__icon">
                  <FaUmbrellaBeach />
                </div>
                <div className="success__info">
                  <h3>Xalqaro bozorga chiqish yo‘llarini toping</h3>
                  <p>
                    "Chegaralar faqat xaritadan iborat. Buxoro Biznes Inkubatori
                    sizning mahsulotlaringizni xalqaro bozorlarga olib chiqishga
                    yordam beradi!"
                  </p>
                </div>
              </li>
            </ul>
            <div className="success__img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
