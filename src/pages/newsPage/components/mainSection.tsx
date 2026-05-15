import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NewsCard } from "../../../components";
import { ServicesImg } from "../../../assets";
import { Gallery } from "./gallery";
import { toSlug } from "../../../utils/utils";

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

const CARDS_PER_SLIDE = 6;

const MainSection = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(articles.length / CARDS_PER_SLIDE);

  const currentArticles = articles.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE,
  );

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/everything?q=("agriculture" OR "farmers" OR "fishery" OR "livestock" OR "agricultural" OR "food security")&language=en&sortBy=relevancy&apiKey=${apiKey}`,
        );
        setArticles(response.data.articles.slice(0, 36));
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey, baseUrl]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const headingRef = useRef<HTMLParagraphElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  // Set initial hidden states
  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current) return;
    gsap.set(headingRef.current, { opacity: 0, y: 40 });
    gsap.set(subheadingRef.current, { opacity: 0, y: 40 });
  }, []);

  // Animate heading/subheading when in view
  useEffect(() => {
    if (!inView || !headingRef.current || !subheadingRef.current) return;

    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.to(subheadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: 0.2,
    });
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full bg-green-bg px-10 py-10 lg:px-20 lg:py-14"
    >
      <p
        ref={headingRef}
        className="text-2xl lg:text-[3.125rem] font-bold text-white mt-12"
      >
        News & Media
      </p>
      <p
        ref={subheadingRef}
        className="mx-auto font-normal text-lg lg:text-xl text-white text-left"
      >
        Stay up to date with the latest news, events, milestones, and stories
        from Agbani Farms Limited. From training programme highlights to new
        product launches and community outreach activities, this is your window
        into the life and work of our farm.
      </p>

      <div className="py-10 flex flex-col gap-10 lg:py-24 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:justify-between lg:items-stretch">
        {loading && <p className="text-white col-span-3">Loading news...</p>}
        {error && <p className="text-red-400 col-span-3">{error}</p>}
        {!loading &&
          !error &&
          currentArticles.map((article, index) => (
            <NewsCard
              key={index}
              image={article.urlToImage || ServicesImg}
              title={article.title}
              date={new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              author={article.source.name}
              link={`/news/${toSlug(article.title)}`}
              article={article}
            />
          ))}
      </div>

      {/* Pagination controls */}
      {!loading && !error && totalSlides > 1 && (
        <div className="flex flex-col items-center gap-4 mt-4 mb-10">
          <div className="flex items-center gap-16">
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

          <div className="flex items-center mt-2 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 bg-primary-yellow"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="w-full">
        <p className="text-white text-2xl lg:text-[3.125rem] font-bold">
          Photo Gallery
        </p>
        <p className="text-white text-base lg:text-xl font-normal">
          Explore our photo gallery for a visual journey through the operations,
          people, and products of Agbani Farms Limited.
        </p>
      </div>
      <Gallery />
    </section>
  );
};

export { MainSection };
