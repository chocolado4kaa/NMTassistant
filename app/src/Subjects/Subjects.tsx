import { Link } from "react-router";
import Row from "../Row";
import Title from "../Title/Title";
import "./subjects.scss";

const _subjects = [
  {
    name: "Математика",
    description:
      "Підготовка з математики допоможе впевнено пройти завдання на обчислення, логіку та аналіз даних. Ми розглянемо основні теми НМТ: рівняння, нерівності, геометрію та комбінаторику. Завдяки системній практиці ти зможеш швидко вирішувати задачі та уникати типових помилок.",
    img: "/NMTassistant/subjects/List/Tech Life - Life Management.png",
    href: "/subjects/math",
  },
  {
    name: "Українська мова",
    description:
      "На НМТ важливо грамотно писати й розуміти мовні норми. Ми допоможемо повторити орфографію, пунктуацію, синтаксис і основи культури мовлення. Короткі пояснення та практичні вправи забезпечать високу підготовку до тесту.",
    img: "/NMTassistant/subjects/List/Open Doodles - Reading.png",
    href: "/subjects/ukrainian",
  },
  {
    name: "Історія України",
    description:
      "Підготовка охоплює ключові періоди історії України: від найдавніших часів до сьогодення. Ми зосередимося на основних подіях, датах і постатях, які часто трапляються у тестах НМТ. Стислий, але глибокий виклад матеріалу допоможе швидко закріпити знання.",
    img: "/NMTassistant/subjects/List/Open Doodles - Reflecting.png",
    href: "/subjects/history",
  },
  {
    name: "Іноземна мова",
    description:
      "На НМТ можна обирати різні іноземні мови: англійську, німецьку, французьку чи іспанську. Ми допоможемо підготуватися до тесту через вправи на читання текстів, розуміння граматики та розвиток словникового запасу. Подаємо матеріал чітко та доступно, щоб ти впевнено пройшов мовну частину тесту.",
    img: "/NMTassistant/subjects/List/Stuck at Home - Working from Home.png",
    href: "/subjects/foreignLang",
  },
  {
    name: "Українська література",
    description:
      "На тесті часто зустрічаються питання про авторів, твори та тематику української літератури. Ми допоможемо запам'ятати основні твори, персонажів і літературні напрями. Лаконічні конспекти й тести для тренування забезпечать відмінний результат.",
    img: "/NMTassistant/subjects/List/Brazuca - Standing.png",
    href: "/subjects/literature",
  },
  {
    name: "Фізика",
    description:
      "Підготовка включає основні теми: механіку, молекулярну фізику, електрику та оптику. Ми подаємо складні теми просто і доступно. Розв'язуючи типові задачі НМТ, ти навчишся швидко аналізувати умови й знаходити правильні рішення.",
    img: "/NMTassistant/subjects/List/Stuck at Home - Happy Place.png",
    href: "/subjects/physics",
  },
  {
    name: "Не знайшов потрібний предмет?",
    description:
      "Не проблема! Переходь за посиланням і обери потрібний курс або предмет для підготовки до НМТ. Ми постійно оновлюємо перелік матеріалів, щоб кожен міг знайти все необхідне для якісної підготовки до тестування.",
    img: "/NMTassistant/subjects/List/People of Brooklyn - Work From Home.png",
    href: "/links",
  },
];

const Subjects = () => {
  return (
    <section className="subjects w-full flex">
      <div className="flex w-full m-auto flex-col items-center">
        {_subjects.map((subj, index) => (
          <>
          <Row key={index} className="subject w-8/10!">
            {{
              left: subj.img ? <img src={subj.img}></img> : null,
              right: (
                <>
                  <Title>{subj.name}</Title>
                  <p>{subj.description}</p>
                  <Link to={subj.href} className="relative">Далі</Link>
                </>
              ),
            }}
          </Row>
          <div className="w-full h-1 line"></div>
          </>
        ))}
      </div>
    </section>
  );
};
export default Subjects;
