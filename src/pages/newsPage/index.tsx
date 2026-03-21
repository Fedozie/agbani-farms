import { HeroSection, MainSection } from "./components";
import { DiscoverMore } from "../../components";

const NewsPage = () => {
  return (
    <section>
      <HeroSection />
      <MainSection />
      <DiscoverMore
        heading="Media Coverage"
        text="Agbani Farms Limited has been featured in a number of media publications, agricultural journals, and broadcast programmes. We welcome media enquiries from journalists, documentary makers, and content creators. For media enquiries, interview requests, or press information, please contact our communications team"
      />
    </section>
  );
};

export { NewsPage };
