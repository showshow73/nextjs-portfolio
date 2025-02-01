import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Product() {
  const { contents: articles, totalCount } = await getArticles({
    limit: LIMIT,
    offset: 0,
  });

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}