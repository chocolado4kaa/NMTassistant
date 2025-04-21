import Row from "../Row";
import Title from "../Title/Title";
import "./aboutUs.scss";

const Rows = [
  {
    left: <img src="/aboutUS/Miroodles Color Composition-1.png" />,
    right: (
      <>
        <h5>Create</h5>
        <p>
          It only takes minutes to create a learning game or trivia quiz on any
          topic, in any language.
        </p>
      </>
    ),
  },
  {
    left: (
      <>
        <h5>Host or share</h5>
        <p>
          Host a live game with questions on a big screen or share a game with
          remote players.
        </p>
      </>
    ),
    right: <img src="/aboutUS/Miroodles Color Composition-2.png"></img>,
  },
  {
    left: <img src="/aboutUS/Miroodles Color Composition.png"></img>,
    right: (
      <>
        <h5>Play</h5>
        <p>
          Game on! Join a kahoot with a PIN provided by the host and answer
          questions on your device.
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
