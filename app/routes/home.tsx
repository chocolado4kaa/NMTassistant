import type { Route } from "./+types/home";
import HeroSection from "~/src/Hero/HeroSection";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Your personal NMT assistant" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  return(
    <main>
    <HeroSection />
    </main>
  )
}
