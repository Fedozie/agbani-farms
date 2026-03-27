import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatementsBgImg } from "../../../assets";

interface DigitsProps {
  digit: number;
  text: string;
  additive: boolean;
  hashtag: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const CounterSection = () => {
  const numberData = [
    {
      digit: 5,
      text: "Agricultural Value Chains",
      additive: true,
      hashtag: false,
    },
    {
      digit: 100,
      text: "Employees & Local Beneficiaries",
      additive: false,
      hashtag: false,
    },
    {
      digit: 1,
      text: "Fish Farm in South-East Nigeria",
      additive: false,
      hashtag: true,
    },
    {
      digit: 15,
      text: "Years of Agri-business Excellence",
      additive: true,
      hashtag: false,
    },
  ];

  return (
    <div className="relative w-full bg-primary-yellow/90 p-10 lg:p-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${StatementsBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-full">
        <p className="uppercase text-center lg:text-xl font-medium">
          Why choose us
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-0 mt-10">
        {numberData.map((number, index) => (
          <div key={index}>
            <Digit
              digit={number.digit}
              additive={number.additive}
              text={number.text}
              hashtag={number.hashtag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CounterSection };

const Digit = ({ digit, additive, hashtag, text }: DigitsProps) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const counter = { value: 0 };

    const anim = gsap.to(counter, {
      value: digit,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=100",
        toggleActions: "play none none reset",
      },
      onUpdate: () => {
        el.textContent = Math.round(counter.value).toString();
      },
    });

    return () => {
      anim.kill(); // cleanup on unmount
    };
  }, [digit]);

  return (
    <div>
      <p className="block text-center font-abhaya text-[6rem] font-bold leading-[1.85]">
        {hashtag ? "#" : ""}
        <span ref={numberRef}>0</span>
        {additive ? "+" : ""}
      </p>
      <p className="block text-center text-2xl -mt-8 lg:-mt-4">{text}</p>
    </div>
  );
};
