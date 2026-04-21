type ArticleCardProps = {
  image: string;
  title: string;
  timeAgo: string;
  onClick: () => void;
};

const ArticleCard = ({ image, title, timeAgo, onClick }: ArticleCardProps) => {

  const decodeHTMLEntities = (text: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-4 cursor-pointer group pb-6 border-b border-dotted border-gray-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full lg:w-56 h-40 shrink-0 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <h3 className="text-xl font-semibold text-gray-900 leading-snug group-hover:text-pri-green transition-colors">
          {decodeHTMLEntities(title)}
        </h3>
        <p className="text-sm text-gray-500">{timeAgo}</p>
      </div>
    </div>
  );
};

export { ArticleCard };