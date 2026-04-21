type PriorityCardMblProps = {
  image: string;
  title: string;
  description: string;
};

const PriorityCardMbl = ({
  image,
  title,
  description,

}: PriorityCardMblProps) => {
  return (
    <div
      className="flex flex-col"
    >
      <img
        src={image}
        alt="Image"
        loading="lazy"
        className="w-full rounded-t-2xl"
      />
      <div className="h-60 w-full px-4 py-6 bg-[#263C28] border-primary-yellow border rounded-b-2xl">
        <p className="text-primary-yellow text-lg font-semibold mb-4">
          {title}
        </p>
        <p className="text-white text-base font-normal">{description}</p>
      </div>
    </div>
  );
};

export { PriorityCardMbl };
