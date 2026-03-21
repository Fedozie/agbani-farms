import {
  HeroSection,
  IntroductionSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  NewsSection,
  CounterSection
} from "./components";
import { DiscoverMore } from "../../components";

const LandingPage = () => {
  return (
    <section>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <CounterSection/>
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection/>
      <DiscoverMore
        heading="Ready to Partner?"
        text="Whether you are a hospital seeking quality food supply, a farmer seeking training, an investor exploring agribusiness opportunities, or a food buyer looking for reliable produce; Agbani Farms is your partner of choice."
      />
    </section>
  );
};

export { LandingPage };