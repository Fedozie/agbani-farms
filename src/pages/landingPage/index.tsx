import {
  HeroSection,
  IntroductionSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  NewsSection
} from "./components";

const LandingPage = () => {
  return (
    <section>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection/>
    </section>
  );
};

export { LandingPage };