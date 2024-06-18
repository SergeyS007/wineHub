import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/project">
            Project
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/ourTeam">
            Our Team
          </NavLink>
        </li>
        {/* <li>
          <SC.Link to="/search">Search</SC.Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
