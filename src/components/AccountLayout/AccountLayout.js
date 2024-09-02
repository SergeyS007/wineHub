import { Outlet } from "react-router-dom";
import AccountNav from "../AccountNav/AccountNav";
import "./AccountLayout.scss";

const AccountLayout = () => {
  return (
    <div className="accountLayout">
      <div className="accountLayout_backdrop">
        <div className="accountLayout_modal">
          <div className="accountLayout_wrapper">
            <AccountNav />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
