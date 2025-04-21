import type { Route } from "./+types/home";
import HeroSection from "~/src/Hero/HeroSection";
import Footer from "~/src/Footer/Footer";
import Subjects from "~/src/Subjects/Subjects";
import TitleSection from "~/src/Title/TitleSection";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "NMT assistant --- Subjects" },
    { name: "subjects", content: "Welcome!" },
  ];
};

export default function Subjects_page() {
  return (
    <main>
      <TitleSection>Предмети</TitleSection>
      <Subjects />
      <Footer />
    </main>
  );
}
