import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ProductServicesHeroBg } from "../../../assets";
import { useInView } from "react-intersection-observer";

const HeroSection = ({ ready = true }: { ready?: boolean }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const letters = textRef.current.querySelectorAll("span");
    gsap.set(letters, { opacity: 0, y: 40 });
  }, []);

  useEffect(() => {
    if (!textRef.current || !inView || !ready) return;

    const letters = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.09,
      });
    }, textRef);

    return () => ctx.revert();
  }, [inView, ready]);

  return (
    <section
      ref={ref}
      className="w-[inherit] min-h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: inView ? `url(${ProductServicesHeroBg})` : "none",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:w-[50%] text-primary-yellow">
        <p
          ref={textRef}
          className="font-bold text-[2.5rem] text-center lg:text-[4rem] lg:text-left"
        >
          {"Services".split("").map((letter, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {letter}
            </span>
          ))}
        </p>
        <p className="block text-center text-white font-normal text-lg lg:hidden">
          At Agbani Farms Limited, we offer a comprehensive range of
          agricultural services spanning the entire food production and
          agribusiness value chain. Our services are designed to meet the
          diverse needs of individuals, businesses, institutions, and
          communities, whether you are looking for fresh farm produce, technical
          expertise, or agribusiness education.
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
