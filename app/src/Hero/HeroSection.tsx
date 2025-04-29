import "./Hero.scss";
import Button from "../Button/Button";
import type React from "react";
import { useNavigate } from "react-router";

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
};

const HeroSection: React.FC<HeroProps> = ({ children, className }) => {
  const navigate = useNavigate();
  return (
    <section className={`hero container flex w-full ${className}`}>
      <div className="container flex justify-between items-center">
        <div className="hero-text hero_half">
          <div className="container flex flex-col justify-start">
            {children ? (
              children
            ) : (
              <>
                <h1>Підготовка може бути зручною!</h1>
                <p>
                  Будь-яка тема, будь-якою мовою, на будь-якому пристрої, для
                  будь-якого віку!
                </p>
                <Button className="Hero-button" onClick={() => {navigate("/about-us")}}>дізнатись більше</Button>
              </>
            )}
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
