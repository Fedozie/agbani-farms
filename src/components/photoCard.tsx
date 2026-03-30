const PhotoCard = ({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  description?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-sec-green"
      onClick={onClick}
    >
      <div className="relative overflow-hidden lg:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-[#39633B] text-white p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
    </div>
  );
};

export { PhotoCard };
