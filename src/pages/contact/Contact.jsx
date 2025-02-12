import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <form action="" className="contact__form">
          <h1 className="contact__title">Registratsiya formasi</h1>
          <label htmlFor="name">
            <span>To'liq ism</span>
            <input type="text" id="name" />
          </label>
          <label htmlFor="name">
            <span>To'liq ism</span>
            <input type="text" id="name" />
          </label>
          <div className="contact__info">
            <label htmlFor="name">
              <span>To'liq ism</span>
              <input type="text" id="name" />
            </label>
            <label htmlFor="name">
              <span>To'liq ism</span>
              <input type="text" id="name" />
            </label>
          </div>
          <label htmlFor="business-questions" className="custom-dropdown-label">
            Savollarni tanlang:
            <select id="business-questions" className="custom-dropdown-select">
              <option value="1">
                Biznes boshlash uchun eng yaxshi soha qaysi?
              </option>
              <option value="2">
                Biznesni moliyalashtirishning qanday usullari mavjud?
              </option>
              <option value="3">
                Yangi biznes uchun qanday soliqlar va litsenziyalar talab
                etiladi?
              </option>
              <option value="4">
                Eksport qilish jarayoni qanday amalga oshiriladi?
              </option>
              <option value="5">
                Biznesni rivojlantirish uchun davlat tomonidan qanday dastak
                mavjud?
              </option>
              <option value="6">
                Tadbirkorlik uchun qanday treninglar yoki kurslar mavjud?
              </option>
              <option value="7">
                Raqobatni yengish uchun qanday strategiyalar samarali?
              </option>
              <option value="8">
                Yangi biznes uchun kadrlarni qayerdan va qanday tanlash mumkin?
              </option>
            </select>
          </label>
          <button>Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
