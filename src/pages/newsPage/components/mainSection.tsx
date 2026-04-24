import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { NewsCard } from "../../../components";
import { ServicesImg } from "../../../assets";
import { Gallery } from "./gallery";

const MainSection = () => {
  const newsData = [
    {
      image: ServicesImg,
      title: "Taking seamless key indicators offline to",
      date: "4th March, 2026",
      author: "Punch News",
      link: "/news/seamless-key-indicators",
    },
    {
      image: ServicesImg,
      title: "Enugu State Moves to Fund Agro Companies in Youth Empowerment Drive",
      date: "4th March, 2026",
      author: "Arise News",
      link: "/news/enugu-agro-fund",
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
      title: "Taking seamless key indicators offline to",
      date: "4th March, 2026",
      author: "Punch News",
      link: "/news/seamless-key-indicators-2",
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
      link: "/news/agriculture-matters-2",
    },
    {
      image: ServicesImg,
      title: "Taking seamless key indicators offline to",
      date: "4th March, 2026",
      author: "Punch News",
      link: "/news/seamless-key-indicators-3",
    },
    {
      image: ServicesImg,
      title: "Override the digital divide with additional",
      date: "4th March, 2026",
      author: "Arise News",
      link: "/news/digital-divide-2",
    },
    {
      image: ServicesImg,
      title: "Agriculture Matters to the Future of next",
      date: "4th March, 2026",
      author: "Agrobank",
      link: "/news/agriculture-matters-3",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const headingRef = useRef<HTMLParagraphElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const COLS = 3;

  // Set initial hidden states on mount
  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current || !gridRef.current) return;

    gsap.set(headingRef.current, { opacity: 0, y: 40 });
    gsap.set(subheadingRef.current, { opacity: 0, y: 40 });

    const cards = Array.from(gridRef.current.children);
    cards.forEach((card, index) => {
      const row = Math.floor(index / COLS);
      const fromLeft = row % 2 === 0;
      gsap.set(card, { opacity: 0, x: fromLeft ? -500 : 500 });
    });
  }, []);

  // Animate when in view
  useEffect(() => {
    if (!inView || !headingRef.current || !subheadingRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
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

      const cards = Array.from(gridRef.current!.children);
      const totalRows = Math.ceil(cards.length / COLS);

      for (let row = 0; row < totalRows; row++) {
        const rowCards = cards.slice(row * COLS, row * COLS + COLS);

        gsap.to(rowCards, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "expo.in",
          delay: 0.5 + row * 0.35,
        });
      }
    });

    return () => ctx.revert();
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-green-bg px-10 py-10 lg:px-20 lg:py-14">
      <p
        ref={headingRef}
        className="text-2xl lg:text-[3.125rem] font-bold text-white mt-12"
      >
        News & Media
      </p>
      <p
        ref={subheadingRef}
        className="mx-auto font-normal text-lg lg:text-xl text-primary-white text-left"
      >
        Stay up to date with the latest news, events, milestones, and stories
        from Agbani Farms Limited. From training programme highlights to new
        product launches and community outreach activities, this is your window
        into the life and work of our farm.
      </p>
      <div
        ref={gridRef}
        className="py-10 flex flex-col gap-10 lg:py-24 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:justify-between lg:items-center"
      >
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      <div className="w-full">
        <p className="text-white text-2xl lg:text-[3.125rem] font-bold">Photo Gallery</p>
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