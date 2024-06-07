import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Personal <span className="hero__title--highlight">Virtual</span> Sommelier</h1>
        <p className="hero__description">Surprise your guests with a perfectly selected wine</p>
        <p className="hero__description">Choose the wine, using the newest technology</p>
      </div>
    </section>
  );
};

export default Hero;
