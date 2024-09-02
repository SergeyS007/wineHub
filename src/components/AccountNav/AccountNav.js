import { NavLink } from "react-router-dom";
import person from "../../img/Account_icons/person.png";
import settings from "../../img/Account_icons/settings-horizontal.png";
import star from "../../img/Account_icons/star.png";
import logout from "../../img/Account_icons/sign-out.png";
import "./AccountNav.scss";

const AccountNav = () => {
  return (
    <div className="account_nav">
      <div className="wrapper">
        <div className="circle"></div>
        <h3 className="title">User Name</h3>
      </div>

      <nav className="account_list">
        <NavLink to="/account" end className="account_link">
          <img src={person} alt="person icon" className="account__icon" />
          Personal info
        </NavLink>
        <NavLink to="/account/setting" className="account_link">
          <img src={settings} alt="settings icon" className="account__icon" />
          Setting
        </NavLink>
        <NavLink to="/account/favorite" className="account_link">
          <img src={star} alt="favorite icon" className="account__icon" />
          Favorite wines
        </NavLink>
        <NavLink to="/account/logout" className="account_link">
          <img src={logout} alt="logout icon" className="account__icon" />
          Log out
        </NavLink>
      </nav>
    </div>
  );
};

export default AccountNav;
