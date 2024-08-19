import "./AccountSetting.scss";

const Setting = () => {
  return (
    <div className="setting">
      <form className="setting__form">
        <p className="setting__title">Contacts</p>
        <label className="setting__form-label">
          Email
          <input
            className="setting__form-input setting__form-wide"
            type="email"
            name="email"
            placeholder="Add your email"
          ></input>
        </label>
        <p className="setting__form-text">Email approved</p>
        <p className="setting__title">Subscribe</p>
        <div className="setting__form-subscribe">
          <label>
            <input type="radio" name="subscribe" value="subscribe" checked />
            Subscribe to all notifications
          </label>
          <label>
            <input type="radio" name="unsubscribe" value="unsubscribe" />
            Unsubscribe to all notifications
          </label>
        </div>

        <p className="setting__title">Password</p>
        <label className="setting__form-label">
          Add old password
          <input
            className="setting__form-input setting__form-wide"
            type="text"
            name="country"
            placeholder="Add your password"
          ></input>
        </label>
        <div className="setting__form-labels">
          <label className="setting__form-label">
            New password
            <input
              className="setting__form-input"
              type="text"
              name="firstName"
              placeholder="Add new password"
            ></input>
          </label>
          <label className="setting__form-label">
            Repeat new password
            <input
              className="setting__form-input"
              type="text"
              name="lastName"
              placeholder="Repeat new password"
            ></input>
          </label>
        </div>
        <p className="text">At least 8 characters</p>
        <button className="setting__form-btn">Save</button>
      </form>
    </div>
  );
};

export default Setting;
