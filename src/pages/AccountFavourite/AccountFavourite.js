// import "./Account.scss";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchWines } from "../../redux/wines/operations";
import { useSelector } from "react-redux";
import { selectAllWines } from "../../redux/wines/selectors";
import WineList from "../../components/WineList/WineList";

// import { selectLoading } from "redux/wines/selectors";

const getFavouriteWines = (wines) => {
  return wines.filter((wine) => wine.favourite === true);
};

const Favorite = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchWines());
  // }, [dispatch]);

  const winesList = useSelector(selectAllWines);
  console.log("winesList", winesList);
  const visibleWines = getFavouriteWines(winesList);

  return (
    <div>
      <WineList wines={visibleWines} />
    </div>
  );
};

export default Favorite;
