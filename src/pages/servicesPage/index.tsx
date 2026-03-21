import { HeroSection, MainSection } from "./components";
import { DiscoverMore } from "../../components";

const ServicesPage = () => {
  return (
    <section>
      <HeroSection />
      <MainSection />
      <DiscoverMore
        heading="Ready to Partner?"
        text="Whether you are a hospital seeking quality food supply, a farmer seeking training, an investor exploring agribusiness opportunities, or a food buyer looking for reliable produce; Agbani Farms is your partner of choice."
      />
    </section>
  );
};

export { ServicesPage };
