import "./Account.scss";
import update from "../../img/Account_icons/cloud-upload.png";

const Account = () => {
  return (
    <div className="account">
      <div className="account__update">
        <div className="account__photo"></div>
        <div>
          <button className="account__btn-update">
            <img src={update} alt="update icon" className="update__icon" />
            <p className="account__btn-text">Update your photo</p>
          </button>
          <p className="account__update-text">
            Please upload file format JPG, JPGE, HEIC, PNG
          </p>
        </div>
      </div>
      <form className="account__form">
        <div className="account__form-labels">
          <label className="account__form-label">
            First name
            <input
              className="account__form-input"
              type="text"
              name="firstName"
              placeholder="Add first name"
            ></input>
          </label>
          <label className="account__form-label">
            Last name
            <input
              className="account__form-input"
              type="text"
              name="lastName"
              placeholder="Add last name"
            ></input>
          </label>
        </div>
        <label className="account__form-label">
          Country
          <input
            className="account__form-input account__form-country"
            type="text"
            name="country"
            placeholder="Choose your country"
          ></input>
        </label>
        <button className="account__form-btn">Save</button>
      </form>
    </div>
  );
};

export default Account;
