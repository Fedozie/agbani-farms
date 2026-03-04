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

      <div className="relative z-10 px-16 py-20 max-w-xl">
        <div className="relative w-fit flex flex-col items-left gap-2 mb-2">
          <p className="text-primary-white text-[1.5625rem] font-semibold tracking-wide text-center">
            Welcome to
          </p>
          <img
            src={UnderlineImg}
            alt="Underline Image"
            className="absolute -bottom-2 w-56"
          />
        </div>

        <div className="relative flex items-start gap-3 mb-4">
          <h1 className="text-primary-yellow text-6xl font-bold leading-tight">
            Agbani Farms
          </h1>
          <img
            src={LeafIcon}
            alt="Leaf Icon"
            className="absolute h-12 -top-5 right-12"
          />
        </div>

        <p className="text-white text-base font-normal leading-relaxed mb-8">
          Pioneering a new standard in agriculture, where sustainable practices
          meet economic viability to create a positive impact on the environment
          and the economy, from soil to market.
        </p>

        <Link
          to="/products-and-services"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export { HeroSection };
