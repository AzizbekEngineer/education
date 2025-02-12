import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import news from "../../../../assets/images/new.webp";
import { FaGripLinesVertical } from "react-icons/fa";
import "./newsSection.scss";

const newsData = [
  {
    id: 1,
    title: "Новости компании",
    description: "Наша компания представила новый продукт своим клиентам.",
    date: "31.03.2025",
    views: 7,
    image: news,
  },
  {
    id: 2,
    title: "Новости компании",
    description: "Наша компания представила новый продукт своим клиентам.",
    date: "31.03.2025",
    views: 11,
    image: news,
  },
  {
    id: 3,
    title: "Новости компании",
    description: "Наша компания представила новый продукт своим клиентам.",
    date: "31.03.2025",
    views: 2,
    image: news,
  },
  {
    id: 4,
    title: "Новости компании",
    description: "Наша компания представила новый продукт своим клиентам.",
    date: "31.03.2025",
    views: 3,
    image: news,
  },
];

const NewsSection = () => {
  return (
    <div className="news">
      <h2 className="news__subtitle">Ko'proq yangiliklar</h2>
      <h1 className="news__title">Yangiliklar</h1>
      <div className="container news-container">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="news-image">
              <img src={news.image} alt="News" />
              <span className="news-tag">
                <FaGripLinesVertical /> News
              </span>
            </div>
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <hr />
              <div className="news-footer">
                <span>
                  <FaCalendarAlt /> {news.date}
                </span>
                <span>
                  <FaEye /> {news.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
