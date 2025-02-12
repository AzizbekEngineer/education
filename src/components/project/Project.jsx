import React from "react";
import img from "../../assets/images/project.avif";
import "./project.scss";

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="container">
        <div className="project__box">
          <div className="project__img">
            <img src={data.img} alt="" />
          </div>
          {data?.data?.map((item) => (
            <div>
              <h1 className="project__title">{item.title}</h1>
              <p className="project__desc">{item.desc1}</p>
              <p className="project__desc">{item.desc2}</p>
              {data?.name == "project" ? (
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
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
