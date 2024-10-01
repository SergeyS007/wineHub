import React from "react";
// import { useSelector } from "react-redux";
import useMedia from "use-media";
import "./Hero.scss";
import heroImage from "../../img/first-screen.png"; // Імпорт зображення фону
import heroImageMobile from "../../img/Mobile/hero_bg.png";
import arrowIcon from "../../img/arrow-icon.png"; // Імпорт іконки стрілки
// import { getShowModal } from "../redux/selectors";
// import Modal from "./Modal";

const Hero = () => {
  const isWide = useMedia({ minWidth: "391px" });
  // const refs = {
  //   hero: document.querySelector(".hero"),
  // };
  // const showModal = useSelector(getShowModal);

  // if (showModal) {
  //   refs.hero.classList.add("show-modal");
  // }

  return (
    <section className="hero">
      <div className="hero__background">
        <img
          src={isWide ? heroImage : heroImageMobile}
          alt="Hero Background"
          className="hero__background-image"
        />
      </div>
      {/* modal filters  */}
      {/* <Modal /> */}
      <div className="hero__content">
        <div className="hero__upper">
          <div className="hero__upper-column">
            <h1 className="hero__title">Personal</h1>
          </div>
          <div className="hero__upper-column">
            <p className="hero__subtitle">
              Surprise your guests with a perfectly selected wine
            </p>
            <p className="hero__subtitle">
              Choose the wine, using the newest technology
            </p>
          </div>
          <div className="hero__upper-column"></div>
        </div>
        <div className="hero__lower">
          <span className="hero__highlighted-text">
            <img src={arrowIcon} alt="Arrow Icon" className="hero__icon" />
            Virtual
          </span>
          <span className="hero__main-title">Sommelier</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
