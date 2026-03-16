import {
  ProductProcessor,
  ProductForestry,
  ProductLivestock,
  ProductStyle
} from "../../../assets";

type ProductProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  reverse?: boolean;
};

const MainSection = () => {
  const products = [
    {
      imageSrc: ProductProcessor,
      title: "Production & Processing",
      description:
        "We offer comprehensive production and processing services designed to take agricultural projects from concept to completion. From land preparation, planting, and crop management to harvesting and post-harvest handling, we manage every stage with precision and care. Our processing facilities transform raw produce into high-quality, market-ready products, whether for local consumption, industrial use, or export. Built on sustainability and scalability, our service model empowers farmers, agribusinesses, and partners to focus on growth while we handle the complexities of production and processing.",
      reverse: true,
    },
    {
      imageSrc: ProductLivestock,
      title: "Crops & Livestock",
      description:
        "At Agbani Farms, we believe that what we grow and raise tells the story of the land itself. Our fields yield a rich tapestry of crops, vibrant vegetables, and high-value cash crops, each cultivated with a deep respect for soil health and natural cycles. Alongside them, our livestock graze and thrive under humane, ethical care, becoming part of a balanced system where animals and crops work in harmony.",
      reverse: false,
    },
    {
      imageSrc: ProductForestry,
      title: "Agroforestry",
      description:
        "Drive through the rolling hills of Enugu, and you'll see land that has fed generations, red earth, open skies, and the quiet strength of the East. At Agbani Farms, we are bringing back what time has slowly taken away. Through agroforestry, we are weaving native trees back into our farmland; udara, ukwa, and oil bean standing tall alongside cassava, yam, and vegetables.",
      reverse: true,
    },
  ];

  return (
    <div className=" bg-green-bg lg:py-16 lg:px-56 divide-y divide-primary-yellow">
      {products.map((product, index) => (
        <Product
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          description={product.description}
          reverse={product.reverse}
        />
      ))}
    </div>
  );
};

export { MainSection };

export const Product = ({
  imageSrc,
  imageAlt = "Service image",
  title,
  description,
  reverse = false,
}: ProductProps) => {
  return (
    <div
      className={`bg-green-bg px-10 pt-16 lg:py-32 flex justify-between items-center gap-8 lg:gap-10 ${
        reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-[50%]">
        <p className="font-bold text-2xl md:text-4xl lg:text-[3.125rem] text-primary-white mb-6">
          {title}
        </p>
        <p className="text-primary-white font-normal text-base mb-6 md:text-lg leading-relaxed lg:mb-0">
          {description}
        </p>
      </div>
      <div className="relative w-64 h-64 mb-10 lg:w-108 lg:h-108 shrink-0 isolate">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full rounded-xl object-cover"
        />
        <img
          src={ProductStyle}
          alt={imageAlt}
          className="absolute -top-10 -left-10 -z-2 w-full h-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};
