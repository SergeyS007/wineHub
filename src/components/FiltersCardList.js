// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import FiltersCard from "./FiltersCard";
import "./FiltersCardList.scss";

const FiltersCardList = ({ wines }) => {
  //   const location = useLocation();

  return (
    <ul className="filtersCardList">
      {wines.map((wine) => (
        <FiltersCard
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

export default FiltersCardList;
