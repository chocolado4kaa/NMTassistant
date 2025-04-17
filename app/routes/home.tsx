import type { Route } from "./+types/home";
import HeroSection from "~/src/Hero/HeroSection";
import Advantages from "~/src/Advantages/Advantages";
import Carousel from "~/src/LinksSection/Carousel";

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
    <Advantages />
    <Carousel />
    </main>
  )
}
