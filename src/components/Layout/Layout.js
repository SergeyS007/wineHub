import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getShowModal,
  // getShowRegister,
  // getShowSignIn,
} from "../../redux/selectors";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
// import Register from "../pages/Register";
// import SignIn from "../pages/SignIn";
import TroubleLogIn from "../../pages/TroubliLogIn/TroubliLogIn";

const Layout = () => {
  const showModal = useSelector(getShowModal);
  // const showRegister = useSelector(getShowRegister);
  // const showSignIn = useSelector(getShowSignIn);
  return (
    <>
      <Header />
      {/* {showRegister && <Register />}
      {showSignIn && <SignIn />} */}
      {showModal && <Modal />}
      {"" && <TroubleLogIn />}
      {/* {1 && <AccountLayout />} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
