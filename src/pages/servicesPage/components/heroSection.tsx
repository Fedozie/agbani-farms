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
      <div className="w-full flex justify-center items-center lg:w-[50%] text-primary-yellow">
        <p className="font-bold text-[2.5rem] text-center lg:text-[4rem] lg:text-left">
          Services
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
