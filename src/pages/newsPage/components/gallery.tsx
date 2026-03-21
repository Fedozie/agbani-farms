import { useState } from "react";
import { PhotoCard, ErrorResponse } from "../../../components";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Fish Farming");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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


  if (error) {
    return (
      <section className="w-full overflow-x-hidden py-20 flex justify-center items-center">
        <ErrorResponse text={error}/>
      </section>
    );
  }

  return (
    <div>
      <div>
        <p className="text-4xl text-primary-yellow font-bold mt-10 mb-4">
          Gallery
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 ">
        <div className="w-48 shrink-0">
          <div className="space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                // onClick={() => handleFilterChange(filter)}
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
          <div className="">
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* {displayedProjects.map((project) => (
                <PhotoCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  onClick={() => handleProjectClick(project)}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Gallery };
