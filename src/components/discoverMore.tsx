import { StatementsBgImg } from "../assets";
import { Link } from "react-router-dom";

const DiscoverMore = () => {
  return (
    <div className="relative w-full bg-primary-yellow/40 lg:bg-primary-green py-10 px-10 lg:py-20 lg:px-32 flex flex-col lg:flex-col lg:gap-10 justify-between items-center">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, #553901, transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${StatementsBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="z-10">
        <p className="text-white font-bold text-[3.125rem]">Ready to Partner?</p>
      </div>

      <div className="w-[60%] z-10">
        <p className="text-white font-medium text-center text-xl">
          Whether you are a hospital seeking quality food supply, a farmer
          seeking training, an investor exploring agribusiness opportunities, or
          a food buyer looking for reliable produce; Agbani Farms is your
          partner of choice.
        </p>
      </div>

      <div className="relative z-10">
        <Link
          to="/"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export { DiscoverMore };
