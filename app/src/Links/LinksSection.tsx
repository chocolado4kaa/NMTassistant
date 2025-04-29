import Title from "../Title/Title";
import { subjectsData } from "../Subject/subjectsData";
import Row from "../Row";
import "./linksSection.scss";

const LinksSection = () => {
  return (
    <section className="useful-links w-full py-16 flex items-center flex-col">
      <div className="container flex flex-col gap-8">
        {Object.values(subjectsData).map((subject, index) => {
          const textBlock = (
            <div className="text-content">
              <Title>{subject.name}</Title>
              <div className="flex flex-col md:flex-row gap-8 mt-4">
                <List title="Тести">
                  {subject.tests.map((test, i) => (
                    <li key={i} className="text-clip overflow-hidden">
                      <a
                        href={test.link}
                        target="_blank"
                        className="link truncate max-w-[250px] inline-block align-middle"
                      >
                        {test.title}
                      </a>
                    </li>
                  ))}
                </List>
                <List title="Матеріали">
                  {subject.materials.map((material, i) => (
                    <li key={i} className="text-clip overflow-hidden">
                      <a
                        href={material.link}
                        target="_blank"
                        className="link truncate max-w-[250px] inline-block align-middle"
                      >
                        {material.title}
                      </a>
                    </li>
                  ))}
                </List>
              </div>
            </div>
          );

          const imageBlock = (
            <img
              src={subject.img}
              alt={subject.name}
              className="w-[300px] h-[300px] object-contain rounded-xl shadow-md"
            />
          );

          return (
            <Row
              key={index}
              className="items-center gap-8 flex-col md:flex-row"
            >
              {index % 2 === 0
                ? { left: textBlock, right: imageBlock }
                : { left: imageBlock, right: textBlock }}
            </Row>
          );
        })}
      </div>
      <div className="flex container flex-col other w-6/10">
        <Title>Інші посилання</Title>
        {otherSubjects.map((subject, index) => (
            <OtherSubject key={index} {...subject}/>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;

type listProps = {
  title?: string;
  children?: React.ReactNode;
};
const List: React.FC<listProps> = ({ title, children }) => {
  return (
    <div className="flex-1">
      <h4 className="text-lg mb-2 text-center!">{title}</h4>
      <ul className="list-disc pl-4 list-inside space-y-1">{children}</ul>
    </div>
  );
};

type otherSubjProps = {
  title?: string;
  test: {
    link?: string;
    title?: string;
  };
  material: {
    link?: string;
    title?: string;
  };
};
const OtherSubject: React.FC<otherSubjProps> = ({ title, test, material }) => {
  return (
    <>
      <h2 className="text-start relative">{title}</h2>
      <Row>
        {{
          left: (
            <>
              <h4 className="text-lg mb-2 text-center!">Тести</h4>
              <a
                href={test.link}
                target="_blank"
                className="link truncate max-w-[250px] inline-block align-middle"
              >
                {test.title}
              </a>
            </>
          ),
          right: (
            <>
              <h4 className="text-lg mb-2 text-center!">Матеріали</h4>
              <a
                href={material.link}
                target="_blank"
                className="link truncate max-w-[250px] inline-block align-middle"
              >
                {material.title}
              </a>
            </>
          ),
        }}
      </Row>
    </>
  );
};

const otherSubjects = [
  {
    title: "Біологія",
    test: {
      link: "https://zno.osvita.ua/biology/",
      title: "Тести НМТ онлайн з предмета Біологія",
    },
    material: {
      link: "https://www.youtube.com/playlist?list=PLH1iFGL1sy5gtx154BU6rDLhmLXVySPvf",
      title: "НМТ біологія (вебінари)",
    },
  },
  {
    title: "Хімія",
    test: {
      link: "https://zno.osvita.ua/chemistry/",
      title: "Тести НМТ онлайн з Хімії",
    },
    material: {
      link: "https://www.youtube.com/playlist?list=PLH1iFGL1sy5j85z8Tdn2bCgiYZ-K0eMwS",
      title: "Вебінари до НМТ з хімії",
    },
  },
  {
    title: "Географія",
    test: {
      link: "https://zno.osvita.ua/geography/",
      title: "Тести НМТ з географії",
    },
    material: {
      link: "https://www.youtube.com/playlist?list=PLH1iFGL1sy5g-eRZMM5I-ahEw_7TIYaUl",
      title: "НМТ 2025. Географія (вебінари)",
    },
  },
];
