import { TransitionLink } from "../../../components/transitionLink";

type Product = {
  id: number;
  name: string;
  description: string;
};

type MainCardProps = {
  title: string;
  cardImage: string;
  products: Product[];
};

const MainSection = () => {
  const productsArray = [
    {
      title: "Fish & Aquaculture Products",
      cardImage: "",
      products: [
        {
          id: 1,
          name: "Fresh Catfish (Live & Iced)",
          description:
            "Freshly harvested catfish available live, fresh-chilled, or iced for immediate purchase. Sizes range from table-size (500g–1kg) to jumbo (2kg+). Available for retail, wholesale, and institutional orders.",
        },
        {
          id: 2,
          name: "Smoked Catfish",
          description:
            "Traditionally and mechanically smoked catfish with an extended shelf life. Ideal for households, restaurants, and market sellers. Available in various pack sizes.",
        },
        {
          id: 3,
          name: "Dried Fish",
          description:
            "Sun-dried and oven-dried fish processed on-site. A pantry staple for Nigerian cuisine, available in bulk and retail packs.",
        },
        {
          id: 4,
          name: "Fresh Tilapia",
          description:
            "Farm-raised tilapia known for its mild flavour and firm flesh. Available fresh or iced for household and food service buyers.",
        },
        {
          id: 5,
          name: "Fish Fingerlings & Juveniles",
          description:
            "Healthy, disease-free catfish and tilapia fingerlings produced in our hatchery for sale to other fish farmers. Available in batches by prior arrangement.",
        },
      ],
    },
    {
      title: "Livestock & Poultry Products",
      cardImage: "",
      products: [
        {
          id: 1,
          name: "Live & Dressed Broilers",
          description:
            "Farm-raised broiler chickens available live or dressed (cleaned and packaged). Raised on quality feed with no illegal growth promoters.",
        },
        {
          id: 2,
          name: "Fresh Eggs (Table Eggs)",
          description:
            "Fresh, graded eggs from our layer poultry unit. Available daily in trays (30 eggs) or bulk quantities for households, caterers, and retailers.",
        },
        {
          id: 3,
          name: "Live Pigs & Pork",
          description:
            "Well-nourished pigs raised on a balanced diet, available live for buyers or as processed pork cuts by arrangement.",
        },
        {
          id: 4,
          name: "Goats & Rams",
          description:
            "Quality small ruminants for household consumption, festive occasions, and livestock restocking. Available year-round with seasonal peaks.",
        },
      ],
    },
    {
      title: "Crop & Processed Products",
      cardImage: "",
      products: [
        {
          id: 1,
          name: "Garri (White & Yellow)",
          description:
            "Premium cassava-derived garri, processed on-site and available in retail and wholesale packs. Consistently coarse, well-dried, and mould-free.",
        },
        {
          id: 2,
          name: "Cassava Starch",
          description:
            "Industrial and food-grade cassava starch produced from fresh cassava. Available for food manufacturers, bakeries, and export buyers.",
        },
        {
          id: 3,
          name: "Fresh Maize & Maize Flour",
          description:
            "Freshly harvested maize and milled flour for household cooking and animal feed production.",
        },
        {
          id: 4,
          name: "Fresh Vegetables",
          description:
            "Seasonal leafy and fruiting vegetables grown on the farm, including ugwu (fluted pumpkin), okra, pepper, and tomatoes.",
        },
        {
          id: 5,
          name: "Yam & Plantain",
          description:
            "Fresh yam tubers and plantain bunches, cultivated on the farm and available for direct purchase and bulk supply.",
        },
      ],
    },
  ];

  return (
    <section className="bg-green-bg w-full lg:px-20 lg:py-14">
      <div>
        <p className="hidden lg:block lg:text-center lg:text-white lg:text-[3.125rem] lg:font-bold">
          Our Products
        </p>
        <p className="hidden lg:block lg:text-center lg:text-white lg:text-xl">
          At Agbani Farms Limited, everything we produce is grown, raised, or
          processed with care, quality, and your health in mind. From our fish
          ponds to our crop fields and livestock units, we are committed to
          delivering farm-fresh products that are safe, nutritious, and
          responsibly produced.
        </p>
      </div>
      <section className="pt-20 pb-10 divide-y-2 divide-primary-yellow">
        {productsArray.map((products, index) => (
          <MainCard
            key={index}
            title={products.title}
            cardImage={products.cardImage}
            products={products.products}
          />
        ))}
      </section>
    </section>
  );
};

export { MainSection };

export const MainCard = ({ title, cardImage, products }: MainCardProps) => {
  return (
    <section className="min-h-screen px-6 py-8 pb-16">
      <h1 className="text-white text-3xl md:text-4xl lg:text-[3.125rem] font-bold mb-8 tracking-tight">
        {title}
      </h1>

      <div className="w-full h-64 md:h-72 lg:h-128 bg-gray-200 rounded-xl mb-10 overflow-hidden">
        <img
          src={cardImage}
          alt="Product's Image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        {products.map((product) => (
          <div key={product.id} className={`py-6 `}>
            <h2
              className={`text-lg md:text-xl lg:text-3xl font-semibold mb-2 transition-colors duration-200 text-primary-yellow`}
            >
              {product.name}
            </h2>
            <p className="text-white text-sm md:text-base lg:text-xl leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <TransitionLink
          to="/contact-us"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Order Now
        </TransitionLink>
      </div>
    </section>
  );
};
