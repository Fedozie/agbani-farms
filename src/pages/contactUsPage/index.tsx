import { HeroSection, CardsSection, MainSection} from "./components";
import { DiscoverMore } from "../../components";


const ContactUsPage = () => {
  return (
    <section>
      <HeroSection/>
      <CardsSection/>
      <MainSection/>
      <DiscoverMore
        heading="Ready to Partner?"
        text="Whether you are a hospital seeking quality food supply, a farmer seeking training, an investor exploring agribusiness opportunities, or a food buyer looking for reliable produce; Agbani Farms is your partner of choice."
      />
    </section>
  );
};

export { ContactUsPage };