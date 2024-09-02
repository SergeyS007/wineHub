import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import "./styles/main.scss";
import Layout from "./components/Layout/Layout";
import Project from "./pages/Project/Project";
import OurTeam from "./pages/OurTeam/OurTeam";
import Account from "./pages/Account/Account";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import Setting from "./pages/AccountSetting/AccountSetting";
import Favorite from "./pages/AccountFavourite/AccountFavourite";
import SignIn from "./pages/SignIn/SignIn";

// const LoginPage = lazy(() => import("../pages/Login"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="ourTeam" element={<OurTeam />} />
        <Route path="register" element={<Register />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="account" element={<AccountLayout />}>
          <Route index element={<Account />} />
          <Route path="setting" element={<Setting />} />
          <Route path="favorite" element={<Favorite />} />
          {/* <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
