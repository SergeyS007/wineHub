// import Hero from "../componets/Hero";
// import RandomWine from "../componets/RandomWine";
import "./Project.scss";

const Project = () => {
  //   const [imageList, setImageList] = useState([]);
  // const location = useLocation();

  //   useEffect(() => {
  //     fetchMovies().then(setImageList);
  //   }, []);

  return (
    <div className="project">
      <section className="project__hero">
        <h1 className="project__title">
          Experience the future of wine selection
        </h1>
        <span> Cheers!</span>
      </section>
      <section className="project__philosophy">
        <div className="project__philosophy-content">
          <h5>PHILOSOPHY</h5>
          <h4 className="project__philosophy-title">
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
      </section>
    </div>
  );
};

export default Project;
