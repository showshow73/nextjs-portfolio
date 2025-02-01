import { 
  createClient, //MicroCMS APIクライアントを作成する関数
  MicroCMSDate, // 日時情報
  MicroCMSImage, // 画像の型
  MicroCMSQueries, // クエリパラメータ型
 } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("サービスドメインが必要です");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("APIキーが必要です");
}

//データの型定義　カテゴリ
export type Category = {
  id: string;
  name: string;
};

//データの型定義　記事
export type Article = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: Category;
} & MicroCMSDate;

//クライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

//カテゴリ一覧の取得
export async function getCategories() {
  const categories = await client.getList<Category>({
    endpoint: "categories",
  });

  return categories;
}

//記事一覧の取得
export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await client.getList<Article>({
    endpoint: "articles",
    queries,
  });

  return articles;
}

//単一記事の取得
export async function getArticle(contentId: string) {
  const article = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
  });

  return article;
}