// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import WineCard from "./WineCard";
import "./WineList.scss";

const WineList = ({ wines }) => {
  //   const location = useLocation();

  return (
    <ul className="wineList">
      {wines.map((wine) => (
        <WineCard
          key={wine.winery.id}
          rating={wine.rating.average}
          reviews={Number.parseInt(wine.rating.reviews)}
          image={wine.image_url}
          name={wine.name}
          country={wine.location.country}
          winaryName={wine.winery.name}
        />
      ))}
    </ul>
  );
};

export default WineList;
