import {
  HeroSection,
  MainSection,
  Statement,
  PriorityCard,
} from "./components";
import { SlTarget } from "react-icons/sl";
import { BsFillEyeFill } from "react-icons/bs";
import {
  StatementsBgImg,
  PriorityImage1,
  PriorityImage2,
  PriorityImage3,
} from "../../assets";

const AboutUsPage = () => {
  const statements = [
    {
      image: <SlTarget size={40} color="#F7C35F" />,
      title: "Our Mission",
      description:
        "To build a sustainable agricultural ecosystem in Enugu and beyond, one that restores the land, empowers local communities, and delivers quality food through ethical farming, innovative processing, and a deep respect for nature.",
    },
    {
      image: <BsFillEyeFill size={40} color="#F7C35F" />,
      title: "Our Vision",
      description:
        "To redefine Nigerian agriculture by proving that farming can heal the earth, feed the nation, and create lasting prosperity, starting from the hills of the East and spreading across Africa.",
    },
  ];

  const priorities = [
    {
      image: PriorityImage1,
      title: "Land Restoration & Environmental Stewardship",
      description:
        "We aim to regenerate degraded soil and combat erosion across Enugu's farmland through agroforestry, crop rotation, and organic farming practices.",
    },
    {
      image: PriorityImage2,
      title: "Food Security & Local Production",
      description:
        "Agbani Farms would increase local food production to reduce reliance on imported agricultural products and stabilize food supply chains in the South-East and beyond.",
    },
    {
      image: PriorityImage3,
      title: "Community Empowerment & Job Creation",
      description:
        "We aim to regenerate degraded soil and combat erosion across Enugu's farmland through agroforestry, crop rotation, and organic farming practices.",
    },
    {
      image: PriorityImage1,
      title: "Biodiversity & Native Species Preservation",
      description:
        "Agbani Farms would increase local food production to reduce reliance on imported agricultural products and stabilize food supply chains in the South-East and beyond.",
    },
    {
      image: PriorityImage2,
      title: "Innovation & Scalability",
      description:
        "We aim to regenerate degraded soil and combat erosion across Enugu's farmland through agroforestry, crop rotation, and organic farming practices.",
    },
    {
      image: PriorityImage3,
      title: "Economic Impact & National Development",
      description:
        "We aim to position Agbani Farms as a model for how agriculture can drive Nigeria's economic diversification and long-term prosperity.",
    },
  ];

  return (
    <section>
      <HeroSection />
      <MainSection />
      <section className="relative p-20 w-[inherit] flex justify-between gap-20 bg-accent-green overflow-x-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${StatementsBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 flex justify-between gap-24 w-full">
          {statements.map((statement, index) => (
            <Statement
              key={index}
              image={statement.image}
              title={statement.title}
              description={statement.description}
            />
          ))}
        </div>
      </section>
      <section className="bg-green-bg px-20 py-20 w-[inherit] flex flex-col items-center gap-10">
        <p className="text-white text-[3.125rem] font-bold text-center py-10">
          Our Priorities
        </p>
        <div className="w-full grid grid-cols-2 gap-x-8 gap-y-16">
          {priorities.map((priority, index) => (
            <div className="flex">
              <PriorityCard
                key={index}
                image={priority.image}
                title={priority.title}
                description={priority.description}
                reverse={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export { AboutUsPage };
