import "./WineCard.scss";

const WineCard = ({ rating, reviews, image, name, country, winaryName }) => {
  return (
    <li className="wineCard">
      <div>RATING {rating}</div>
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
