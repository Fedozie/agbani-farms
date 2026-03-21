import { ProductServicesHeroBg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-[inherit] min-h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: `url(${ProductServicesHeroBg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:w-[50%] text-primary-yellow">
        <p className="font-bold text-[2.5rem] text-center lg:text-[4rem] lg:text-left">
          Services
        </p>
        <p className="block text-center text-white font-normal text-lg lg:hidden">
          At Agbani Farms Limited, we offer a comprehensive range of
          agricultural services spanning the entire food production and
          agribusiness value chain. Our services are designed to meet the
          diverse needs of individuals, businesses, institutions, and
          communities, whether you are looking for fresh farm produce, technical
          expertise, or agribusiness education.
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
