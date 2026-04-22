import { HeroSection, MainSection } from "./components";
import { DiscoverMore, PageFade } from "../../components";

const NewsPage = ({ ready }: { ready?: boolean }) => {
  return (
    <PageFade>
      <section>
        <HeroSection ready={ready} />
        <MainSection />
        <DiscoverMore
          heading="Media Coverage"
          text="Agbani Farms Limited has been featured in a number of media publications, agricultural journals, and broadcast programmes. We welcome media enquiries from journalists, documentary makers, and content creators. For media enquiries, interview requests, or press information, please contact our communications team"
        />
      </section>
    </PageFade>
  );
};

export { NewsPage };
