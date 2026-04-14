import { IoIosCheckmarkCircle } from "react-icons/io";

import {
  ProductProcessor,
  ProductForestry,
  ProductLivestock,
  ProductStyle,
} from "../../../assets";

type ProductProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string[];
  descriptionThree?: string;
  reverse?: boolean;
};

const MainSection = () => {
  const products = [
    {
      imageSrc: ProductProcessor,
      title: "Fish Farming & Aquaculture",
      descriptionOne:
        "Agbani Farms houses one of the largest and most advanced fish farming operations in South-East Nigeria.",
      descriptionTwo: [
        "Modern tarpaulin ponds and earthen ponds for large-scale catfish and tilapia production",
        "A fully functional hatchery system for fingerling and juvenile production",
        "Fish processing facilities including smoking, drying, and packaging",
        "A biosecure, disease-monitored environment for optimal fish health and growth",
        "Supply of fresh, smoked, and processed fish to markets, restaurants, hospitals, and institutions",
        "Supply of fresh, smoked, and processed fish to markets, restaurants, hospitals, and institutions",
      ],
      descriptionThree:
        "Our fish farming operations produce thousands of kilograms of catfish and other species per cycle, meeting demand across Enugu State and beyond.",
      reverse: true,
    },
    {
      imageSrc: ProductLivestock,
      title: "Livestock Production",
      descriptionOne:
        "Our livestock division manages a diverse range of animals under professionally supervised care, including:",
      descriptionTwo: [
        "Poultry farming (broilers and layers): Producing both table birds and fresh eggs",
        "Piggery: Rearing high-quality pigs for pork production and live sales",
        "Small ruminants: Goats and sheep for meat, breeding stock, and market supply",
      ],
      descriptionThree:
        "All livestock are raised following best-practice biosecurity protocols, with access to veterinary oversight and quality feed formulation.",
      reverse: false,
    },
    {
      imageSrc: ProductForestry,
      title: "Crop Cultivation",
      descriptionOne:
        "Agbani Farms cultivates a wide variety of food and cash crops using modern, sustainable farming techniques. Our crop production includes:",
      descriptionTwo: [
        "Staple food crops: Maize, cassava, yam, plantain, and vegetables",
        "Cash crops: Groundnuts, soybeans, and other market-oriented produce",
        "Year-round cultivation enabled by irrigation infrastructure and proper soil management",
        "Integrated pest management and soil health monitoring for maximum yield and quality",
      ],
      descriptionThree:
        "All livestock are raised following best-practice biosecurity protocols, with access to veterinary oversight and quality feed formulation.",
      reverse: true,
    },
    {
      imageSrc: ProductProcessor,
      title: "Processing & Value Addition",
      descriptionOne:
        "We go beyond primary production. Our on-site processing facilities enable us to add value to our produce before it reaches the end consumer, including:",
      descriptionTwo: [
        "Fish processing: Smoking, drying, freezing, and retail packaging",
        "Crop processing: Cassava into garri and starch; maize into flour; soybeans into oil and cake",
        "Poultry processing: Dressed and packaged birds for institutional and retail supply",
        "Cold chain and storage management to ensure freshness and reduce post-harvest losses",
      ],
      descriptionThree: "",
      reverse: false,
    },
    {
      imageSrc: ProductProcessor,
      title: "Agri-business Training",
      descriptionOne:
        "Agbani Farms is committed to building the capacity of farmers, youth, and agri-entrepreneurs across Nigeria. Our training programmes cover:",
      descriptionTwo: [
        "Practical fish farming and aquaculture management",
        "Livestock production and veterinary management basics",
        "Crop production, irrigation, and post-harvest management",
        "Farm business planning, record-keeping, and profitability management",
        "Agricultural cooperative formation and management",
        "Youth and women empowerment through agribusiness",
      ],
      descriptionThree:
        "Training is delivered through hands-on, farm-based workshops, short courses, and certificate programmes. We offer both residential and non-residential training options.",
      reverse: true,
    },
    {
      imageSrc: ProductProcessor,
      title: "Agribusiness Consultancy",
      descriptionOne:
        "Our team of experienced agricultural professionals offers expert consultancy services to individuals, companies, government agencies, NGOs, and international organisations. Services include:",
      descriptionTwo: [
        "Farm establishment, design, and layout planning",
        "Feasibility studies and agricultural business plan development",
        "Value chain analysis and agribusiness investment advisory",
        "Policy, regulatory, and grant application support",
        "Monitoring and evaluation for agricultural projects",
      ],
      descriptionThree: "",
      reverse: false,
    },
    {
      imageSrc: ProductProcessor,
      title: "Institutional & Corporate Supply",
      descriptionOne:
        "We supply fresh and processed farm produce to a wide range of institutional clients including:",
      descriptionTwo: [
        "Hospitals and healthcare institutions",
        "Hotels, restaurants, and catering companies",
        "Schools and universities",
        "Government agencies and corporate organisations",
        "Supermarkets and food retail outlets",
      ],
      descriptionThree:
        "We offer supply agreements, standing orders, and bulk supply contracts with guaranteed quality, food safety standards, and reliable delivery.",
      reverse: true,
    },
  ];

  return (
    <section className="bg-green-bg w-full">
      <div className="text-center text-white w-[80%] mx-auto pt-10">
        <p className="hidden text-[3.125rem] font-bold lg:block">Our Services</p>
        <p className="hidden text-xl font-normal lg:block">
          At Agbani Farms Limited, we offer a comprehensive range of
          agricultural services spanning the entire food production and
          agribusiness value chain. Our services are designed to meet the
          diverse needs of individuals, businesses, institutions, and
          communities, whether you are looking for fresh farm produce, technical
          expertise, or agribusiness education.
        </p>
      </div>
      <div className="lg:px-28 divide-y divide-primary-yellow">
        {products.map((product, index) => (
          <Product
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            descriptionOne={product.descriptionOne}
            descriptionTwo={product.descriptionTwo}
            descriptionThree={product.descriptionThree}
            reverse={product.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export { MainSection };

export const Product = ({
  imageSrc,
  imageAlt = "Service image",
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  reverse = false,
}: ProductProps) => {
  return (
    <section>
      <div
        className={`bg-green-bg px-10 pt-16 lg:py-32 flex justify-between items-center gap-8 lg:gap-10 ${
          reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
        }`}
      >
        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-2xl md:text-4xl lg:text-[3.125rem] text-primary-white mb-6">
            {title}
          </p>
          <p className="text-primary-white font-normal text-base mb-6 md:text-lg lg:text-xl leading-relaxed lg:mb-0">
            {descriptionOne}
          </p>
          <div className="my-5">
            {descriptionTwo.map((description, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-center gap-4 "
              >
                <IoIosCheckmarkCircle size={32} color="#F7C35F" />
                <p className="w-full text-base md:text-lg lg:text-xl text-white my-2">{description}</p>
              </div>
            ))}
          </div>

          <p className="text-primary-white font-normal text-base mb-6 md:text-lg lg:text-xl leading-relaxed lg:mb-0">
            {descriptionThree}
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
    </section>
  );
};
