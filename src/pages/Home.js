import { useSelector } from "react-redux";
import { getShowFilter, getShowHero } from "../redux/selectors";
import BestSellers from "../components/BestSellers";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import RandomWine from "../components/RandomWine";
import WineInsights from "../components/WineInsights";

const Home = () => {
  const showFilter = useSelector(getShowFilter);
  const showHero = useSelector(getShowHero);
  console.log("showHero", showHero);

  return (
    <div>
      {showHero && <Hero />}
      {showFilter ? <Filters /> : <RandomWine />}
      <BestSellers />
      <WineInsights />
    </div>
  );
};

export default Home;
