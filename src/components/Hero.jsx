import {} from "react-icons/";
import "/src/styles/Hero.css";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Give your brand the digital presence it needs.</h1>
          <p>Our Tailored solutions gurrantees your brand success and growth.</p>
          <div className="cta-btn">
          <button className="hero-try-btn">Try for free</button>
          <button className="hero-see-btn">See how it works</button>
          </div>
        </div>
        <div className="hero-img">
            <img src="/src/assets/stressed-person-using-computer-at-desk.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
