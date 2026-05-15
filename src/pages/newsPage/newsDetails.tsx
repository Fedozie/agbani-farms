import { HeroSection } from "./components";
import { useLocation } from "react-router-dom";

type NewsSource = {
  id: string | null;
  name: string;
};

type Article = {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};

const NewsDetails = () => {
  const { state } = useLocation();
  const article = state?.article as Article | null;

  const formattedDate = (date: string): string => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(newDate);
  };

  const formattedPublishDate = article?.publishedAt
    ? formattedDate(article.publishedAt)
    : "";

  if (!article) return <p>Article not found. Please go back and try again.</p>;

  return (
    <section>
      <HeroSection />
      <div className="p-4 w-[80%] m-auto">
        <p className="text-2xl lg:text-[3.125rem] font-bold text-white capitalize mt-6">
          {article.title}.
        </p>
        <p className="mt-2 mb-4 text-sm text-white/70">
          By {article.author} for {article.source.name} at{" "}
          {formattedPublishDate}.
        </p>
        <div className="w-full h-100">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <p className="font-normal text-lg lg:text-xl text-white text-left mt-4 mb-10">{article.description}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-primary-yellow text-base hover:underline hover:underline-offset-3"
        >
          Read full article on {article.source.name}
        </a>
      </div>
    </section>
  );
};

export { NewsDetails };
