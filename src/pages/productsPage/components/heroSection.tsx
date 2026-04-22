import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ProductServicesHeroBg } from "../../../assets";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
  if (!textRef.current || !inView) return; 

  const letters = textRef.current.querySelectorAll("span");

  const ctx = gsap.context(() => {
    gsap.fromTo(
      letters,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.09,
      }
    );
  }, textRef);

  return () => ctx.revert();
}, [inView]); 

  return (
    <section
      ref={ref}
      className="w-[inherit] min-h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: inView ? `url(${ProductServicesHeroBg})` : "none",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col gap-5 lg:flex-row justify-center items-center lg:w-[50%] text-primary-yellow">
        <p
          ref={textRef}
          className="font-bold text-[2.5rem] text-center lg:text-[4rem] lg:text-left"
        >
          {"Products".split("").map((letter, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {letter}
            </span>
          ))}
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