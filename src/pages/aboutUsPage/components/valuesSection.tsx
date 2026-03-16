const ValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in everything we do. From the quality of our produce, to the professionalism of our team. Excellence is not a destination; it is our daily practice.",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and accountability in all our dealings with customers, partners, communities, and regulators.",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern agricultural technologies, research-driven practices, and creative thinking to solve today's food production challenges and anticipate tomorrow's.",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to responsible land use, environmental stewardship, and the long-term health of the ecosystems we operate within.",
    },
    {
      title: "Community",
      description:
        "Agbani is our home. We invest in the people, livelihoods, and development of our community, because when the community thrives, so do we.",
    },
    {
      title: "Customer Focus",
      description:
        "Our customers, whether a hospital, a household, or a hospitality business; are at the centre of every decision we make. We deliver quality they can trust.",
    },
  ];

  return (
    <section className="w-full bg-green-bg px-10 py-8 lg:px-20 lg:py-16">
      <div className="w-full">
        <p className="text-white uppercase text-center lg:text-xl">
          Our core values
        </p>
      </div>
      <div className="w-full">
        <p className="text-white text-center lg:text-[3.125rem] font-bold">
          What Sets Us Apart
        </p>
      </div>

      <div className="w-[80%] grid lg:grid-cols-3 gap-10 mx-auto my-10">
        {values.map((value, index) => (
          <div key={index} className="h-full">
            <ValueCard
              index={index}
              title={value.title}
              value={value.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ValuesSection };

interface ValueCardProps {
  index: number;
  title: string;
  value: string;
}

export const ValueCard = ({ index, title, value }: ValueCardProps) => {
  return (
    <div className="bg-[#263C28] px-8 py-16 relative rounded-2xl h-full">
      <div className="bg-[#2F5730] w-16 h-16 rounded-full ml-5 absolute z-5"></div>
      <p className="text-primary-yellow font-bold text-[2.5rem] z-10 relative mb-4">
        0{index + 1}
      </p>
      <p className="text-primary-yellow font-semibold text-2xl mb-4">{title}</p>
      <p className="text-white">{value}</p>
    </div>
  );
};