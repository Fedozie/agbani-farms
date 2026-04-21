import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  author: string;
  link: string;
}

const NewsCard = ({ image, title, date, author, link }: NewsCardProps) => {
  const truncateTitle = (title: string) => {
    if (title.length <= 40) {
      return title;
    }
    return title.substring(0, 40) + "...";
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-[#263C28] w-full h-100 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-3 border-2 border-transparent hover:border-primary-yellow group">
      {/* Image container */}
      <div className="relative shrink-0 h-[60%]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Date badge */}
        <div className="absolute bottom-0 right-0 bg-primary-yellow text-[#1A1A1A] text-sm font-medium px-4 py-2 rounded-tl-lg">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Author */}
        <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
          <FaRegUser className="text-base" />
          <span>by {author}</span>
        </div>

        <p className="text-white text-lg font-bold leading-snug mb-4 flex-1 line-clamp-3">
          {truncateTitle(title)}
        </p>

        <Link
          to={link}
          className="flex items-center gap-2 text-primary-yellow text-sm font-medium hover:gap-4 transition-all duration-300 mt-auto"
        >
          Explore <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export { NewsCard };
