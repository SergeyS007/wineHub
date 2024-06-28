import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { countryFilters, typeFilters, ratingFilters } from "../redux/constants";
import {
  getTypeFilter,
  getCountryFilter,
  getRatingFilter,
} from "../redux/selectors";
import {
  setTypeFilter,
  setCountryFilter,
  setRatingFilter,
} from "../redux/filtersSlice";
import { fetchWines } from "../services/api";
import WineList from "./WineList";
import "./Filters.scss";
import { Button } from "./Button";

const Filters = () => {
  const [wineList, setWineList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    onSubmitFilters();
  }, []);

  const dispatch = useDispatch();
  const typeFilter = useSelector(getTypeFilter);
  const countryFilter = useSelector(getCountryFilter);
  const ratingFilter = useSelector(getRatingFilter);
  // console.log(typeFilter);
  // console.log(wineList);
  // console.log("ratingFilter", ratingFilter);
  const filteredList = wineList.filter(
    (item) =>
      item.wine_type.type === typeFilter &&
      item.location.country === countryFilter &&
      item.rating.average >= ratingFilter
  );
  const showWineList = filteredList.slice((page - 1) * 3, page * 3);
  console.log(showWineList);

  const handleTypeFilterChange = (filter) => dispatch(setTypeFilter(filter));
  const handleCountryFilterChange = (filter) =>
    dispatch(setCountryFilter(filter));
  const handleRatingFilterChange = (filter) =>
    dispatch(setRatingFilter(filter));

  function onSubmitFilters() {
    fetchWines().then(setWineList);
  }

  function handleShowMore() {
    let maxPage = findMaxPage(filteredList.length, 3);
    if (page < maxPage) {
      setPage((prevState) => prevState + 1);
    }
  }
  function findMaxPage(length, n) {
    let a = length % n;
    let maxPage = a === 0 ? length / n : Math.floor(length / n) + 1;
    return maxPage;
  }

  return (
    <section className="filters">
      <div className="filters__label-wrapper">
        <label for="size" className="filters__label">
          Sort :
        </label>
        <select id="size" name="size" className="filters__select">
          <option value="xs">Highest rated</option>
          <option value="s">Most discounted</option>
          <option value="m" selected>
            Lowest price first
          </option>
          <option value="l">Highest price first</option>
          <option selected value="p">
            Popular
          </option>
        </select>
      </div>

      <div className="filters__content">
        <div>
          <h4 className="filters__sub-title">Wine types</h4>
          <div>
            <Button
              selected={typeFilter === typeFilters.red}
              onClick={() => handleTypeFilterChange(typeFilters.red)}
            >
              Red
            </Button>
            <Button
              selected={typeFilter === typeFilters.white}
              onClick={() => handleTypeFilterChange(typeFilters.white)}
            >
              White
            </Button>
            <Button
              selected={typeFilter === typeFilters.rose}
              onClick={() => handleTypeFilterChange(typeFilters.rose)}
            >
              Rose
            </Button>
            <Button
              selected={typeFilter === typeFilters.sparkling}
              onClick={() => handleTypeFilterChange(typeFilters.sparkling)}
            >
              Sparkling
            </Button>
            <Button
              selected={typeFilter === typeFilters.dessert}
              onClick={() => handleTypeFilterChange(typeFilters.dessert)}
            >
              Dessert
            </Button>
            <Button
              selected={typeFilter === typeFilters.nonAlcohol}
              onClick={() => handleTypeFilterChange(typeFilters.nonAlcohol)}
            >
              Non alcohol
            </Button>
          </div>
        </div>
        <div>
          <h4 className="filters__sub-title">Price Range</h4>
          <input
            type="range"
            name="price_rate"
            value="40"
            min="0"
            max="100"
            step="10"
          />
        </div>

        <div>
          <h4 className="filters__sub-title">Countries</h4>
          <input type="text" name="username" placeholder="Search country" />
          <div>
            <Button
              selected={countryFilter === countryFilters.France}
              onClick={() => handleCountryFilterChange(countryFilters.France)}
            >
              France
            </Button>
            <Button
              selected={countryFilter === countryFilters.Italy}
              onClick={() => handleCountryFilterChange(countryFilters.Italy)}
            >
              Italy
            </Button>
            <Button
              selected={countryFilter === countryFilters.NewZealand}
              onClick={() =>
                handleCountryFilterChange(countryFilters.NewZealand)
              }
            >
              New Zealand
            </Button>
            <Button
              selected={countryFilter === countryFilters.Spain}
              onClick={() => handleCountryFilterChange(countryFilters.Spain)}
            >
              Spain
            </Button>
            <Button
              selected={countryFilter === countryFilters.Georgia}
              onClick={() => handleCountryFilterChange(countryFilters.Georgia)}
            >
              Georgia
            </Button>
            <Button
              selected={countryFilter === countryFilters.Australia}
              onClick={() =>
                handleCountryFilterChange(countryFilters.Australia)
              }
            >
              Australia
            </Button>
          </div>
        </div>

        <div>
          <h4 className="filters__sub-title">Average Rating</h4>
          <form className="filters__form">
            <label>
              <input
                type="radio"
                name="rating"
                value="Excellent"
                checked={ratingFilter === ratingFilters.Excellent}
                onChange={() =>
                  handleRatingFilterChange(ratingFilters.Excellent)
                }
              />
              4,2+ Excellent choice
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="Good"
                checked={ratingFilter === ratingFilters.Good}
                onChange={() => handleRatingFilterChange(ratingFilters.Good)}
              />
              3,8+ Good wine
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="Common"
                checked={ratingFilter === ratingFilters.Common}
                onChange={() => handleRatingFilterChange(ratingFilters.Common)}
              />
              3,4+ Common stuff
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="Any"
                checked={ratingFilter === ratingFilters.Any}
                onChange={() => handleRatingFilterChange(ratingFilters.Any)}
              />
              Any rating
            </label>
          </form>
        </div>
      </div>
      <div className="filter__cardList">
        <WineList wines={showWineList} />
        <button type="button" onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </section>
  );
};

export default Filters;
