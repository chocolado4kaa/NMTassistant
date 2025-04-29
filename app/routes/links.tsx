import type { Route } from "./+types/home";
import HeroSection from "~/src/Hero/HeroSection";
import Footer from "~/src/Footer/Footer";
import LinksSection from "~/src/Links/LinksSection";

export const meta = ({}: Route.MetaArgs) => {
    return [
      { title: "NMT assistant --- links" },
      { name: "links", content: "Welcome!" },
    ];
  }
  
  export default function Links_page() {
    return(
      <main>
      <HeroSection className="no-bg">
      <h1>Корисні посилання</h1>
      </HeroSection>
      <LinksSection />
      <Footer />
      </main>
    )
  }