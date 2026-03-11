import { ArticleCard } from "../../../components/articleCard";

type RecommendationProps = {
  articles: {
    id: number;
    title: string;
    image: string;
    timeAgo: string;
    readTime: number;
    content: string;
  }[];
  onArticleClick: (article: {
    id: number;
    title: string;
    image: string;
    timeAgo: string;
    readTime: number;
    content: string;
  }) => void;
};

const Recommendation = ({ articles, onArticleClick }: RecommendationProps) => {
  return (
    <section className="lg:px-20 py-10">
      <div className="flex justify-start items-center gap-3">
        <div className="w-3 h-10 bg-pri-green rounded-sm"></div>
        <p className="font-worksans font-medium text-[2rem]">
          Recommended Articles
        </p>
      </div>
      <div className="max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              timeAgo={article.timeAgo}
              onClick={() => onArticleClick(article)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Recommendation };