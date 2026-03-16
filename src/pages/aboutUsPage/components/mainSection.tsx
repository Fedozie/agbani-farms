import { ProductStyle, ServicesImg } from "../../../assets";

const MainSection = () => {
  return (
    <section className="bg-green-bg px-10 lg:px-20">
      <div className="py-16 lg:py-32 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-10">
        <div className="relative w-64 h-64 lg:w-108 lg:h-108 shrink-0 isolate mt-10 lg:mt-0">
          <img
            src={ServicesImg}
            alt="Image of About Us"
            className="w-full h-full rounded-xl object-cover"
          />
          <img
            src={ProductStyle}
            alt="Background style"
            className="absolute -top-10 -left-10 -z-2 w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-3xl lg:text-[3.125rem] text-primary-white mb-6">
            Cultivating a New Legacy for Nigerian Agriculture
          </p>
          <p className="text-primary-white font-normal text-sm md:text-lg lg:text-xl leading-relaxed">
            In the heart of Enugu, amidst the red soil and rolling hills of the
            East, Agbani Farms is building something that lasts. We are a new
            generation of farmers, rooted in tradition, yet driven by
            innovation. <br />
            <br />
            At Agbani Farms, we are not just growing food. We are growing hope,
            opportunity, and a future where agriculture leads the way.Every seed
            planted, every tree restored, every farmer empowered is a step
            toward a stronger, more resilient Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export { MainSection };