import { ContactUsHeroBg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: `url(${ContactUsHeroBg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center items-center lg:w-[50%] text-primary-yellow">
        <p className="font-bold text-[2.5rem] lg:text-[4rem]">Contact Us</p>
      </div>
    </section>
  );
};

export { HeroSection };
