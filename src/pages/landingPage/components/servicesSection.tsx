import { Link } from "react-router-dom";
import {
  IntroBgImg,
  ServicesImg,
  DiscoverMeLogo,
  CropsIconLogo,
} from "../../../assets";

const services = [
  {
    icon: DiscoverMeLogo,
    title: "Cassava & Palm oil Processing",
    description:
      "Turning locally sourced cassava and palm fruits into high-quality, value-added products through efficient, sustainable processing",
  },
  {
    icon: CropsIconLogo,
    title: "Rice Farm & Processing",
    description:
      "Modern cultivation practices, post-harvest handling, milling, and storage.",
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse">
      <div className="w-full px-10 py-14 bg-[#5A7A4A] relative lg:w-1/2">
        <img
          src={ServicesImg}
          alt="Farmer working in the field"
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="flex justify-center items-center mt-10 lg:hidden">
          <Link
            to="/products-and-services"
            className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
          >
            Discover More
          </Link>
        </div>

        <div
          className="absolute inset-0 z-0 opacity-15 lg:hidden"
          style={{
            backgroundImage: `url('${IntroBgImg}')`,
            backgroundSize: "500px",
            backgroundPosition: "right 120%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative bg-[#5A7A4A] w-full flex flex-col justify-center px-10 py-14  overflow-hidden lg:w-1/2 lg:px-28 lg:py-20">
        {/* Background image at reduced opacity */}
        <div
          className="hidden lg:absolute lg:inset-0 lg:z-0 lg:opacity-15 lg:block"
          style={{
            backgroundImage: `url('${IntroBgImg}')`,
            backgroundSize: "500px",
            backgroundPosition: "right 120%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <p className="text-white text-xl text-center font-medium lg:font-normal uppercase mb-4 font-livvic lg:text-left">
            Modern Agricultural Services
          </p>

          <h2 className="text-white text-center text-[2.125rem] lg:text-[3.125rem] font-bold leading-tight mb-10 lg:text-left">
            Providing High Quality Services
          </h2>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:items-start">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="text-white text-xl text-center font-semibold mb-2 lg:text-left lg:text-2xl">
                      {service.title}
                    </p>
                    <p className="text-gray-200 text-sm text-center  font-normal leading-relaxed lg:text-lg lg:text-left">
                      {service.description}
                    </p>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:justify-start lg:items-start lg:mt-10 ">
            <Link
              to="/products-and-services"
              className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServicesSection };
