import type React from "react";
import "./prefooter.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router";
import { useRevealOnScroll } from "../useReveal/useRevealOnScroll";

const PreFooter = () => {
  const navigate = useNavigate();
  const ref = useRevealOnScroll();
  return (
    <section className="prefooter flex w-full flex-col zoom-in" ref={ref}>
      <div className="top-row w-full flex">
        <div className="container flex justify-evenly">
          {rows.map((el, index) => (
            <El color={el.color} key={index}>
              {el.text}
            </El>
          ))}
        </div>
      </div>
      <div className="bottom-hero container flex justify-evenly items-center w-9/10">
        <div className="imgblock"></div>
        <div className="textblock">
          <h3>Готовий почати підготовку?</h3>
          <Button onClick={() => {navigate("/subjects")}}>Почати безкоштовно</Button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;

type ElProps = {
  color?: string;
  children?: React.ReactNode;
};

const El: React.FC<ElProps> = ({ color, children }) => {
  return (
    <div className="element flex w-50 h-12">
      <div className="el-content flex">
        <div className={`${color} rect h-full`}></div>
        <p>{children}</p>
      </div>
    </div>
  );
};

const rows = [
  {
    color: "bg-blue-500",
    text: "Більше 50% учнів готуються онлайн",
  },
  {
    color: "bg-cyan-400",
    text: "Користувачі з усіх регіонів України",
  },
  {
    color: "bg-rose-500",
    text: "Понад 100 годин безкоштовних матеріалів",
  },
  {
    color: "bg-yellow-400",
    text: "Підходить для НМТ, ЗНО, ДПА та олімпіад",
  },
];
