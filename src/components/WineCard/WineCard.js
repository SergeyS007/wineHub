import "./WineCard.scss";
import { useDispatch } from "react-redux";
import { makeFavorite } from "../../redux/wines/slice";
import star_favorite from "../../img/star-favorite.png";
import star_favorite_active from "../../img/star-favorite_active.png";
import four_stars from "../../img/four_stars.png"; // Імпорт зображення фону
import five_stars from "../../img/five_stars.png"; // Імпорт зображення фону

const WineCard = ({
  rating,
  reviews,
  image,
  name,
  country,
  winaryName,
  winary,
  favourite,
}) => {
  const stars = rating > 4.5 ? five_stars : four_stars;
  const dispatch = useDispatch();
  const { id } = winary;

  const handleBtnFavorite = () => {
    console.log(id);
    dispatch(makeFavorite(id));
    console.log("favourite", favourite);
  };

  return (
    <li className="wineCard">
      <div className="wineCard__rating-wrapper">
        <div>RATING {rating}</div>
        <img src={stars} alt="rating stars" />
      </div>
      <div className="wineCard__reviews">Rating based on {reviews} rewiews</div>
      <button className="filtersCard__btn-fav" onClick={handleBtnFavorite}>
        <img
          src={favourite ? star_favorite_active : star_favorite}
          alt="star-favorite"
          className="filtersCard__star"
        />
      </button>
      <div className="wineCard__thumb">
        <img src={image} alt="wine" className="wineCard__img" />
      </div>
      <div className="wineCard__name">
        <div>{winaryName}</div>
        <div>{country}</div>
      </div>
      <div>{name}</div>
    </li>
  );
};

export default WineCard;
