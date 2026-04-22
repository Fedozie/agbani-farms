import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ContactUsHeroBg } from "../../../assets";
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
      className="w-full h-[90vh] bg-cover flex justify-center items-center overflow-x-hidden px-10 bg-[#000000a5] bg-blend-overlay mx-auto lg:px-20"
      style={{
        backgroundImage: inView ? `url(${ContactUsHeroBg})` : "none",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center items-center lg:w-[50%] text-primary-yellow">
        <p
          ref={textRef}
          className="font-bold text-[2.5rem] lg:text-[4rem]"
        >
          {"Contact Us".split("").map((letter, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export { HeroSection };