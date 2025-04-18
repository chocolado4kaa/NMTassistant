import "./Hero.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className="hero container flex w-full">
      <div className="container flex justify-between items-center">
        <div className="hero-text hero_half">
          <div className="container flex flex-col justify-start">
            <h1>Підготовка може бути зручною!</h1>
            <p>Будь-яка тема, будь-якою мовою, на будь-якому пристрої, для будь-якого віку!</p>
            <Button className="Hero-button">дізнатись більше</Button>
          </div>
        </div>
        <div className="hero-img hero_half w-125 h-110">
          <div className="image w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
