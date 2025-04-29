import Row from "../Row";
import Title from "../Title/Title";
import "./aboutUs.scss";

const Rows = [
  {
    left: <img src="/aboutUS/Miroodles Color Composition-1.png" />,
    right: (
      <>
        <h5>Обери предмет</h5>
        <p>
          Ми підготували тести, вебінари та конспекти з усіх основних предметів НМТ. Просто обери те, що потрібно саме тобі — і починай готуватись уже зараз.
        </p>
      </>
    ),
  },
  {
    left: (
      <>
        <h5>Проходь тести й тренування</h5>
        <p>
          Виконуй завдання в зручному форматі, переглядай пояснення до складних тем та стеж за своїм прогресом. Готуватись можна будь-де й будь-коли.
        </p>
      </>
    ),
    right: <img src="/aboutUS/Miroodles Color Composition-2.png" />,
  },
  {
    left: <img src="/aboutUS/Miroodles Color Composition.png" />,
    right: (
      <>
        <h5>Покращуй результат</h5>
        <p>
          Регулярна практика допоможе уникнути типових помилок і впевнено скласти НМТ. Ми покажемо, над чим ще варто попрацювати, щоб отримати свій максимум.
        </p>
      </>
    ),
  },
];


const AboutUs = () => {
  return (
    <section className="about-us flex container w-full flex-col">
      <Title>How does Kurtis work?</Title>
      <div className="flex container w-full m-auto flex-col">
        {Rows.map((row, index) => (
            <Row key={index}>
                {{
                    left: row.left,
                    right: row.right,
                }}
            </Row>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
