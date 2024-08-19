// import { useDispatch } from "react-redux";
// import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignInForm.scss";
import { logIn } from "../redux/auth/operations";
import crossIcon from "../img/crossIcon.png"; // Імпорт іконки користувач
import googleIcon from "../img/google.png"; // Імпорт іконки користувачаа
import { setShowSignIn, setShowRegister } from "../redux/showRegisterSlice";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
  const closeSignIn = (e) => {
    dispatch(setShowSignIn(false));
    hidePopup();
    navigate("/");
  };
  const toRegister = (e) => {
    dispatch(setShowRegister(true));
    dispatch(setShowSignIn(false));
    showPopup();
  };

  return (
    <div className="signIn__backdrop">
      <div className="signIn__modal">
        <button className="signIn__cross" onClick={closeSignIn}>
          <img
            src={crossIcon}
            alt="Cross Icon"
            className="signIn__cross-icon"
          />
        </button>

        <div className="signIn">
          <div className="signIn__image"></div>
          <div className="signIn__content">
            <h2 className="signIn__title">Join Wine Hub</h2>
            <div className="signIn__question-wrapper">
              <p className="signIn__question">Not a member yet?</p>
              <button className="signInButton" onClick={toRegister}>
                Register now
              </button>
            </div>

            <form onSubmit={handleSubmit} className="signIn__form">
              <label className="signIn__form-label">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Add your email"
                />
              </label>
              <label className="signIn__form-label">
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Add password"
                />
                <p className="signIn__form-comment">
                  Forgot Password? <span>Reset or setup </span>
                  your password.
                </p>
              </label>

              <button type="submit" className="signIn__form-btn">
                Sign in
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

export default SignInForm;
