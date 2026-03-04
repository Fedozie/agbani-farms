import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ProjectCard } from "../../../components";
import { ServicesImg, ProjectSectionBg } from "../../../assets";

const projects = [
  // Slide 1
  {
    image: ServicesImg,
    title:
      "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu",
  },
  {
    image: ServicesImg,
    title:
      "The Agbani Out-Grower Scheme: Empowering Farmers, Strengthening Communities",
    date: "4th March, 2026",
    link: "/projects/agbani-out-grower",
  },
  {
    image: ServicesImg,
    title:
      "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu-2",
  },
  {
    image: ServicesImg,
    title:
      "AGROFEST Enugu: Empowering youth and Agripreneurs in the South East",
    date: "4th March, 2026",
    link: "/projects/agrofest-enugu-3",
  },
  // Slide 2
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
  // Slide 3
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

  const totalSlides = Math.ceil(projects.length / CARDS_PER_SLIDE);

  const currentProjects = projects.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE,
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  return (
    <div className="relative w-full bg-[#2D4A2F] py-20 px-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('${ProjectSectionBg}')`,
          backgroundSize: "500px",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-12">
          <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Recently Completed Work
          </p>
          <h2 className="text-white text-5xl font-extrabold">
            Explore Our Projects
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-300`}
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
          {/* Arrows */}
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

          {/* Dot indicators */}
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
