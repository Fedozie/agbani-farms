import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ProjectCard } from "../../../components";
import { ServicesImg, ProjectSectionBg } from "../../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: ServicesImg,
    title: "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu",
  },
  {
    image: ServicesImg,
    title: "The Agbani Out-Grower Scheme: Empowering Farmers, Strengthening Communities",
    date: "4th March, 2026",
    link: "/projects/agbani-out-grower",
  },
  {
    image: ServicesImg,
    title: "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu-2",
  },
  {
    image: ServicesImg,
    title: "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu-3",
  },
  {
    image: ServicesImg,
    title: "Modern Rice Cultivation: Post-Harvest Handling and Milling",
    date: "4th March, 2026",
    link: "/projects/rice-cultivation",
  },
  {
    image: ServicesImg,
    title: "Cassava Processing Plant: Delivering Value-Added Products",
    date: "4th March, 2026",
    link: "/projects/cassava-processing",
  },
  {
    image: ServicesImg,
    title: "Palm Oil Extraction: Sustainable and Efficient Processing",
    date: "4th March, 2026",
    link: "/projects/palm-oil",
  },
  {
    image: ServicesImg,
    title: "Greenhouse Farming: Controlled Environment Agriculture",
    date: "4th March, 2026",
    link: "/projects/greenhouse",
  },
  {
    image: ServicesImg,
    title: "Community Farming Initiative: Building Local Food Systems",
    date: "4th March, 2026",
    link: "/projects/community-farming",
  },
  {
    image: ServicesImg,
    title: "Irrigation Development: Water Management for Dry Season Farming",
    date: "4th March, 2026",
    link: "/projects/irrigation",
  },
  {
    image: ServicesImg,
    title: "Youth Agripreneur Program: Training the Next Generation",
    date: "4th March, 2026",
    link: "/projects/youth-program",
  },
  {
    image: ServicesImg,
    title: "Export-Ready Produce: Meeting International Quality Standards",
    date: "4th March, 2026",
    link: "/projects/export-produce",
  },
];

const CARDS_PER_SLIDE = 4;

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);  
  const hasAnimated = useRef(false);

  const { ref, inView } = useInView({ triggerOnce: true });

  const totalSlides = Math.ceil(projects.length / CARDS_PER_SLIDE);

  const currentProjects = projects.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const animateCards = (items: HTMLDivElement[]) => {
    gsap.fromTo(
      items,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        clearProps: "transform",
      }
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        // 1. Animate headings first, staggered between them
        gsap.fromTo(
          [subheadingRef.current, headingRef.current],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            clearProps: "transform",
          }
        );

        // 2. Cards animate shortly after the headings start
        gsap.fromTo(
          cardRefs.current.filter(Boolean),
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.18,
            delay: 0.3, // 👈 gives headings a head start
            clearProps: "transform",
          }
        );

        hasAnimated.current = true;
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!hasAnimated.current) return;
    const timeout = setTimeout(() => {
      const items = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      animateCards(items);
    }, 0);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#2D4A2F] p-10 lg:py-20 lg:px-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-10"
        ref={ref}
        style={{
          backgroundImage: inView ? `url('${ProjectSectionBg}')` : "none",
          backgroundSize: "500px",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-12">
          <p
            ref={subheadingRef}
            style={{ opacity: 0 }} // 👈
            className="text-white text-base lg:text-xl font-normal uppercase mb-4"
          >
            Recently Completed Work
          </p>
          <h2
            ref={headingRef}
            style={{ opacity: 0 }} // 👈
            className="text-white text-3xl lg:text-[3.125rem] font-bold mb-4"
          >
            Explore Our Projects
          </h2>
        </div>

        <div className="grid gap-6 mb-12 lg:grid-cols-4">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              style={{ opacity: 0 }}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                date={project.date}
                link={project.link}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-16 m-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer
                  ${index === currentSlide ? "w-6 bg-primary-yellow" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectsSection };