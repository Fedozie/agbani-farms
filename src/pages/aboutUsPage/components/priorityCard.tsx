type PriorityCardProps = {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
};

const PriorityCard = ({
  image,
  title,
  description,
  reverse = false,
}: PriorityCardProps) => {
  return (
    <div
      className={`relative isolate bg-transparent flex items-center ${reverse ? "justify-start" : "justify-end"}`}
    >
      <img
        src={image}
        alt="Image"
        loading="lazy"
        className={`rounded-2xl absolute -z-10 w-auto h-[70%] ${reverse ? "right-0 justify-self-start" : "left-0 justify-self-end"}`}
      />
      <div className="h-60 w-[70%] px-4 py-6 bg-[#263C28] border-primary-yellow border rounded-2xl">
        <p className="text-primary-yellow text-2xl font-semibold mb-4">
          {title}
        </p>
        <p className="text-white text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export { PriorityCard };
