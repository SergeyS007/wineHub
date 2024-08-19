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
  deleteTypeFilter,
  setCountryFilter,
  deleteCountryFilter,
  setRatingFilter,
} from "../redux/filtersSlice";
import { fetchAllWines } from "../services/api";
import searchIcon from "../img/search-icon.png"; // Імпорт іконки пошуку
import "./Filters.scss";
import { Button } from "./Button";
import FiltersCardList from "./FiltersCardList";

const Filters = () => {
  const [wineList, setWineList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    firstLoading();
  }, []);

  const dispatch = useDispatch();
  const typeFilter = useSelector(getTypeFilter);
  const countryFilter = useSelector(getCountryFilter);
  const ratingFilter = useSelector(getRatingFilter);

  console.log("wineList", wineList);
  console.log("typeFilter", typeFilter);
  // console.log("ratingFilter", ratingFilter);
  // let filteredList = wineList.filter(
  //   (item) =>
  //     item.wine_type.type === typeFilter &&
  //     item.location.country === countryFilter &&
  //     item.rating.average >= ratingFilter
  // );
  // if (filteredList.length < 1) {
  //   filteredList = [...wineList];
  // }
  const showWineList = wineList.slice((page - 1) * 3, page * 3);
  console.log("showWineList", showWineList);

  const handleTypeFilterChange = (filter) => dispatch(setTypeFilter(filter));
  const handleTypeFilterDelete = (filter) => dispatch(deleteTypeFilter(filter));
  const handleCountryFilterChange = (filter) =>
    dispatch(setCountryFilter(filter));
  const handleCountryFilterDelete = (filter) =>
    dispatch(deleteCountryFilter(filter));
  const handleRatingFilterChange = (filter) =>
    dispatch(setRatingFilter(filter));

  function firstLoading() {
    fetchAllWines().then(setWineList);
  }

  function handleShowMore() {
    let maxPage = findMaxPage(wineList.length, 3);
    if (page < maxPage) {
      setPage((prevState) => prevState + 1);
    }
  }
  function findMaxPage(length, n) {
    let a = length % n;
    let maxPage = a === 0 ? length / n : Math.floor(length / n) + 1;
    return maxPage;
  }
  function selectOnChange() {
    console.log("select", select.value);
  }

  function inputOnChange() {
    console.log("inputPrice", input.value);
  }

  const input = document.querySelector(".filters__range-input");
  const select = document.querySelector(".filters__select");

  return (
    <section className="filters">
      <div className="filters__label-wrapper">
        <label for="size" className="filters__label">
          Sort :
        </label>
        <select
          id="category"
          name="category"
          className="filters__select"
          onChange={selectOnChange}
        >
          <option value="hr" selected>
            Highest rated
          </option>
          {/* <option value="s">Most discounted</option> */}
          <option value="lp">Lowest price first</option>
          <option value="hp">Highest price first</option>
          {/* <option selected value="p">
            Popular
          </option> */}
        </select>
      </div>
      <div className="filters__wrapper">
        <div className="filters__content">
          <div>
            <h4 className="filters__sub-title">Wine types</h4>
            <div className="filters__buttons">
              <Button
                selected={typeFilter.includes(typeFilters.red)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.red)) {
                    handleTypeFilterDelete(typeFilters.red);
                  } else {
                    handleTypeFilterChange(typeFilters.red);
                  }
                }}
              >
                <span className="filters__buttons-text">Red</span>
              </Button>
              <Button
                selected={typeFilter.includes(typeFilters.white)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.white)) {
                    handleTypeFilterDelete(typeFilters.white);
                  } else {
                    handleTypeFilterChange(typeFilters.white);
                  }
                }}
              >
                <span className="filters__buttons-text">White</span>
              </Button>
              <Button
                selected={typeFilter.includes(typeFilters.rose)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.rose)) {
                    handleTypeFilterDelete(typeFilters.rose);
                  } else {
                    handleTypeFilterChange(typeFilters.rose);
                  }
                }}
              >
                <span className="filters__buttons-text">Rose</span>
              </Button>
              <Button
                selected={typeFilter.includes(typeFilters.sparkling)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.sparkling)) {
                    handleTypeFilterDelete(typeFilters.sparkling);
                  } else {
                    handleTypeFilterChange(typeFilters.sparkling);
                  }
                }}
              >
                <span className="filters__buttons-text">Sparkling</span>
              </Button>
              <Button
                selected={typeFilter.includes(typeFilters.dessert)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.dessert)) {
                    handleTypeFilterDelete(typeFilters.dessert);
                  } else {
                    handleTypeFilterChange(typeFilters.dessert);
                  }
                }}
              >
                <span className="filters__buttons-text">Dessert</span>
              </Button>
              <Button
                selected={typeFilter.includes(typeFilters.nonAlcohol)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.nonAlcohol)) {
                    handleTypeFilterDelete(typeFilters.nonAlcohol);
                  } else {
                    handleTypeFilterChange(typeFilters.nonAlcohol);
                  }
                }}
              >
                <span className="filters__buttons-text">Non alcohol</span>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="filters__sub-title">Price Range</h4>
            <div className="filters__range">
              <input
                type="range"
                name="price_rate"
                min="0"
                max="100"
                step="10"
                className="filters__range-input"
                onChange={inputOnChange}
              />
            </div>
          </div>

          <div>
            <h4 className="filters__sub-title">Countries</h4>
            <div className="filters__country-input">
              <img
                src={searchIcon}
                alt="Search Icon"
                className="filters__search-icon"
              />
              <input type="text" name="username" placeholder="Search country" />
            </div>

            <div className="filters__buttons">
              <Button
                selected={countryFilter.includes(countryFilters.France)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.France)) {
                    handleCountryFilterDelete(countryFilters.France);
                  } else {
                    handleCountryFilterChange(countryFilters.France);
                  }
                }}
              >
                <span className="filters__buttons-text">France</span>
              </Button>
              <Button
                selected={countryFilter.includes(countryFilters.Italy)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Italy)) {
                    handleCountryFilterDelete(countryFilters.Italy);
                  } else {
                    handleCountryFilterChange(countryFilters.Italy);
                  }
                }}
              >
                <span className="filters__buttons-text">Italy</span>
              </Button>
              <Button
                selected={countryFilter.includes(countryFilters.NewZealand)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.NewZealand)) {
                    handleCountryFilterDelete(countryFilters.NewZealand);
                  } else {
                    handleCountryFilterChange(countryFilters.NewZealand);
                  }
                }}
              >
                <span className="filters__buttons-text">New Zealand</span>
              </Button>
              <Button
                selected={countryFilter.includes(countryFilters.Spain)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Spain)) {
                    handleCountryFilterDelete(countryFilters.Spain);
                  } else {
                    handleCountryFilterChange(countryFilters.Spain);
                  }
                }}
              >
                <span className="filters__buttons-text">Spain</span>
              </Button>
              <Button
                selected={countryFilter.includes(countryFilters.Georgia)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Georgia)) {
                    handleCountryFilterDelete(countryFilters.Georgia);
                  } else {
                    handleCountryFilterChange(countryFilters.Georgia);
                  }
                }}
              >
                <span className="filters__buttons-text">Georgia</span>
              </Button>
              <Button
                selected={countryFilter.includes(countryFilters.Australia)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Australia)) {
                    handleCountryFilterDelete(countryFilters.Australia);
                  } else {
                    handleCountryFilterChange(countryFilters.Australia);
                  }
                }}
              >
                <span className="filters__buttons-text">Australia</span>
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
                  onChange={() =>
                    handleRatingFilterChange(ratingFilters.Common)
                  }
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
          <FiltersCardList wines={showWineList} />
        </div>
      </div>
      <button type="button" onClick={handleShowMore}>
        Show more
      </button>
    </section>
  );
};

export default Filters;
