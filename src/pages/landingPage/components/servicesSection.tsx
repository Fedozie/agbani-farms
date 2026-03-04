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
    <div className="w-full flex min-h-screen">
      <div className="w-1/2">
        <img
          src={ServicesImg}
          alt="Farmer working in the field"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-1/2 bg-[#5A7A4A] flex flex-col justify-center px-16 py-20 overflow-hidden">

        {/* Background image at reduced opacity */}
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `url('${IntroBgImg}')`,
            backgroundSize: "500px",
            backgroundPosition: "right 120%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <p className="text-white text-xl font-normal uppercase mb-4 font-livvic">
            Modern Agricultural Services
          </p>

          <h2 className="text-white text-[3.125rem] font-bold leading-tight mb-10">
            Providing High Quality Services
          </h2>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 py-8">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="text-white text-2xl font-semibold mb-2">
                      {service.title}
                    </p>
                    <p className="text-gray-200 text-lg font-normal leading-relaxed">
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

          <div className="mt-10">
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