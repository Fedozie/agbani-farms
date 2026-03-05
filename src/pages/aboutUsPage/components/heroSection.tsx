import { AboutUsHeroBg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-[inherit] h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: `url(${AboutUsHeroBg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center items-center lg:w-[50%] text-primary-yellow">
        <p className="font-bold text-[2.5rem] lg:text-[4rem]">About Us</p>
      </div>
    </section>
  );
};

export { HeroSection };
