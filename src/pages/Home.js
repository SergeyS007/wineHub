// import { useState, useEffect } from "react";
// import { fetchMovies } from "services/api";
// // import { useLocation } from 'react-router-dom';
// import MoviesList from "components/MoviesList/MoviesList";
import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import RandomWine from "../components/RandomWine";

const Home = () => {
  //   const [imageList, setImageList] = useState([]);
  // const location = useLocation();

  //   useEffect(() => {
  //     fetchMovies().then(setImageList);
  //   }, []);

  return (
    <div>
      <Hero />
      <RandomWine />
      <BestSellers />
    </div>
  );
};

export default Home;
