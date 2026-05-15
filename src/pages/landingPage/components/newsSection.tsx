import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NewsCard } from "../../../components/newsCard";
import { ServicesImg, TopographyBg } from "../../../assets";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toSlug } from "../../../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const partners = ["Figma", "Figma", "Figma", "Figma", "Figma", "Figma"];

const CARDS_PER_SLIDE = 3;

type NewsSource = {
  id: string | null;
  name: string;
};

type Article = {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

const NewsSection = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef(null);
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  const partnersSectionRef = useRef(null);
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalSlides = Math.ceil(articles.length / CARDS_PER_SLIDE);

  const currentArticles = articles.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE,
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const animateCards = () => {
    const items = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!items.length) return;

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
      },
    );
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/everything?q=("agriculture" OR "farmers" OR "fishery" OR "livestock" OR "agricultural" OR "food security" AND Nigeria)&language=en&sortBy=relevancy&apiKey=${apiKey}`,
        );
        setArticles(response.data.articles.slice(0, 9));
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey, baseUrl]);

  // News section scroll animation — fires once on enter
  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          [subheadingRef.current, headingRef.current],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
          },
        );

        animateCards();
        hasAnimated.current = true;
      },
    });

    return () => trigger.kill();
  }, []);

  // Partners fade-in animation (large screen only)
  useEffect(() => {
    if (!partnersSectionRef.current) return;

    const items = partnerRefs.current.filter(Boolean);
    if (!items.length) return;

    const trigger = ScrollTrigger.create({
      trigger: partnersSectionRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          items,
          { opacity: 0 },
          {
            opacity: 0.6,
            duration: 2,
            ease: "power2.out",
            stagger: 0.12,
          },
        );
      },
    });

    return () => trigger.kill();
  }, []);

  // Re-animate cards on slide change
  useEffect(() => {
    if (!hasAnimated.current) return;
    // setTimeout gives React one tick to attach the new refs to the DOM
    const timeout = setTimeout(animateCards, 0);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="w-full flex flex-col">
      {/* Top Section */}
      <div
        ref={sectionRef}
        className="relative w-full bg-green-bg px-10 py-10 lg:py-20 lg:px-16 overflow-hidden"
      >
        <div className="bg-[#263C28] h-1/2 w-full absolute top-0 left-0 z-0 max-[648px]:bg-transparent"></div>

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

          <div className="w-[70%] mx-auto flex flex-col gap-10  lg:grid lg:grid-cols-3 lg:gap-x-6  lg:items-stretch">
            {loading && (
              <p className="text-white col-span-3">Loading news...</p>
            )}
            {error && <p className="text-red-400 col-span-3">{error}</p>}
            {!loading &&
              !error &&
              currentArticles.map((article, index) => (
                <div
                  key={index}
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    cardRefs.current[index] = el; // just overwrite the slot, no reset needed
                  }}
                >
                  <NewsCard
                    key={index}
                    image={article.urlToImage || ServicesImg}
                    title={article.title}
                    date={new Date(article.publishedAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                    author={article.source.name}
                    link={`/news/${toSlug(article.title)}`}
                    article={article}
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex items-center gap-16 mb-10">
              <button
                onClick={prevSlide}
                className="cursor-pointer w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="cursor-pointer w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300"
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
                  ${index === currentSlide ? "w-6 bg-primary-yellow" : "w-2 bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        ref={partnersSectionRef}
        className="w-full bg-[#3D5E3F] py-10 px-10 lg:py-12 lg:px-16 border-t border-primary-white/60"
      >
        <p className="text-white/60 text-base lg:text-xl font-semibold tracking-[0.2em] uppercase text-center mb-10">
          Our Clients & Partners
        </p>

        {/* Large screen — GSAP animated */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:mx-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              style={{ opacity: 0 }}
              ref={(el) => {
                partnerRefs.current[index] = el;
              }}
              className="flex items-center gap-2"
            >
              <img
                src={ServicesImg}
                alt={partner}
                loading="lazy"
                className="w-6 h-6 object-contain grayscale"
              />
              <span className="text-white font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile — Marquee, untouched */}
        <div className="w-full flex justify-between items-center py-4 lg:hidden">
          <Marquee speed={50}>
            {partners.map((_, index) => (
              <img
                key={index}
                src={ServicesImg}
                alt="Partner logo"
                loading="lazy"
                className="w-6 h-6 object-contain grayscale mr-24"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export { NewsSection };
