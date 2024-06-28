// import { useState, useEffect } from "react";
// import { fetchMovies } from "services/api";
// // import { useLocation } from 'react-router-dom';
// import MoviesList from "components/MoviesList/MoviesList";
import { useSelector } from "react-redux";
import { getShowFilter } from "../redux/selectors";
import BestSellers from "../components/BestSellers";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import RandomWine from "../components/RandomWine";
import RegisterForm from "../components/RegisterForm";
import WineInsights from "../components/WineInsights";

const Home = () => {
  const showFilter = useSelector(getShowFilter);
  console.log("showFilter", showFilter);

  return (
    <div>
      <Hero />
      {showFilter ? <Filters /> : <RandomWine />}
      {/* <Filters /> */}

      <BestSellers />
      <WineInsights />
      <RegisterForm />
    </div>
  );
};

export default Home;
