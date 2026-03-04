import { DiscoverMeLogo } from "../assets";
import { Link } from "react-router-dom";

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
        <Link
          to="/"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export { DiscoverMore };
