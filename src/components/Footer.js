import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <h2 className="footer__title">Let`s stay in contact</h2>
        <form name="signup_form" autocomplete="on" novalidate>
          <input
            placeholder="Write your email"
            type="email"
            name="email"
            className="footer__input"
          />
          <button type="submit" className="footer__button">
            Subscribe
          </button>
        </form>
      </div>

      <div className="footer__sub">
        <div className="footer__logo">Wine Hub</div>
        <p>Privacy Policy / Terms and conditions</p>
        <p>©2024</p>
      </div>
    </footer>
  );
};

export default Footer;
