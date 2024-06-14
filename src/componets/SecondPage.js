import React from 'react';
import './SecondPage.scss';
import wineBottle from '../img/wine-bottle.png'; // Імпорт зображення пляшки вина

const SecondPage = () => {
  return (
    <section className="second-page">
      <div className="second-page__content">
        <h1 className="second-page__title">Random Wine</h1>
        <p className="second-page__sub-title">In case of important negotiations</p>
        <div className="second-page__details">
          <div className="second-page__rating">
            <p>RATING 4.3 <span className="second-page__stars">★★★★★</span></p>
            <p className="second-page__reviews">Rating based on 41 reviews</p>
          </div>
          <h2 className="second-page__wine-name">Bressan Rosantico 2011</h2>
          <ul className="second-page__wine-info">
            <li><span>Year</span>2011</li>
            <li><span>Country</span>Italy</li>
            <li><span>Region</span>Venezia Giulia</li>
            <li><span>Wine type</span>Rose</li>
          </ul>
          <button className="second-page__button">Next Wine</button>
        </div>
        <img src={wineBottle} alt="Wine Bottle" className="second-page__image" />
      </div>
    </section>
  );
};

export default SecondPage;
