import philosophyImage from "../img/projectPhilosophy.png"; // Імпорт зображення фону
import ideaImage from "../img/projectIdea.png";
import choose1Image from "../img/choose1.png";
import choose2Image from "../img/choose2.png";
import "./Project.scss";

const Project = () => {
  return (
    <div className="project">
      <section className="project__hero">
        <h2 className="project__title">
          Experience the future of wine selection
        </h2>
        <span> Cheers!</span>
      </section>
      <section className="project__section">
        <div className="project__section-content">
          <h5>PHILOSOPHY</h5>
          <h4 className="project__section-title">
            Preserving the Enduring Relationship Between Wine and Innovation
          </h4>
          <p>
            Start by answering a few simple questions about your taste
            preferences, the occasion, and any specific requirements you might
            have (e.g., type of cuisine, budget, etc.).
          </p>
          <p>
            Based on your answers, our virtual sommelier will analyze a vast
            database of wines to provide you with a curated list of
            recommendations. Each suggestion comes with detailed tasting notes,
            food pairings, and user reviews.
          </p>
          <p>
            Gain access to expert insights and tips from certified sommeliers
            who contribute their knowledge to enhance your wine selection
            experience. Learn about different wine regions, grape varieties, and
            the art of wine tasting.
          </p>
          <p>
            Once you've found the perfect wine, you can easily save it directly
            on our site. You can create collections and come back to them when
            its nedeed.
          </p>
        </div>
        <div className="project__section-thumb">
          <img src={philosophyImage} alt="philosophy Background" />
        </div>
      </section>
      <section className="project__section">
        <div className="project__section-thumb">
          <img src={ideaImage} alt="idea Background" />
        </div>
        <div className="project__section-content">
          <h5>IDEA</h5>
          <h4 className="project__section-title">
            Discover the Perfect Wine with Our Virtual Sommelier
          </h4>
          <p>
            Welcome to Wine Hub, where we bring the expertise of a professional
            sommelier right to your fingertips. Our innovative virtual sommelier
            service is designed to help you find the perfect wine for any
            occasion, making wine selection an enjoyable and personalized
            experience.
          </p>
          <p>
            A virtual sommelier is an online tool that uses advanced algorithms
            and expert knowledge to recommend wines based on your preferences,
            occasion, and food pairings. Whether you're a seasoned wine
            connoisseur or a casual drinker, our virtual sommelier is here to
            guide you through the vast world of wine with ease and confidence.
          </p>
        </div>
      </section>
      <section className="project__choose">
        <h2 className="project__choose-title">Why choose us</h2>
        <p className="project__choose-sub">
          Delightful everyday wine, we`ve got you covered.
        </p>
        <div className="project__container">
          <div className="project__wrapper">
            <div className="project__container-item">
              <p>01</p>
              <h5 className="project__container-title">Convenience</h5>
              <p className="project__container-text">
                No need to spend hours researching or feeling overwhelmed by the
                choices in a wine store. Our virtual sommelier simplifies the
                process, saving you time and effort.
              </p>
            </div>
            <div className="project__container-item">
              <p>02</p>
              <h5 className="project__container-title">Personalization</h5>
              <p className="project__container-text">
                Each recommendation is tailored to your unique preferences and
                needs, ensuring you find a wine that you'll truly enjoy.
              </p>
            </div>
            <div className="project__container-item">
              <img src={choose1Image} alt="choose Background" />
            </div>
          </div>
          <div className="project__wrapper">
            <div className="project__container-item"></div>
            <div className="project__container-item">
              <p>03</p>
              <h5 className="project__container-title">Expertise</h5>
              <p className="project__container-text">
                Benefit from the knowledge and experience of professional
                virtual sommeliers without having to visit a high-end restaurant
                or winery.
              </p>
            </div>
            <div className="project__container-item">
              <p>04</p>
              <h5 className="project__container-title">Variety</h5>
              <p className="project__container-text">
                Explore a wide range of wines from different regions and price
                points, expanding your palate and discovering new favorites.
              </p>
            </div>
          </div>
          <div className="project__wrapper">
            <div className="project__container-longImage">
              <img src={choose2Image} alt="choose2 Background" />
            </div>

            <div className="project__container-item">
              <p>05</p>
              <h5 className="project__container-title">
                Educational Resources
              </h5>
              <p className="project__container-text">
                Access a wealth of information about wine, including articles,
                videos, and guides that can help you become more confident in
                your wine choices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
