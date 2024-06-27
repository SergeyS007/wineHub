// import Hero from "../componets/Hero";
// import RandomWine from "../componets/RandomWine";
import "./OurTeam.scss";
import team from "../img/team.png";

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <section className="ourTeam__hero">
        <div className="ourTeam__content">
          <p>TEAM PROJECT</p>
          <h2 className="ourTeam__title">Valuable experience</h2>
          <p className="ourTeam__content-text">
            During last 5 weeks, our team worked independently on the project
            Wine Hub. Each week we went through one topic of the module, which
            helped to further understand the work process. Experience we gained
            during the team project we will definatly take with us to our future
            work.
          </p>
          <p className="ourTeam__content-text"> Thank you Mate Academy!</p>
        </div>
        <div className="ourTeam__bg"></div>
      </section>
      <section className="ourTeam__team">
        <h1 className="ourTeam__team-title">Our team</h1>
        <p className="ourTeam__team-sub-title">
          Enthusiastic people united by one goal
        </p>
        <div className="ourTeam__wrapper">
          <div className="ourTeam__team-image">
            <img src={team} alt="team" />
          </div>
          <ul className="ourTeam__members">
            <li className="ourTeam__member">
              <p className="ourTeam__position">QA engineer</p>
              <h3 className="ourTeam__name">Nataliia</h3>
              <p className="ourTeam__role">
                Creating test documentation. Conducting testing. Has a holistic
                vision of the product, organizes the work process.
              </p>
            </li>
            <li className="ourTeam__member">
              <p className="ourTeam__position">Backend developer</p>
              <h3 className="ourTeam__name">Anton</h3>
              <p className="ourTeam__role">
                Сovers backend documentation, provides implementing backend to
                frontend.
              </p>
            </li>
            <li className="ourTeam__member">
              <p className="ourTeam__position">frontend developer</p>
              <h3 className="ourTeam__name">Serhiy</h3>
              <p className="ourTeam__role">
                Implements the UI/UX of the site, works with the API and
                displays data for the user.
              </p>
            </li>
            <li className="ourTeam__member">
              <p className="ourTeam__position">ui/ux designer</p>
              <h3 className="ourTeam__name">Svitlana</h3>
              <p className="ourTeam__role">
                Conducts research before creating a product, knows what product
                users need, design layout.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
