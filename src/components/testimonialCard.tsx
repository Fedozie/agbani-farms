interface TestimonialCardProps {
  backgroundImage: string;
  profileImage: string;
  name: string;
  description: string;
  testimonial: string;
}

import { useInView } from "react-intersection-observer";

const TestimonialCard = ({
  backgroundImage,
  profileImage,
  name,
  description,
  testimonial,
}: TestimonialCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="relative w-72 h-105 rounded-3xl shadow-lg border-2 border-transparent hover:border-primary-yellow hover:-translate-y-3 transition-all duration-300 ease-in-out overflow-hidden flex flex-col justify-end"
      style={{
        backgroundImage: inView ? `url('${backgroundImage}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White content card */}
      <div className="relative mx-3 mb-3 bg-white rounded-2xl px-6 pt-10 pb-8 flex flex-col items-center text-center">

        {/* Profile image */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-8 border-white">
          <img
            src={profileImage}
            alt={name}
            loading="lazy"
            className="w-16 h-full object-cover"
          />
        </div>

        <p className="text-[#1A1A1A] text-xl font-bold mb-1">{name}</p>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{testimonial}</p>
      </div>
    </div>
  );
};

export {TestimonialCard}