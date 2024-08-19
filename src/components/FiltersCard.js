import "./FiltersCard.scss";
import four_stars from "../img/four_stars.png"; // Імпорт зображення фону
import five_stars from "../img/five_stars.png"; // Імпорт зображення фону
import star_favorite from "../img/star-favorite.png";

const FiltersCard = ({ rating, reviews, image, name, country, winaryName }) => {
  const stars = rating > 4.5 ? five_stars : four_stars;
  return (
    <li className="filtersCard">
      <button className="filtersCard__btn-fav">
        <img
          src={star_favorite}
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

export default FiltersCard;
