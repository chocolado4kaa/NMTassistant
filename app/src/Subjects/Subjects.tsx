import { Link } from "react-router";
import Row from "../Row";
import Title from "../Title/Title";
import "./subjects.scss"

const _subjects = [
  {
    name: "math",
    description: "math_desc",
    img: "",
    href: "#",
  },
  {
    name: "ukr_lang",
    description: "ukr_lang_desc",
    img: "",
    href: "#",
  },
  {
    name: "history",
    description: "history_desc",
    img: "",
    href: "#",
  },
  {
    name: "eng_lang // іноземна",
    description: "eng_lang_desc",
    img: "",
    href: "#",
  },
  {
    name: "literature",
    description: "literature_desc",
    img: "",
    href: "#",
  },
  {
    name: "physics",
    description: "physics_desc",
    img: "",
    href: "#",
  },
  {
    name: "other sciences (geo, bio, etc)",
    description: "science_desc",
    img: "",
    href: "#",
  },
];

const Subjects = () => {
  return (
    <section className="subjects w-full flex">
      <div className="flex container w-full m-auto flex-col">
        {_subjects.map((subj, index) => (
          <Row key={index} className="subject">
            {{
              left: subj.img ? <img src={subj.img}></img> : null,
              right: (
                <>
                  <Title>{subj.name}</Title>
                  <p>{subj.description}</p>
                  <Link to={subj.href}>Далі</Link>
                </>
              ),
            }}
          </Row>
        ))}
      </div>
    </section>
  );
};
export default Subjects;
