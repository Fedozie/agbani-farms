import { ProductStyle, ServicesImg } from "../../../assets";

const MainSection = () => {
  return (
    <section className="bg-green-bg px-20">
      <div className=" py-32 flex justify-between items-center gap-8 max-md:mb-32 lg:gap-10">
        <div className="relative w-64 h-64 lg:w-108 lg:h-108 shrink-0 isolate">
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
        <div className="w-[50%]">
          <p className="font-bold text-[3.125rem] md:text-4xl lg:text-5xl text-primary-white mb-6">
            Cultivating a New Legacy for Nigerian Agriculture
          </p>
          <p className="text-primary-white font-normal text-xl md:text-lg leading-relaxed">
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