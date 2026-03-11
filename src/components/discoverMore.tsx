import { DiscoverMeLogo, StatementsBgImg } from "../assets";
import { Link } from "react-router-dom";

const DiscoverMore = () => {
  return (
    <div className="relative w-full bg-primary-yellow/40 lg:bg-primary-green py-10 px-10 lg:py-20 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #F8CC77, transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: `url(${StatementsBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
        <img src={DiscoverMeLogo} alt="Logo" loading="lazy" className="h-20" />
        <p className="text-[2.5rem] font-medium text-center text-text-green font-akronim italic lg:text-left">
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
