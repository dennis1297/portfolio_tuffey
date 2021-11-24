import "./about.css";
import pic from "../../img/dog2.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={pic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Hello...</h1>
        <p className="a-sub">
          I want to make things that make a Difference.
        </p>
        <p className="a-desc">
        Im a graduate Student from Vels University of Chennai graduating in June 2020. I was exhausted and pissed off working for Corporate Scammers.... as bondslave was'nt my cup of Tea, so here i am with my own company. Im excellent in working as a MERN stack Devoloper. Most importantly i'm not a wimp who believes in Word Press.
        </p>
      </div>
    </div>
  );
};

export default About;