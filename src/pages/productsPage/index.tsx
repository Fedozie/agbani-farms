import { HeroSection, MainSection } from "./components";
import { DiscoverMore } from "../../components";

const ProductsPage = () => {
  return (
    <section>
      <HeroSection />
      <MainSection />
      <DiscoverMore 
        heading="How to Order"
        text="To place an order or enquire about product availability, pricing, and delivery options, please contact us via phone, email, or our online contact form. Bulk and institutional orders are welcome. We also accept standing orders for regular supply."
      />
    </section>
  );
};

export { ProductsPage };