import { FaCircleCheck } from "react-icons/fa6";
import { IntroBgImg, IntroSectionImg, IntroMoneyIcon } from "../../../assets";

const highlights = [
  "Empowering local hands to build sustainable livelihoods",
  "Nourishing communities with quality, locally-grown products",
  "Laying the groundwork for lasting national prosperity",
];

const IntroductionSection = () => {
  return (
    <div
      className="relative w-full bg-[#2D4A2F] px-10 py-14  flex flex-col-reverse overflow-hidden gap-20 lg:flex-row lg:px-20 lg:py-28 lg:items-center lg:justify-between lg:gap-0"
      style={{
        backgroundImage: `url('${IntroBgImg}')`,
        backgroundSize: "500px",
        backgroundPosition: "right 120%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#2D4A2F]/85 z-0" />

      <div className="relative z-10 lg:w-[50%]">
        <div className="relative lg:w-[80%]">
          <div className="absolute -left-3 bottom-6 h-56 w-24 bg-primary-yellow rounded-xl" />

          <div className="relative z-10">
            <img
              src={IntroSectionImg}
              alt="Farmer harvesting crops"
              className="w-full h-128 object-cover rounded-2xl lg:h-162.5"
            />

            <div className="absolute -bottom-12 left-10 right-10 bg-secondary-green/90 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center gap-4 divide-x-2 divide-white/50 lg:py-8">
              <img
                src={IntroMoneyIcon}
                alt="Money stack"
                className="h-12 pr-2"
              />
              <div className="pl-2">
                <p className="text-white text-xl font-bold font-vibur lg:font-4xl">50</p>
                <p className="text-white text-xs font-semibold tracking-wide lg:text-base">
                  Projects Successfully Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — Content */}
      <div className="relative z-10 w-full lg:w-1/2">
        <p className="text-white text-xl font-semibold uppercase mb-4">
          Introduction
        </p>

        <h2 className="text-white text-[2rem] lg:text-[3.125rem] font-extrabold leading-tight mb-6">
          More than a farm, we are an Ecosystem
        </h2>

        <p className="text-primary-yellow text-3xl font-semibold mb-4">
          Sowing the Seeds of Economic Growth
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          The growth of our agricultural sector fuels the nation's economy. We
          take this responsibility seriously, championing local food production
          and processing to create jobs, nourish communities, and build
          long-term prosperity.
        </p>

        <ul className="flex flex-col gap-4">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCircleCheck className="text-primary-yellow text-xl" />
              <p className="text-white text-xl font-semibold">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { IntroductionSection };
