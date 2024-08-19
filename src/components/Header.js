import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import userIcon from "../img/user-icon.png"; // Імпорт іконки користувача
import searchIcon from "../img/search-icon.png"; // Імпорт іконки пошуку
import Navigation from "./Navigation ";
import { setShowFilter } from "../redux/showFiltersSlice";
import { setShowModal } from "../redux/showModalSlice";
// import { setShowRegister } from "../redux/showRegisterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitFindYourWine = () => {
    dispatch(setShowFilter(true));
    navigate("/");
  };
  const onFocusShowModal = (e) => {
    e.preventDefault();
    dispatch(setShowModal(true));
    dispatch(setShowFilter(true));
    console.log(e.target.value);
    // e.target.value = "This input has focus";
    navigate("/");
  };
  // function showPopup() {
  //   // .. логика отображения попапа
  //   document.body.style.overflow = "hidden";
  // }
  // const onRegistration = (e) => {
  //   if (false) {
  //     navigate("/account");
  //   } else {
  //     navigate("/");
  //     dispatch(setShowRegister(true));
  //     showPopup();
  //   }
  // };
  // const onBlurShowModal = (e) => {
  //   e.preventDefault();
  //   dispatch(setShowModal(false));
  //   e.target.value = "no focus";
  //   navigate("/");
  // };

  // const input = document.querySelector(".header__search-input");
  // const modal = document.querySelector(".modal");

  // window.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (e.target === modal && e.target === input) {
  //     console.log("dddddddddddddddd");
  //   }
  //   console.log("e.currentTarget", e.currentTarget);
  //   console.log("e.target", e.target);
  // });

  // setTimeout(() => {
  //   const input = document.querySelector(".header__search-input");
  //   console.log("input", input);
  //   input.addEventListener("focus", () => {
  //     // navigate("/");
  //     input.value = "This input has focus";
  //     onSubmitShowModal();
  //     // console.log("showModal", showModal);
  //   });
  //   input.addEventListener("blur", () => {
  //     input.value = "";
  //     // dispatch(setShowModal(false));
  //   });
  // }, 10);

  // const onChangeHeaderSearchInput = () => {
  //   console.log("qqqqqqqqqqqqqqqqqqqq");
  // };

  // const refs = {
  //   header: document.querySelector(".header"),
  // };

  // if (showModal) {
  //   refs.header.classList.add("show-modal");
  // }

  return (
    <header className="header">
      <div className="header__logo">Wine Hub</div>
      <div className="header__search">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="header__search-icon"
        />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search any wine"
          onFocus={onFocusShowModal}
          // onBlur={onBlurShowModal}
          // onChange={onChangeHeaderSearchInput}
        />
      </div>
      <Navigation />
      <div className="header__user-block">
        <button
          className="header__user-block-button"
          onClick={() => onSubmitFindYourWine()}
        >
          Find your Wine
        </button>
        <NavLink
          className="header__user-block-registration"
          to="/register"
          // onClick={() => onRegistration()}
        >
          <img src={userIcon} alt="User Icon" />
        </NavLink>
      </div>
      {/* {showModal && <Modal />} */}
    </header>
  );
};

export default Header;
