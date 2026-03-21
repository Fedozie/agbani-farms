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
      <div className="w-full flex flex-col gap-5 lg:flex-row justify-center items-center lg:w-[50%] text-primary-yellow">
        <p className="font-bold text-[2.5rem] text-center lg:text-[4rem] lg:text-left">
          Products
        </p>
        <p className="text-center text-white text-lg lg:hidden">
          At Agbani Farms Limited, everything we produce is grown, raised, or
          processed with care, quality, and your health in mind. From our fish
          ponds to our crop fields and livestock units, we are committed to
          delivering farm-fresh products that are safe, nutritious, and
          responsibly produced.
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
