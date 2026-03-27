import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UnderlineImg, LeafIcon } from "../../../assets";
import landingHeroOne from "../../../assets/landingHeroOne.png";
import landingHeroTwo from "../../../assets/landingHeroTwo.png";

const heroImages = [landingHeroOne, landingHeroTwo];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 px-4 py-20 w-full flex flex-col items-center lg:w-[50%] lg:px-20 lg:items-start">
        <div className="relative w-fit flex flex-col items-left gap-2 mb-5 lg:mb-2">
          <p className="text-primary-white text-[1.5625rem] font-semibold tracking-wide text-center">
            Welcome to
          </p>
          <img
            src={UnderlineImg}
            alt="Underline Image"
            className="absolute -bottom-2 w-56"
          />
        </div>

        <div className=" flex items-start gap-3 mb-4">
          <h1 className="relative text-primary-yellow text-[2.5rem] lg:text-7xl font-bold leading-tight">
            Agbani Farms
            <img
              src={LeafIcon}
              alt="Leaf Icon"
              className="absolute h-12 -top-7 -right-7 lg:-right-5 lg:-top-5"
            />
          </h1>
        </div>

        <p className="hidden text-white text-xl font-medium font-livvic mb-8 lg:text-left lg:block">
          Your trusted partner in integrated agriculture, premium
          <br /> food production, and agribusiness development across <br />{" "}
          Nigeria.
        </p>

        <p className=" text-white text-lg font-medium font-livvic mb-8 text-center lg:text-left lg:hidden">
          Your trusted partner in integrated <br /> agriculture, premium food{" "}
          <br />
          production, and agribusiness <br /> development across Nigeria.
        </p>

        <Link
          to="/about-us"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export { HeroSection };
