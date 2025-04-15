import "./Hero.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className="hero container flex w-full">
      <div className="container flex justify-between items-center">
        <div className="hero-text hero_half">
          <div className="container flex flex-col justify-start">
            <h1></h1>
            <p></p>
            <Button className="Hero-button">Sign up for free</Button>
          </div>
        </div>
        <div className="hero-img hero_half">
          <div className="image"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
