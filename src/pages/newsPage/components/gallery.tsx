import { useState, useEffect } from "react";
import { ErrorResponse, PhotoCard } from "../../../components";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type RawGalleryItem = {
  id: number;
  acf: {
    tag: string;
    superset: string;
    image: number;
  };
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
};

type GalleryItem = {
  id: number;
  title: string;
  superset: string;
  imageUrl: string;
};

// Skeleton card — matches the shape of PhotoCard
const PhotoCardSkeleton = () => (
  <div className="animate-pulse rounded-lg overflow-hidden">
    <div className="bg-white/10 h-56 w-full rounded-lg" />
    <div className="mt-3 h-4 bg-white/10 rounded w-1/2" />
  </div>
);

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Fish Farming");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allImages, setAllImages] = useState<GalleryItem[]>([]);

  const transformedGallery = (items: RawGalleryItem[]): GalleryItem[] => {
    return items.map((item) => ({
      id: item.id,
      title: item.acf.tag,
      superset: item.acf.superset,
      imageUrl: item._embedded["wp:featuredmedia"][0]?.source_url ?? "",
    }));
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get<RawGalleryItem[]>(
          "https://api.agbanifarms.com/wp-json/wp/v2/gallery?per_page=30&_embed", // fixed URL
        );
        const transformed = transformedGallery(response.data);
        setAllImages(transformed);
        console.log(transformed);
      } catch (err) {
        setError("Failed to fetch gallery");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  type FilterType =
    | "Fish Farming"
    | "Livestock"
    | "Crops"
    | "Processing"
    | "Training"
    | "Events";

  const filters: FilterType[] = [
    "Fish Farming",
    "Livestock",
    "Crops",
    "Processing",
    "Training",
    "Events",
  ];

  const filteredImages = allImages.filter(
    (image) => image.superset.toLowerCase() === activeFilter.toLowerCase(),
  );

  const photosPerPage = 4;
  const totalPages = Math.ceil(filteredImages.length / photosPerPage);
  const startIndex = currentPage * photosPerPage;
  const displayedPhotos = filteredImages.slice(
    startIndex,
    startIndex + photosPerPage,
  );

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  if (error) {
    return (
      <section className="w-full overflow-x-hidden py-20 flex justify-center items-center">
        <ErrorResponse text={error} />
      </section>
    );
  }

  return (
    <div className="mb-20">
      <div>
        <p className="text-4xl text-primary-yellow font-bold mt-10 mb-4">
          Gallery
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-72 shrink-0">
          <div className="space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`w-full text-left px-4 text-lg transition-colors ${
                  activeFilter === filter
                    ? "text-primary-yellow font-semibold border-l-4 border-primary-yellow"
                    : "text-[#DBDBDB] font-medium cursor-pointer hover:text-primary-yellow/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {loading
              ? // show 4 skeleton cards while fetching
                Array.from({ length: 4 }).map((_, i) => (
                  <PhotoCardSkeleton key={i} />
                ))
              : displayedPhotos.map((image) => (
                  <PhotoCard
                    key={image.id}
                    image={image.imageUrl}
                    title={image.title}
                  />
                ))}
          </div>

          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-8 relative">
              <button
                onClick={handleBack}
                disabled={currentPage === 0}
                className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
              >
                <FaChevronLeft />
              </button>

              <div className="absolute flex gap-2 -bottom-12">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPage === index
                        ? "w-6 bg-primary-yellow"
                        : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 rounded-full border-2 border-primary-yellow text-primary-yellow flex items-center justify-center hover:bg-primary-yellow hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Gallery };