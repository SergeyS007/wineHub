import "./RandomWineCard.scss";
import four_stars from "../../img/four_stars.png"; // Імпорт зображення фону
import five_stars from "../../img/five_stars.png"; // Імпорт зображення фону

const RandomWineCard = ({
  rating,
  reviews,
  image,
  year,
  name,
  country,
  region,
  wineType,
  onSubmit,
}) => {
  const stars = rating > 4.5 ? five_stars : four_stars;
  return (
    <div className="randomWineCard">
      <div className="randomWineCard__rating-wrapper">
        <div className="randomWineCard__rating">RATING {rating}</div>
        <img src={stars} alt="rating stars" />
      </div>

      <div className="randomWineCard__reviews">
        Rating based on {reviews} rewiews
      </div>
      <div className="randomWineCard__thumb">
        <img src={image} alt="wine" className="randomWineCard__img" />
      </div>
      <div className="randomWineCard__name">{name}</div>
      <div className="randomWineCard__wrapper">
        <ul className="randomWineCard__list">
          <li className="randomWineCard__item">Year</li>
          <li className="randomWineCard__item">Country</li>
          <li className="randomWineCard__item">Region</li>
          <li className="randomWineCard__item">Wine type</li>
        </ul>
        <ul className="randomWineCard__values">
          <li className="randomWineCard__value">{year}</li>
          <li className="randomWineCard__value">{country}</li>
          <li className="randomWineCard__value">{region}</li>
          <li className="randomWineCard__value">{wineType}</li>
        </ul>
      </div>

      <button
        type="button"
        className="randomWineCard__button"
        onClick={onSubmit}
      >
        Next Wine
      </button>
    </div>
  );
};

export default RandomWineCard;
