import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NewsCard } from "../../../components/newsCard";
import { ServicesImg, TopographyBg } from "../../../assets";

const news = [
  // Slide 1
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
  // Slide 2
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
  // Slide 3
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

  const totalSlides = Math.ceil(news.length / CARDS_PER_SLIDE);

  const currentNews = news.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE,
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  return (
    <div className="w-full flex flex-col">
      {/* Top half — dark green with background image overlay */}
      <div className="relative w-full bg-[#334B35] py-20 px-16 overflow-hidden">
        {/* Background image at reduced opacity */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url('${TopographyBg}')`,
            backgroundSize: "500px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="bg-[#263C28] h-1/2 w-full absolute top-0 left-0">
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <p className="text-white text-xl font-normal uppercase mb-4">
              From the Blog
            </p>
            <h2 className="text-white text-[3.125rem] font-bold">
              News & Articles
            </h2>
          </div>

          {/* Cards grid */}
          <div className="w-[70%] flex justify-between mx-auto gap-6">
            {currentNews.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                title={item.title}
                date={item.date}
                author={item.author}
                link={item.link}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex items-center gap-16 mb-10">
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

      {/* Bottom half — lighter green, partners */}
      <div className="w-full bg-[#3D5E3F] py-12 px-16 border-t border-primary-white/60">
        <p className="text-white/60 text-xl font-semibold tracking-[0.2em] uppercase text-center mb-10">
          Our Clients & Partners
        </p>

        <div className="flex items-center justify-between mx-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 opacity-60"
            >
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
      </div>
    </div>
  );
};

export { NewsSection };