import React from "react";
import "./documents.scss";
import { documentsData } from "../../constants";

const Documents = () => {
  const data = documentsData;
  return (
    <div className="document">
      <div className="container">
        <h2 className="document__subtitle">{data?.main_title}</h2>
        <h1 className="document__title">{data?.section_title}</h1>
        <div className="document__cards">
          {data?.data?.map((el) => (
            <div className="document__card">
              <div className="document__img">
                <img src={el.img} alt="" />
              </div>
              <strong>{el.title}</strong>
              <p className="document__link">{el.link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
