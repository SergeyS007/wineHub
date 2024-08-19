// import { useDispatch } from "react-redux";
// import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.scss";
import { register } from "../redux/auth/operations";
import crossIcon from "../img/crossIcon.png"; // Імпорт іконки користувач
import googleIcon from "../img/google.png"; // Імпорт іконки користувачаа
import { setShowRegister, setShowSignIn } from "../redux/showRegisterSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        // already21: form.elements.already21.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  function showPopup() {
    // .. логика отображения попапа
    document.body.style.overflow = "hidden";
  }
  function hidePopup() {
    // .. логика скрытия попапа
    document.body.style.overflow = "auto";
  }
  const closeRegister = (e) => {
    dispatch(setShowRegister(false));
    hidePopup();
    navigate("/");
  };
  const toSignIn = (e) => {
    dispatch(setShowRegister(false));
    dispatch(setShowSignIn(true));
    showPopup();
    navigate("/signIn");
  };

  return (
    <div className="register__backdrop">
      <div className="register__modal">
        <button className="register__cross" onClick={closeRegister}>
          <img
            src={crossIcon}
            alt="Cross Icon"
            className="register__cross-icon"
          />
        </button>

        <div className="register">
          <div className="register__image"></div>
          <div className="register__content">
            <h2 className="register__title">Join Wine Hub</h2>
            <div className="register__question-wrapper">
              <p className="register__question">Are you a member?</p>
              <button className="signInButton" onClick={toSignIn}>
                Sign in
              </button>
            </div>

            <form onSubmit={handleSubmit} className="register__form">
              <label className="register__form-label">
                First name
                <input
                  type="text"
                  name="firstName"
                  placeholder="Add first name"
                />
              </label>
              <label className="register__form-label">
                Last name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Add last name"
                />
              </label>
              <label className="register__form-wrapper">
                <input
                  type="checkbox"
                  name="already21"
                  className="register__form-checkbox"
                />
                <span>Are you already 21?</span>
              </label>
              <label className="register__form-label">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Add your email"
                />
              </label>
              <label className="register__form-label">
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Add password"
                />
                <p className="register__form-comment">At least 8 characters</p>
              </label>
              <label className="register__form-label">
                Confirm password
                <input
                  type="password"
                  name="password2"
                  autoComplete="off"
                  placeholder="Repeat password"
                />
                <p className="register__form-comment">At least 8 characters</p>
              </label>
              <button type="submit" className="register__form-btn">
                Register
              </button>
            </form>
            <div className="line"></div>
            <p>Or sign in with your social media</p>
            <div className="signInGoo">
              <img src={googleIcon} alt="google Icon" className="googleIcon" />
              <p>Sign in with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
