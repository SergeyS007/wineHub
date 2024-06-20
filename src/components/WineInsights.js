import React from "react";
import "./WineInsights.scss";
import wineInsightsImage from "../img/wineInsights.png"; // Імпорт зображення фону

const WineInsights = () => {
  return (
    <section className="wineInsights">
      <h1 className="wineInsights__title">Wine Insights</h1>

      <p className="wineInsights__sub-title">
        Get some splendid facts about wine
      </p>
      <div className="wineInsights__content">
        <div>
          <p className="wineInsights__content-text">
            There are over 10,000 varieties of worldwide The most commonly known
            include Chardonnay, Cabernet Sauvignon, Merlot, Pinot Noir &
            Sauvignon Blanc.
          </p>
          <button type="button" className="wineInsights__content-button">
            New insight
          </button>
        </div>
        <div className="wineInsights__thumb">
          <img src={wineInsightsImage} alt="Hero Background" />
        </div>
      </div>
    </section>
  );
};

export default WineInsights;
