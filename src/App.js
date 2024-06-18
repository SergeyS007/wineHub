import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.scss";
import Layout from "./components/Layout";
import Project from "./pages/Project";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    // <div className="App">
    //   <Layout />
    //   <Hero />
    //   <SecondPage />
    // </div>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ourTeam" element={<OurTeam />} />
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
