import React from "react";
import { FaDoorOpen } from "react-icons/fa";
import "./opportunities.scss";

const data = [
  {
    title: "O'qish va treninglar",
    desc: " Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizniyaxshilash va mehnat samaradorligini oshirish uchun yangi bilim vako‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtiroketish - sizning loyihalaringiz kelajagi uchun kiritilgan sarmoyadir.",
  },
  {
    title: "Biznes g‘oyalarni tahlil qilish va qo‘llab quvvatlash",
    desc: " Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizniyaxshilash va mehnat samaradorligini oshirish uchun yangi bilim vako‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtiroketish - sizning loyihalaringiz kelajagi uchun kiritilgan sarmoyadir.",
  },
  {
    title: "Investitsiyalarni jalb qilishga ko‘maklashish",
    desc: " Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizniyaxshilash va mehnat samaradorligini oshirish uchun yangi bilim vako‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtiroketish - sizning loyihalaringiz kelajagi uchun kiritilgan sarmoyadir.",
  },
  {
    title: "Biznes hamjamiyat va hamkorlik munosabatlari",
    desc: " Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizniyaxshilash va mehnat samaradorligini oshirish uchun yangi bilim vako‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtiroketish - sizning loyihalaringiz kelajagi uchun kiritilgan sarmoyadir.",
  },
];

const Opportunities = () => {
  const opportunitiesItem = data?.map((item) => (
    <div className="opportunities__card">
      <div className="opportunities__img">
        <FaDoorOpen />
      </div>
      <div className="opportunities__info">
        <h3 className="opportunities__card__title">{item.title}</h3>
        <p className="opportunities__card__text">{item.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="opportunities">
      <div className="opportunities__container container">
        <h2 className="opportunities__title">Imkoniyatlar</h2>
        <h3 className="opportunities__sub-title">
          Biz sizga taqdim etishimiz mumkun bo'lgan asosiy imkoniyatlar
        </h3>
        <div className="opportunities__cards">{opportunitiesItem}</div>
      </div>
    </div>
  );
};

export default Opportunities;
