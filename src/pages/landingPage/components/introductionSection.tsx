
import { IntroBgImg, IntroSectionImg, IntroMoneyIcon } from "../../../assets";

const IntroductionSection = () => {
  return (
    <div
      className="relative w-full bg-[#2D4A2F] px-10 py-14  flex flex-col-reverse overflow-hidden gap-20 lg:flex-row lg:px-20 lg:py-28 lg:items-center lg:justify-between lg:gap-0"
      style={{
        backgroundImage: `url('${IntroBgImg}')`,
        backgroundSize: "500px",
        // backgroundPosition: "right 120%",
        backgroundPosition: "bottom right",
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

            <div className="absolute -bottom-12 left-5 right-5  bg-secondary-green/90 backdrop-blur-sm rounded-xl px-4 py-4 flex items-center gap-4 divide-x-2 divide-white/50 lg:left-10 lg:right-10 lg:py-8 lg:px-6">
              <img
                src={IntroMoneyIcon}
                alt="Money stack"
                className="h-12 pr-2"
              />
              <div className="pl-2">
                <p className="text-white text-xl font-bold font-vibur lg:text-4xl">
                  50
                </p>
                <p className="text-white text-xs font-medium tracking-wide lg:text-base">
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
          Rooted in the Heart of Enugu. Feeding a <br /> Nation.
        </h2>

        <p className="text-white text-lg leading-relaxed mb-8">
          Agbani Farms Limited is a leading integrated agricultural enterprise
          situated in Agbani, the headquarters of Nkanu West Local Government
          Area in Enugu State, Nigeria. Nestled in one of the most fertile and
          historically productive farming communities in South-East Nigeria, we
          have built a world-class agribusiness that touches every major
          agricultural value chain from the soil to the table.
          <br /> <br />
          We are more than a farm. We are an ecosystem of food production,
          innovation, employment, and knowledge-sharing, driven by a passion for
          sustainable agriculture and a commitment to feeding Nigeria from
          within its own borders.
        </p>
      </div>
    </div>
  );
};

export { IntroductionSection };
