import {
  HeroSection,
  IntroductionSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  NewsSection,
  CounterSection
} from "./components";

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
    </section>
  );
};

export { LandingPage };