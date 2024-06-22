import React from "react";
import { useState, useEffect } from "react";
import { fetchRandomBottleOfWine } from "../services/api";
import "./RandomWine.scss";
// import wineBottle from "../img/wine-bottle.png"; // Імпорт зображення пляшки вина
import RandomWineCard from "./RandomWineCard";

const RandomWine = () => {
  // fetch("http://127.0.0.1:8001/wines/reds/").then((response) => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
  // .then((data) => {

  //   console.log(data.results);
  // })
  // .catch((error) => {

  // });
  const [randomBottle, setRandomBottle] = useState({
    rating: { average: "" },
    location: { country: "" },
    wine_type: { type: "" },
  });

  useEffect(() => {
    onSubmitNewWine();
  }, []);

  console.log("randomBottle", randomBottle);

  // const { rating } = randomBottle.rating.average;
  // console.log("rating", rating);
  function onSubmitNewWine() {
    fetchRandomBottleOfWine().then(setRandomBottle);
  }

  return (
    <section className="second-page">
      <div className="second-page__content">
        <h1 className="second-page__title">Random Wine</h1>
        <p className="second-page__sub-title">
          In case of important negotiations
        </p>
        <RandomWineCard
          // key={randomBottle.winery.id}
          rating={randomBottle.rating.average}
          reviews={Number.parseInt(randomBottle.rating.reviews)}
          image={randomBottle.image_url}
          year={randomBottle.vintage}
          name={randomBottle.name}
          country={randomBottle.location.country}
          region={randomBottle.location.region}
          wineType={randomBottle.wine_type.type}
          onSubmit={onSubmitNewWine}
        />
        {/* <div className="second-page__details">
          <div className="second-page__rating">
            <p>
              RATING 4.3 <span className="second-page__stars">★★★★★</span>
            </p>
            <p className="second-page__reviews">Rating based on 41 reviews</p>
          </div>
          <h2 className="second-page__wine-name">Bressan Rosantico 2011</h2>
          <div className="second-page__wine-wrapper">
            <ul className="second-page__wine-info second-page__wine-weight">
              <li>Year</li>
              <li>Country</li>
              <li>Region</li>
              <li>Wine type</li>
            </ul>
            <ul className="second-page__wine-info ">
              <li>2011</li>
              <li>Italy</li>
              <li>Venezia Giulia</li>
              <li>Rose</li>
            </ul>
          </div>
          <button className="second-page__button">Next Wine</button>
        </div> */}
        <div className="second-page__image-wrapper">
          {/* <img
            src={wineBottle}
            alt="Wine Bottle"
            className="second-page__image"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default RandomWine;
