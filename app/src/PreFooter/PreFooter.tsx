import type React from "react";
import "./prefooter.scss";
import Button from "../Button/Button";

const PreFooter = () => {
  return (
    <section className="prefooter flex w-full flex-col">
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
          <h3>Ready for make learning fun!</h3>
          <Button>Sign up for free</Button>
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
    text: "More than 50% of US teachers use Kurtis",
  },
  {
    color: "bg-cyan-400",
    text: "Players in more than 200 countries",
  },
  {
    color: "bg-rose-500",
    text: "Over 30 million public games available",
  },
  {
    color: "bg-yellow-400",
    text: "97% of the Fortune 500 use Kurtis",
  },
];
