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
      title:
        "Enugu State Moves to Fund Agro Companies in Youth Empowerment Drive",
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

  return (
    <section className="w-full bg-green-bg lg:px-20 lg:py-14">
      <p className="text-2xl lg:text-[3.125rem] font-bold text-white mt-12">News & Media</p>
      <p className=" mx-auto font-normal text-lg lg:text-xl text-primary-white text-left">
        Stay up to date with the latest news, events, milestones, and stories from Agbani Farms Limited. From training programme highlights to new product launches and community outreach activities, this is your window into the life and work of our farm.
      </p>
      <div className="py-10 flex flex-col gap-10 lg:py-24 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:justify-between lg:items-center">
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      <div className="w-full ">
        <p className="text-white text-[3.125rem] font-bold">Photo Gallery</p>
        <p className="text-white text-xl font-normal">
          Explore our photo gallery for a visual journey through the operations,
          people, and products of Agbani Farms Limited.
        </p>
      </div>
      <Gallery/>
    </section>
  );
};

export { MainSection };
