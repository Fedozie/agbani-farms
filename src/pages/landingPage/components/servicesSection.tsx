import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IntroBgImg,
  ServicesImg,
  CropsIconLogo,
  FishFarmingIcon,
  LiveStockIcon,
  ProcessingIcon,
  TrainingIcon,
} from "../../../assets";
import { TransitionLink } from "../../../components";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FishFarmingIcon,
    title: "Fish Farming",
    description:
      "One of South East Nigeria's largest fish farming operations with modern ponds and a full hatchery.",
  },
  {
    icon: LiveStockIcon,
    title: "Livestock Production",
    description:
      "Raising poultry, piggery, and other livestock under best-practice farm management.",
  },
  {
    icon: CropsIconLogo,
    title: "Crop Cultivation",
    description:
      "Cultivating a wide range of food and cash crops using modern, sustainable methods.",
  },
  {
    icon: ProcessingIcon,
    title: "Process & Value Addition",
    description:
      "On-site processing and packaging facilities to deliver farm-fresh products to market.",
  },
  {
    icon: TrainingIcon,
    title: "Training & Consultancy",
    description:
      "World-class agribusiness training and expert consultancy for farmers and investors.",
  },
];

const ServicesSection = () => {
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const serviceImgRef = useRef<HTMLImageElement | null>(null);

  const { ref, inView } = useInView({ triggerOnce: true });


  useEffect(() => {
    const items = serviceItemsRef.current.filter(Boolean);

    // Set initial state — hidden and shifted right
    gsap.set(items, { opacity: 0, x: 80 });

    gsap.to(items, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.25, // each item fades in 0.25s after the previous
      scrollTrigger: {
        trigger: items[0], // start when first item enters viewport
        start: "top 80%", // fires when top of first item is 80% down the viewport
        once: true, // never re-triggers — no fade-out on scroll away
      },
    });

    gsap.set(serviceImgRef.current, { opacity: 0, x: -80 });
    gsap.to(serviceImgRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: serviceImgRef.current,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row">
      <div className="w-full px-10 py-14 bg-[#5A7A4A] relative lg:w-1/2">
        <img
          src={ServicesImg}
          alt="Farmer working in the field"
          className="rounded-xl w-full h-full object-cover"
          loading="lazy"
          ref={serviceImgRef}
        />
        <div className="flex justify-center items-center mt-10 lg:hidden">
          <TransitionLink
            to="/products-and-services"
            className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
          >
            Discover More
          </TransitionLink>
        </div>

        <div
        ref={ref}
          className="absolute inset-0 z-0 opacity-15 lg:hidden"
          style={{
            backgroundImage: inView ? `url('${IntroBgImg}')` : "none",
            backgroundSize: "500px",
            backgroundPosition: "right 120%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative bg-[#5A7A4A] w-full flex flex-col justify-center px-10 py-14 overflow-hidden lg:w-1/2 lg:px-20 lg:py-20">
        {/* Background image at reduced opacity */}
        <div
          className="hidden lg:absolute lg:inset-0 lg:z-0 lg:opacity-15 lg:block"
          style={{
            backgroundImage: inView ? `url('${IntroBgImg}')` : "none",
            backgroundSize: "500px",
            backgroundPosition: "right 120%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <p className="w-full text-white text-xl text-center font-medium lg:font-normal uppercase mb-4 font-livvic lg:text-left">
            What we do
          </p>

          <h2 className="text-white text-center text-[1.8rem] lg:text-[3.125rem] font-bold leading-tight mb-10 lg:text-left">
            An Integrated Agricultural Enterprise
          </h2>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  serviceItemsRef.current[index] = el;
                }}
              >
                <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:items-start">
                  <img
                    src={service.icon}
                    alt={service.title}
                    loading="lazy"
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="text-white text-xl text-center font-semibold mb-2 lg:text-left lg:text-2xl">
                      {service.title}
                    </p>
                    <p className="text-gray-200 text-sm text-center font-normal leading-relaxed lg:text-lg lg:text-left">
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

          <div className="hidden lg:flex lg:justify-start lg:items-start lg:mt-10">
            <TransitionLink
              to="/about-us"
              className="inline-block bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
            >
              Discover More
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServicesSection };
