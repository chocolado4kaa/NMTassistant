import { useParams } from "react-router";
import HeroSection from "~/src/Hero/HeroSection";
import Carousel from "~/src/Carousel/Carousel";
import Footer from "~/src/Footer/Footer";
import Subject from "~/src/Subject/subj";
import { subjectsData } from "~/src/Subject/subjectsData";
import type { Route } from "./+types/home"; // щоб типи для meta

export const meta = ({ params }: Route.MetaArgs) => {
  const subject = subjectsData[params.id as keyof typeof subjectsData];

  if (!subject) {
    return [
      { title: "NMT assistant — Предмет не знайдено" },
      { name: "description", content: "Предмет не знайдено. Перевірте посилання." },
    ];
  }

  return [
    { title: `NMT assistant — ${subject.name}` },
    { name: "description", content: subject.description },
  ];
};

export default function SubjectPage() {
  const { id } = useParams();
  const subject = subjectsData[id as keyof typeof subjectsData];

  if (!subject) {
    return (
      <main>
        <HeroSection>
          <h1>Предмет не знайдено</h1>
        </HeroSection>
      </main>
    );
  }

  return (
    <main>
      <HeroSection className={`subject ${id}`}>
        <h1>{subject.name}</h1>
      </HeroSection>
      <Subject {...subject} />
      <Carousel />
      <Footer />
    </main>
  );
}
