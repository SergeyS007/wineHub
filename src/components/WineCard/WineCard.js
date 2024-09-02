import "./WineCard.scss";
import four_stars from "../../img/four_stars.png"; // Імпорт зображення фону
import five_stars from "../../img/five_stars.png"; // Імпорт зображення фону

const WineCard = ({ rating, reviews, image, name, country, winaryName }) => {
  const stars = rating > 4.5 ? five_stars : four_stars;
  return (
    <li className="wineCard">
      <div className="wineCard__rating-wrapper">
        <div>RATING {rating}</div>
        <img src={stars} alt="rating stars" />
      </div>
      <div className="wineCard__reviews">Rating based on {reviews} rewiews</div>
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
