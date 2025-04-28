import Row from "../Row";
import Title from "../Title/Title";
import AdditonalInfo from "./additonalInfo";
import "./subj.scss"

type SubjectProps = {
    name: string;
    description: string;
    img: string;
    tests: {
      link: string;
      title: string;
    }[];
    materials: {
      link: string;
      title: string;
    }[];
  };
  
const Subject: React.FC<SubjectProps> = ({ name, description, img, tests, materials }) => {
    return (
      <section className="bg-white subject">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <Row className="w-8/10! subj-info">
            {{
              left: (
                <>
                <Title></Title>
                <p>{description}</p>
                </>
              ),
              right: (
                <>
                <Title>Посилання</Title>
                <ul>
                  {tests.map((test, index) => (
                    <li key={index}><a href={test.link} target="_blank">{test.title}</a></li>
                  ))}
                </ul>
                </>
              )
            }}
          </Row>
          <Row className="w-8/10! materials">
            {{
              right: (
                <img src={img}></img>
              ),
              left: (
                <>
                <Title>Матеріали</Title>
                <ul>
                  {materials.map((material, index) => (
                    <li key={index}><a href={material.link} target="_blank">{material.title}</a></li>
                  ))}
                </ul>
                </>
              )
            }}
          </Row>
          <AdditonalInfo />
        </div>
      </section>
    );
  }

  export default Subject;