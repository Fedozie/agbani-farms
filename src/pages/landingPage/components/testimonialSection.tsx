import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TestimonialCard } from "../../../components/testimonialCard";
import { ServicesImg } from "../../../assets";

const testimonials = [
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Mrs. Grace Okonkwo",
    description: "Customer",
    testimonial:
      "Before Agbani Farms, sourcing quality produce in the quantities we needed was a constant struggle. Now, we have a partner who delivers",
  },
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Chief Innocent Nweze",
    description: "Customer",
    testimonial:
      "Agbani Farms has done something remarkable, they've made farming attractive again to young people.",
  },
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Dr. Adaobi Eze",
    description: "Partner",
    testimonial:
      "They've proven that sustainability and productivity can go hand in hand.",
  },
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Mr. Emeka Obi",
    description: "Investor",
    testimonial:
      "Investing in Agbani Farms was one of the best decisions I've made. Their commitment to excellence is unmatched.",
  },
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Mrs. Ngozi Adeleke",
    description: "Customer",
    testimonial:
      "The quality of produce from Agbani Farms is consistently outstanding. They have truly set a new standard.",
  },
  {
    backgroundImage: ServicesImg,
    profileImage: ServicesImg,
    name: "Prof. Chidi Okafor",
    description: "Partner",
    testimonial:
      "Agbani Farms represents the future of African agriculture — sustainable, innovative, and deeply community-focused.",
  },
];

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () =>
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const nextSlide = () =>
    setStartIndex((prev) => (prev + 1) % testimonials.length);

  // Always grab 3 cards starting from startIndex, wrapping around
  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(startIndex + offset) % testimonials.length]
  );

  return (
    <div className="relative w-full bg-[#3D5E3F] py-32 px-10 overflow-hidden lg:py-20">
      <div className="absolute top-0 right-0 w-10 lg:w-20 h-40 rounded-bl-md bg-accent-green"></div>
      <div className="absolute top-28 -right-2 lg:right-8 w-20 h-20 rounded-md bg-accent-white"></div>

      <div className="absolute top-0 left-0 w-10 lg:w-20 h-40 rounded-br-md bg-accent-green"></div>
      <div className="absolute top-28 -left-4 lg:left-8 w-20 h-20 rounded-md bg-accent-white"></div>

      <div className="flex flex-col items-center mb-16" id="testimonials">
        <p className="text-white text-base lg:text-xl font-normal uppercase mb-4">
          Our Testimonials
        </p>
        <h2 className="text-white text-3xl lg:text-[3.125rem] font-bold text-center">
          What Customers are Talking About
        </h2>
      </div>

      
      <div className="relative w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <button
          onClick={prevSlide}
          className="absolute -bottom-20 lg:top-1/2 left-10 lg:-left-4 z-10 w-12 h-12 rounded-full bg-primary-yellow text-[#1A1A1A] flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 cursor-pointer shadow-lg"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={startIndex + index}
            className="transition-all duration-300"
          >
            <TestimonialCard
              backgroundImage={testimonial.backgroundImage}
              profileImage={testimonial.profileImage}
              name={testimonial.name}
              description={testimonial.description}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute -bottom-20 lg:top-1/2 right-10 lg:-right-4 z-10 w-12 h-12 rounded-full bg-primary-yellow text-[#1A1A1A] flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 cursor-pointer shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export { TestimonialsSection };