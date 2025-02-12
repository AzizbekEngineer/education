import React from "react";
import "./business.scss";
import person from "../../../../assets/icons/person.png";

const Business = () => {
  const leaders = [
    {
      name: "Amonov Sh.",
      position: "Koordinator",
      image: person,
      quote:
        "Yaxshi g'oya — muvaffaqiyatga boshlovchi birinchi qadamdir, lekin uni haqiqatga aylantirish uchun qat'iyat va bilim kerak. Bizning vazifamiz sizga ushbu yo'lda ishonch bilan qadam qo'yishingizga yordam berishdir!",
    },
    {
      name: "Sanoev S.",
      position: "Direktor",
      image: person,
      quote:
        "Bugungi innovatsion fikr ertangi muvaffaqiyatning kalitidir. Texnologiya va ijodiy yondashuv yordamida har qanday biznesni yangi darajaga olib chiqish imkoniyati bor — faqatgina boshlashni unutmang!",
    },
    {
      name: "M. Qayimov",
      position: "Direktor",
      image: person,
      quote:
        "Bizning vazifamiz tadbirkorlar uchun haqiqiy tayanch bo'lishdir. Buxorodan boshlangan g'oyalar global muvaffaqiyat hikoyalariga aylanadi — faqatgina ishonch va harakat kerak!",
    },
  ];

  return (
    <div className="business-container">
      <h2 className="business-title">Buxoro business hub mas'ullari</h2>
      <h3 className="business-subtitle">Rahbarlar</h3>
      <div className="leaders container">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img
              src={leader.image}
              alt={leader.name}
              className="leader-image"
            />
            <div className="leader-info">
              <h4 className="leader-name">{leader.name}</h4>
              <p className="leader-position">{leader.position}</p>
            </div>
            <blockquote className="leader-quote">{leader.quote}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
