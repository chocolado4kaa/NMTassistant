import type { Route } from "./+types/home";
import HeroSection from "~/src/Hero/HeroSection";
import Footer from "~/src/Footer/Footer";
import AboutUs from "~/src/AboutUs/AboutUs";

export const meta = ({}: Route.MetaArgs) => {
    return [
      { title: "NMT assistant --- About Us" },
      { name: "aboutUs", content: "Welcome!" },
    ];
  }
  
  export default function AboutUs_page() {
    return(
      <main>
      <HeroSection className="aboutUs">
      <h1>Про нас</h1>
      </HeroSection>
      <AboutUs/>
      <Footer />
      </main>
    )
  }