import "./advantages.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Advantages = () => {
  return (
    <section className="advantages flex w-full h-144">
      <div className="container h-full w-95/100">
        <Title>Our Advantages</Title>
        <div className="list w-full flex justify-evenly">
          {data.map((el, index) => (
            <ListElement
              key={index}
              title={el.title}
              href={el.href}
              iconHref={el.iconHref}
              color={el.color}
            >
              {el.children}
            </ListElement>
          ))}
        </div>
        <Button className="flex justify-center mt-12">SIGN UP NOW</Button>
      </div>
    </section>
  );
};
export default Advantages;

type ElProps = {
  children?: React.ReactNode;
  title?: string;
  href?: string;
  iconHref?: string;
  color?: string;
};

const ListElement: React.FC<ElProps> = ({
  children,
  title,
  href,
  iconHref,
  color,
}) => {
  return (
    <div className="list-element flex flex-col w-50">
      <div className="el-title">
        <div className={`icon ${color} flex `}>
          <img src={iconHref} className="m-auto"></img>
        </div>
        <div className="title">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="el-text">
        <p>{children}</p>
      </div>
      <div className="more">
        <a href={href}>Learn more</a>
      </div>
    </div>
  );
};

const data = [
  {
    title: "At School",
    href: "#",
    iconHref: "/advantages/1st.svg",
    children: "Engaging group and distance learning for teachers and students.",
    color: "bg-blue-500",
  },
  {
    title: "At work",
    href: "#",
    iconHref: "/advantages/2nd.svg",
    children: "For training, e-learning, interactive presentations and more.",
    color: "bg-yellow-400"
  },
  {
    title: "At home",
    href: "#",
    iconHref: "/advantages/3rd.svg",
    children: "Apps and games for family fun or home study.",
    color: "bg-cyan-400"
  },
  {
    title: "Learning apps",
    href: "#",
    iconHref: "/advantages/4th.svg",
    children: "Engage kids with the Kahoot! family of learning apps.",
    color: "bg-rose-500",
  }
];
