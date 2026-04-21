import { StatementsBgImg } from "../assets";
import { TransitionLink } from "./transitionLink";
import { useInView } from "react-intersection-observer";

interface CTAProps  {
  heading: string;
  text: string;
}

const DiscoverMore = ({heading, text}: CTAProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="relative w-full bg-primary-green py-10 px-10 lg:py-20 lg:px-32 flex flex-col lg:flex-col lg:gap-8 justify-between items-center">
      <div
        className="absolute inset-0"
        ref={ref}
        style={{
          background: "linear-gradient(to left, #553901, transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: inView ? `url(${StatementsBgImg})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="z-10">
        <p className="text-white font-bold text-center text-[2rem] lg:text-[3.125rem]">{heading}</p>
      </div>

      <div className="w-full lg:w-[60%] z-10 py-10 lg:py-0">
        <p className="text-white font-medium text-center text-xl">
          {text}
        </p>
      </div>

      <div className="relative z-10">
        <TransitionLink
          to="/contact-us"
          className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Contact Us
        </TransitionLink>
      </div>
    </div>
  );
};

export { DiscoverMore };
