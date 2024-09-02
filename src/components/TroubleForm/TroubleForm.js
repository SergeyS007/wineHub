// import { useDispatch } from "react-redux";
import "./TroubleForm.scss";
import crossIcon from "../../img/crossIcon.png"; // Імпорт іконки користувач
// import { setShowSignIn, setShowRegister } from "../redux/showRegisterSlice";

const TroubleForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };
  function showPopup() {
    // .. логика отображения попапа
    document.body.style.overflow = "hidden";
  }
  showPopup();
  function hidePopup() {
    // .. логика скрытия попапа
    document.body.style.overflow = "auto";
  }
  const closeTrouble = (e) => {
    // dispatch(setShowSignIn(false));
    hidePopup();
  };
  //   const toRegister = (e) => {
  //     dispatch(setShowRegister(true));
  //     dispatch(setShowSignIn(false));
  //     showPopup();
  //   };

  return (
    <div className="trouble__backdrop">
      <div className="trouble__modal">
        <button className="trouble__cross" onClick={closeTrouble}>
          <img
            src={crossIcon}
            alt="Cross Icon"
            className="trouble__cross-icon"
          />
        </button>

        <div className="trouble">
          <div className="trouble__image"></div>
          <div className="trouble__content">
            <h2 className="trouble__title">Trouble logging in?</h2>

            <p className="trouble__question">
              Type your email address and we will send you a link to reset your
              password.
            </p>

            <form onSubmit={handleSubmit} className="trouble__form">
              <label className="trouble__form-label">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Type your email"
                />
              </label>

              <button type="submit" className="trouble__form-btn">
                Reset password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleForm;
