import { IoPersonOutline } from "react-icons/io5";

type ProfileCardProps = {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
};

const TeamCard = ({
  name,
  title,
  bio,
  imageSrc,
  imageAlt = "Profile photo",
}: ProfileCardProps) => {
  return (
    <div className="relative pt-12 max-w-xs w-full h-full"> 
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden shadow-md bg-gray-300 z-10">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <IoPersonOutline size={56} />
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-lg px-7 pt-24 pb-7 text-center w-full">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          {name}
        </h2>
        <p className="text-sm text-gray-500 mb-5">{title}</p>
        <p className="text-base text-black leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export { TeamCard };