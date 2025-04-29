import "./advantages.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { useNavigate } from "react-router";

const Advantages = () => {
  const navigate = useNavigate();
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
        <Button
          className="flex justify-center mt-12"
          onClick={() => navigate("/subjects")}
        >
          Почати зараз
        </Button>
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
        <a href={href}>Далі</a>
      </div>
    </div>
  );
};

const data = [
  {
    title: "У школі",
    href: "/about-us",
    iconHref: "/advantages/1st.svg",
    children:
      "Використовуйте тести та матеріали для роботи в класі чи на дистанції.",
    color: "bg-blue-500",
  },
  {
    title: "Самопідготовка",
    href: "/about-us",
    iconHref: "/advantages/2nd.svg",
    children:
      "Готуйся до НМТ у зручному темпі: розв’язуй тести, закріплюй теми.",
    color: "bg-yellow-400",
  },
  {
    title: "Вдома",
    href: "/about-us",
    iconHref: "/advantages/3rd.svg",
    children:
      "Проходь тренування з будь-якого предмету прямо зі смартфона або комп’ютера.",
    color: "bg-cyan-400",
  },
  {
    title: "Швидкий доступ",
    href: "/about-us",
    iconHref: "/advantages/4th.svg",
    children:
      "Використовуйте платформу для швидкого доступу до тестів та матеріалів.",
    color: "bg-rose-500",
  },
];
