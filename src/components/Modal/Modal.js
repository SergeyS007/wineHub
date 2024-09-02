import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.scss";
// import { getShowModal } from "../redux/selectors";
import {
  getTypeFilter,
  getPriceFilter,
  getCountryFilter,
  getRatingFilter,
} from "../../redux/selectors";
import {
  setTypeFilter,
  deleteTypeFilter,
  setPriceFilter,
  setCountryFilter,
  deleteCountryFilter,
  setRatingFilter,
} from "../../redux/filtersSlice";
import {
  typeFilters,
  priceFilters,
  countryFilters,
  ratingFilters,
} from "../../redux/constants";
import { setShowModal } from "../../redux/showModalSlice";
import { setShowHero } from "../../redux/showHeroSlice";
import { ButtonModal } from "../ButtonModal/ButtonModal";
import "./Modal.scss";

const Modal = () => {
  // const refs = {
  //   hero: document.querySelector(".hero"),
  // };
  // const showModal = useSelector(getShowModal);

  // if (showModal) {
  //   refs.hero.classList.add("show-modal");
  // }

  const dispatch = useDispatch();
  const typeFilter = useSelector(getTypeFilter);
  const priceFilter = useSelector(getPriceFilter);
  const countryFilter = useSelector(getCountryFilter);
  const ratingFilter = useSelector(getRatingFilter);

  const handleTypeFilterChange = (filter) => dispatch(setTypeFilter(filter));
  const handleTypeFilterDelete = (filter) => dispatch(deleteTypeFilter(filter));
  const handlePriceFilterChange = (filter) => dispatch(setPriceFilter(filter));
  const handleCountryFilterChange = (filter) =>
    dispatch(setCountryFilter(filter));
  const handleCountryFilterDelete = (filter) =>
    dispatch(deleteCountryFilter(filter));
  const handleRatingFilterChange = (filter) =>
    dispatch(setRatingFilter(filter));

  const onSearchButton = (e) => {
    e.preventDefault();
    dispatch(setShowModal(false));
    dispatch(setShowHero(false));
    console.log("find it");
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-items">
          <div className="modal-item">
            <h4 className="modal-title">Wine types</h4>
            {/* ================================Wine types=============================================== */}
            <div className="modal-buttons">
              <ButtonModal
                selected={typeFilter.includes(typeFilters.red)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.red)) {
                    handleTypeFilterDelete(typeFilters.red);
                  } else {
                    handleTypeFilterChange(typeFilters.red);
                  }
                }}
              >
                <span className="modal-text">Red</span>
              </ButtonModal>
              <ButtonModal
                selected={typeFilter.includes(typeFilters.white)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.white)) {
                    handleTypeFilterDelete(typeFilters.white);
                  } else {
                    handleTypeFilterChange(typeFilters.white);
                  }
                }}
              >
                <span className="modal-text">White</span>
              </ButtonModal>
              <ButtonModal
                selected={typeFilter.includes(typeFilters.rose)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.rose)) {
                    handleTypeFilterDelete(typeFilters.rose);
                  } else {
                    handleTypeFilterChange(typeFilters.rose);
                  }
                }}
              >
                <span className="modal-text">Rose</span>
              </ButtonModal>
              <ButtonModal
                selected={typeFilter.includes(typeFilters.sparkling)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.sparkling)) {
                    handleTypeFilterDelete(typeFilters.sparkling);
                  } else {
                    handleTypeFilterChange(typeFilters.sparkling);
                  }
                }}
              >
                <span className="modal-text">Sparkling</span>
              </ButtonModal>
              <ButtonModal
                selected={typeFilter.includes(typeFilters.dessert)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.dessert)) {
                    handleTypeFilterDelete(typeFilters.dessert);
                  } else {
                    handleTypeFilterChange(typeFilters.dessert);
                  }
                }}
              >
                <span className="modal-text">Dessert</span>
              </ButtonModal>
              <ButtonModal
                selected={typeFilter.includes(typeFilters.nonAlcohol)}
                onClick={() => {
                  if (typeFilter.includes(typeFilters.nonAlcohol)) {
                    handleTypeFilterDelete(typeFilters.nonAlcohol);
                  } else {
                    handleTypeFilterChange(typeFilters.nonAlcohol);
                  }
                }}
              >
                <span className="modal-text">Non alcohol</span>
              </ButtonModal>
            </div>
          </div>
          <div className="modal-item">
            <h4 className="modal-title">Price Range</h4>
            {/* ================================Price Range=============================================== */}
            <div className="modal-buttons">
              <ButtonModal
                selected={priceFilter === priceFilters.S09}
                onClick={() => handlePriceFilterChange(priceFilters.S09)}
              >
                <span className="modal-text">$0 - $9</span>
              </ButtonModal>
              <ButtonModal
                selected={priceFilter === priceFilters.S1029}
                onClick={() => handlePriceFilterChange(priceFilters.S1029)}
              >
                <span className="modal-text">$10 - $29</span>
              </ButtonModal>
              <ButtonModal
                selected={priceFilter === priceFilters.S3059}
                onClick={() => handlePriceFilterChange(priceFilters.S3059)}
              >
                <span className="modal-text">$30 - $59</span>
              </ButtonModal>
              <ButtonModal
                selected={priceFilter === priceFilters.S6099}
                onClick={() => handlePriceFilterChange(priceFilters.S6099)}
              >
                <span className="modal-text">$60 - $99</span>
              </ButtonModal>
              <ButtonModal
                selected={priceFilter === priceFilters.S100159}
                onClick={() => handlePriceFilterChange(priceFilters.S100159)}
              >
                <span className="modal-text">$100 - $159</span>
              </ButtonModal>
              <ButtonModal
                selected={priceFilter === priceFilters.S1601000}
                onClick={() => handlePriceFilterChange(priceFilters.S1601000)}
              >
                <span className="modal-text">$160 - $1000</span>
              </ButtonModal>
            </div>
          </div>
          <div className="modal-item">
            <h4 className="modal-title">Countries</h4>
            {/* ================================Countries=============================================== */}
            <div className="modal-buttons">
              <ButtonModal
                selected={countryFilter.includes(countryFilters.France)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.France)) {
                    handleCountryFilterDelete(countryFilters.France);
                  } else {
                    handleCountryFilterChange(countryFilters.France);
                  }
                }}
              >
                <span className="modal-text">France</span>
              </ButtonModal>
              <ButtonModal
                selected={countryFilter.includes(countryFilters.Italy)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Italy)) {
                    handleCountryFilterDelete(countryFilters.Italy);
                  } else {
                    handleCountryFilterChange(countryFilters.Italy);
                  }
                }}
              >
                <span className="modal-text">Italy</span>
              </ButtonModal>
              <ButtonModal
                selected={countryFilter.includes(countryFilters.NewZealand)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.NewZealand)) {
                    handleCountryFilterDelete(countryFilters.NewZealand);
                  } else {
                    handleCountryFilterChange(countryFilters.NewZealand);
                  }
                }}
              >
                <span className="modal-text">New Zealand</span>
              </ButtonModal>
              <ButtonModal
                selected={countryFilter.includes(countryFilters.Spain)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Spain)) {
                    handleCountryFilterDelete(countryFilters.Spain);
                  } else {
                    handleCountryFilterChange(countryFilters.Spain);
                  }
                }}
              >
                <span className="modal-text">Spain</span>
              </ButtonModal>
              <ButtonModal
                selected={countryFilter.includes(countryFilters.Georgia)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Georgia)) {
                    handleCountryFilterDelete(countryFilters.Georgia);
                  } else {
                    handleCountryFilterChange(countryFilters.Georgia);
                  }
                }}
              >
                <span className="modal-text">Georgia</span>
              </ButtonModal>
              <ButtonModal
                selected={countryFilter.includes(countryFilters.Australia)}
                onClick={() => {
                  if (countryFilter.includes(countryFilters.Australia)) {
                    handleCountryFilterDelete(countryFilters.Australia);
                  } else {
                    handleCountryFilterChange(countryFilters.Australia);
                  }
                }}
              >
                <span className="modal-text">Australia</span>
              </ButtonModal>
            </div>
          </div>
          <div className="hero__modal-item">
            <h4 className="hero__modal-title">Average Rating</h4>
            {/* ================================Average Rating=============================================== */}
            <div className="hero__modal-buttons">
              <ButtonModal
                selected={ratingFilter === ratingFilters.Excellent}
                onClick={() =>
                  handleRatingFilterChange(ratingFilters.Excellent)
                }
              >
                <span className="modal-text">4,2+ Excellent choice</span>
              </ButtonModal>
              <ButtonModal
                selected={ratingFilter === ratingFilters.Good}
                onClick={() => handleRatingFilterChange(ratingFilters.Good)}
              >
                <span className="modal-text">3,8+ Good wine</span>
              </ButtonModal>
              <ButtonModal
                selected={ratingFilter === ratingFilters.Common}
                onClick={() => handleRatingFilterChange(ratingFilters.Common)}
              >
                <span className="modal-text">3,4+ Common stuff</span>
              </ButtonModal>
              <ButtonModal
                selected={ratingFilter === ratingFilters.Any}
                onClick={() => handleRatingFilterChange(ratingFilters.Any)}
              >
                <span className="modal-text">Any rating</span>
              </ButtonModal>
            </div>
          </div>
        </div>

        <button onClick={onSearchButton} className="modal__button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Modal;
