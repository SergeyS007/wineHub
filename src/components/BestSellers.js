import React from "react";
import { useState, useEffect } from "react";
import "./BestSellers.scss";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { fetchWines } from "../services/api";
import WineList from "./WineList";

const BestSellers = () => {
  const [wineList, setWineList] = useState([]);
  // const wineListThreeItems = [wineList[0], wineList[1], wineList[2]];

  useEffect(() => {
    fetchWines().then(setWineList);
  }, []);

  // console.log("list", wineList);

  return (
    <section className="bestSellers">
      <div className="bestSellers__content">
        <h1 className="bestSellers__title">Best Sellers</h1>
        <div className="bestSellers__wrapper">
          <p className="bestSellers__sub-title">Top-selling wines worldwide</p>
          <button type="button" className="bestSellers__button">
            <AiOutlineLeftCircle size={48} />
          </button>
          <button type="button" className="bestSellers__button">
            <AiOutlineRightCircle size={48} />
          </button>
        </div>
        <WineList wines={wineList} />
        {/* <div className="second-page__details">
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
        /> */}
      </div>
    </section>
  );
};

export default BestSellers;
