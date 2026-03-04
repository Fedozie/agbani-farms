import { DiscoverMeLogo } from "../assets";

const DiscoverMore = () => {
  return (
    <div
      className="relative w-full bg-primary-green py-16 px-32 flex justify-between items-center"
      style={{
        backgroundImage: `url('/assets/backgroundImage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #F8CC77, transparent)",
        }}
      />

      <div className="relative z-10 flex flex-row items-center gap-10">
        <img src={DiscoverMeLogo} alt="Logo" loading="lazy" className="h-20" />
        <p className="text-[2.5rem] font-normal text-text-green">
          We are a Leader in the Agriculture Market
        </p>
      </div>
      <div className="relative z-10">
        <button className="bg-primary-yellow text-[#1A1A1A] px-6 py-3 rounded-md cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-transparent">
          Discover More
        </button>
      </div>
    </div>
  );
};

export { DiscoverMore };
