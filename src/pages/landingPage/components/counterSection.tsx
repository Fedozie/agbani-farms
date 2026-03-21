// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatementsBgImg } from "../../../assets";

const CounterSection = () => {
  return (
    <div className="relative w-full bg-primary-yellow/90 p-12">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${StatementsBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-full">
        <p className="uppercase text-center lg:text-xl font-medium">Why choose us</p>
      </div>
    </div>
  );
};

export { CounterSection };
