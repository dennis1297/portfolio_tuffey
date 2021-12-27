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
        Im a graduate Student from Vels University of Chennai graduating in June 2020. When I discovered Web Devolopment in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.Im excellent in working as a MERN stack Devoloper.
        </p>
      </div>
    </div>
  );
};

export default About;
