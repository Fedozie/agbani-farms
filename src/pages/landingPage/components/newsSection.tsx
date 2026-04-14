import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NewsCard } from "../../../components/newsCard";
import { ServicesImg, TopographyBg } from "../../../assets";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const news = [
  {
    image: ServicesImg,
    title: "Taking seamless key indicators offline to",
    date: "4th March, 2026",
    author: "Punch News",
    link: "/news/seamless-key-indicators",
  },
  {
    image: ServicesImg,
    title: "Override the digital divide with additional",
    date: "4th March, 2026",
    author: "Arise News",
    link: "/news/digital-divide",
  },
  {
    image: ServicesImg,
    title: "Agriculture Matters to the Future of next",
    date: "4th March, 2026",
    author: "Agrobank",
    link: "/news/agriculture-matters",
  },
  {
    image: ServicesImg,
    title: "How Sustainable Farming is Reshaping Rural Economies",
    date: "4th March, 2026",
    author: "Punch News",
    link: "/news/sustainable-farming",
  },
  {
    image: ServicesImg,
    title: "The Rise of Agripreneurs in South East Nigeria",
    date: "4th March, 2026",
    author: "Arise News",
    link: "/news/agripreneurs",
  },
  {
    image: ServicesImg,
    title: "Food Security and the Role of Local Farmers",
    date: "4th March, 2026",
    author: "Agrobank",
    link: "/news/food-security",
  },
  {
    image: ServicesImg,
    title: "Cassava Processing: A New Era of Value Addition",
    date: "4th March, 2026",
    author: "Punch News",
    link: "/news/cassava-processing",
  },
  {
    image: ServicesImg,
    title: "Modern Irrigation Techniques Transforming Dry Season Farming",
    date: "4th March, 2026",
    author: "Arise News",
    link: "/news/irrigation-techniques",
  },
  {
    image: ServicesImg,
    title: "Youth in Agriculture: Building the Next Generation of Farmers",
    date: "4th March, 2026",
    author: "Agrobank",
    link: "/news/youth-agriculture",
  },
];

const partners = ["Figma", "Figma", "Figma", "Figma", "Figma", "Figma"];

const CARDS_PER_SLIDE = 3;

const NewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef(null);
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const hasAnimated = useRef(false);

  const totalSlides = Math.ceil(news.length / CARDS_PER_SLIDE);

  const currentNews = news.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const animateCards = (items) => {
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        clearProps: "transform",
      }
    );
  };

  // Scroll animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        // Headings
        gsap.fromTo(
          [subheadingRef.current, headingRef.current],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
          }
        );

        // Cards
        gsap.fromTo(
          cardRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.2,
          }
        );

        hasAnimated.current = true;
      },
    });

    return () => trigger.kill();
  }, []);

  // Slide animation
  useEffect(() => {
    if (!hasAnimated.current) return;

    const items = cardRefs.current;
    animateCards(items);
  }, [currentSlide]);

  return (
    <div className="w-full flex flex-col">
      {/* Top Section */}
      <div
        ref={sectionRef}
        className="relative w-full bg-green-bg px-10 py-10 lg:py-20 lg:px-16 overflow-hidden"
      >
        <div className="bg-[#263C28] h-1/2 w-full absolute top-0 left-0 z-0"></div>

        <div
          className="absolute inset-0 z-1 opacity-10"
          style={{
            backgroundImage: `url('${TopographyBg}')`,
            backgroundSize: "500px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <p
              ref={subheadingRef}
              style={{ opacity: 0 }}
              className="text-white text-base font-normal uppercase mb-4 lg:text-xl"
            >
              From the Blog
            </p>

            <h2
              ref={headingRef}
              style={{ opacity: 0 }}
              className="text-white text-3xl lg:text-[3.125rem] font-bold"
            >
              News & Articles
            </h2>
          </div>

          {/* Cards */}
          <div className="w-[80%] lg:w-[70%] flex flex-col items-center gap-6 lg:flex-row mx-auto">
            {(() => {
              cardRefs.current = [];

              return currentNews.map((item, index) => (
                <div
                  key={index}
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <NewsCard {...item} />
                </div>
              ));
            })()}
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex items-center gap-16 mb-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300
                  ${
                    index === currentSlide
                      ? "w-6 bg-primary-yellow"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#3D5E3F] py-10 px-10 lg:py-12 lg:px-16 border-t border-primary-white/60">
        <p className="text-white/60 text-base lg:text-xl font-semibold tracking-[0.2em] uppercase text-center mb-10">
          Our Clients & Partners
        </p>

        <div className="hidden lg:flex lg:items-center lg:justify-between lg:mx-24">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 opacity-60">
              <img
                src={ServicesImg}
                alt={partner}
                className="w-6 h-6 object-contain grayscale"
              />
              <span className="text-white font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between items-center py-4 lg:hidden">
          <Marquee speed={100}>
            {partners.map((_, index) => (
              <img
                key={index}
                src={ServicesImg}
                alt="Partner logo"
                className="mr-24"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export { NewsSection };