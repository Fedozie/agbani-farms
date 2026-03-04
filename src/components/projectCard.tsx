import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

const ProjectCard = ({ image, title, date, link }: ProjectCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#263C28] w-80 h-96 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-3 border-2 border-transparent hover:border-primary-yellow group">
      {/* Image container */}
      <div className="relative shrink-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Date badge */}
        <div className="absolute bottom-4 right-4 bg-primary-yellow text-[#1A1A1A] text-sm font-medium px-4 py-2 rounded-lg">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-white text-xl font-bold leading-snug mb-4 flex-1 line-clamp-3">
          {title}
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

export { ProjectCard };
