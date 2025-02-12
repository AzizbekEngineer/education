import React from "react";
import img from "../../assets/images/project.avif";
import "./project.scss";

const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="project__box">
          <div className="project__img">
            <img src={img} alt="" />
          </div>
          <h1 className="project__title">
            Jahon banki ishtirokidagi “Qishloq tadbirkorligini rivojlantirish-2
            faza” lohiyasi
          </h1>
          <p className="project__desc">
            2022 yil 22 martda Jahon bankining Direktorlar kengashi O‘zbekiston
            Respublikasida “Qishloq tadbirkorligini rivojlantirish – 2 faza”
            loyihasini moliyalashtirish uchun 200 mln. AQSh dollari qarz
            mablag‘larini ajratishni ma'qulladi hamda 2022 yil 23 aprelda
            O‘zbekiston Respublikasi va XTTB hamda XTU o‘rtasida qarz bitimi
            imzolandi.
          </p>
          <p className="project__desc">
            O‘zbekiston Respublikasi Prezidentining “Xalqaro tiklanish va
            taraqqiyot banki hamda Xalqaro taraqqiyot uyushmasi ishtirokida
            “Qishloq tadbirkorligini rivojlantirish – 2 faza” loyihasini amalga
            oshirish chora-tadbirlari to‘g‘risida” 2022 yil 13 iyuldagi
            PQ–317-son qarori qabul qilindi.
          </p>
          <div className="project__info">
            <div className="project__medianote">
              <strong style={{ color: "#2196F3" }}>
                Loyiha 2022 - 2026 yillarda quyidagi viloyatlarda amalga
                oshiriladi.
              </strong>
              <ul className="project__list">
                <li>Qoraqalpog‘iston Respublikasi</li>
                <li>Buxoro</li>
                <li>Navoiy</li>
                <li>Qashqadaryo</li>
                <li>Surxondaryo</li>
                <li>Samarqand</li>
                <li>Sirdaryo</li>
                <li>Toshkent</li>
              </ul>
            </div>
            <p className="project__sub-title">
              Shartnoma hujjarti bilan tanishish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
