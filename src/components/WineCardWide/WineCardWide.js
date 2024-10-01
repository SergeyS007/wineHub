import "./WineCardWide.scss";
import { useDispatch } from "react-redux";
import { makeFavorite } from "../../redux/wines/slice";
import four_stars from "../../img/four_stars.png"; // Імпорт зображення фону
import five_stars from "../../img/five_stars.png"; // Імпорт зображення фону
import star_favorite from "../../img/star-favorite.png";
import star_favorite_active from "../../img/star-favorite_active.png";

const WineCardWide = ({
  rating,
  reviews,
  image,
  name,
  country,
  winaryName,
  winary,
  favourite,
}) => {
  const dispatch = useDispatch();
  const stars = rating > 4.5 ? five_stars : four_stars;
  const { id } = winary;

  const handleBtnFavorite = () => {
    console.log(id);

    dispatch(makeFavorite(id));
    console.log(favourite);
  };

  return (
    <li className="filtersCard">
      <button className="filtersCard__btn-fav" onClick={handleBtnFavorite}>
        <img
          src={favourite ? star_favorite_active : star_favorite}
          alt="star-favorite"
          className="filtersCard__star"
        />
      </button>
      <div className="filtersCard__wrapper">
        <div className="filtersCard__content">
          <div className="filtersCard__rating-wrapper">
            <div className="filtersCard__rating">RATING {rating}</div>
            <img src={stars} alt="rating stars" />
          </div>
          <div className="filtersCard__reviews">
            Rating based on {reviews} rewiews
          </div>
          <div className="filtersCard__name">{name.toUpperCase()}</div>
          <div className="filtersCard__winaryName-wrapper">
            <div className="filtersCard__winaryName">{winaryName}</div>
            <div className="filtersCard__country">{country}</div>
          </div>
        </div>

        <div className="filtersCard__thumb">
          <img src={image} alt="wine" className="filtersCard__img" />
        </div>
      </div>
    </li>
  );
};

export default WineCardWide;
