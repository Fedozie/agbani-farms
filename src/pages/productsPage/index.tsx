import { HeroSection, MainSection } from "./components";
import { DiscoverMore, PageFade } from "../../components";

const ProductsPage = () => {
  return (
    <PageFade>
      <section>
        <HeroSection />
        <MainSection />
        <DiscoverMore
          heading="How to Order"
          text="To place an order or enquire about product availability, pricing, and delivery options, please contact us via phone, email, or our online contact form. Bulk and institutional orders are welcome. We also accept standing orders for regular supply."
        />
      </section>
    </PageFade>
  );
};

export { ProductsPage };
