import React from "react";
import "./RandomWine.scss";
import wineBottle from "../img/wine-bottle.png"; // Імпорт зображення пляшки вина

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

  fetch("http://127.0.0.1:8001/wines/reds/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  // fetch("http://127.0.0.1:8001/wines/reds/")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Обработка полученных данных
  //     console.log(data); // Вывод данных в консоль для примера

  //     // Пример обработки результатов, например, вывод имени и цены первых нескольких вин
  //     data.results.forEach((wine) => {
  //       console.log(`Название: ${wine.name}, Цена: ${wine.price}`);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Ошибка при получении данных:", error);
  //   });

  return (
    <section className="second-page">
      <div className="second-page__content">
        <h1 className="second-page__title">Random Wine</h1>
        <p className="second-page__sub-title">
          In case of important negotiations
        </p>
        <div className="second-page__details">
          <div className="second-page__rating">
            <p>
              RATING 4.3 <span className="second-page__stars">★★★★★</span>
            </p>
            <p className="second-page__reviews">Rating based on 41 reviews</p>
          </div>
          <h2 className="second-page__wine-name">Bressan Rosantico 2011</h2>
          <ul className="second-page__wine-info">
            <li>
              <span>Year</span>2011
            </li>
            <li>
              <span>Country</span>Italy
            </li>
            <li>
              <span>Region</span>Venezia Giulia
            </li>
            <li>
              <span>Wine type</span>Rose
            </li>
          </ul>
          <button className="second-page__button">Next Wine</button>
        </div>
        <img
          src={wineBottle}
          alt="Wine Bottle"
          className="second-page__image"
        />
      </div>
    </section>
  );
};

export default RandomWine;
