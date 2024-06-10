import React from 'react';
import './Header.scss';
import userIcon from '../img/user-icon.png'; // Імпорт іконки користувача
import searchIcon from '../img/search-icon.png'; // Імпорт іконки пошуку

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        Wine Hub
      </div>
      <div className="header__search">
        <img src={searchIcon} alt="Search Icon" className="header__search-icon" />
        <input type="text" className="header__search-input" placeholder="Search any wine" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="#" className="header__nav-link">Home</a></li>
          <li className="header__nav-item"><a href="#" className="header__nav-link">Project</a></li>
          <li className="header__nav-item"><a href="#" className="header__nav-link">Our Team</a></li>
        </ul>
      </nav>
      <div className="header__user-block">
        <button className="header__user-block__button">Find your Wine</button>
        <div className="header__user-block__icon">
          <img src={userIcon} alt="User Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
