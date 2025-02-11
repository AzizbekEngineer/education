import React from "react";
import heroBg from "../../../../assets/images/hero-bg.jpeg";
import "./Hero.scss";

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-overlay"></div>
            <div className="hero">
                <p className="hero__subtitle">Samarqand Biznes va Murabbiylik markazi</p>
                <h1 className="hero__title">O‘z biznesingizni biz bilan yarating!</h1>
                <p className="hero__desc">
                    Bizning biznes inkubatorimiz rezidenti bo‘ling va ko‘proq
                    imkoniyatlarni qo‘lga kiriting
                </p>
                <div className="hero__buttons">
                    <button>Rezident bo'lish</button>
                    <button>Mentor bo'lish</button>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Hero;
