import { getCategories } from "@/lib/client";
import { Button } from "./ui/button";
import Link from "next/link"; // 追加

// ↓追加↓
type Props = {
  currentCategoryId?: string;
};
// ↑追加↑

export default async function CategoryFilter(props: Props) {
  const { contents: categories } = await getCategories();
  // ↓追加↓
  const currentCategoryId = props.currentCategoryId;
  const currentCategory = categories.find(
    (category) => category.id === currentCategoryId
  );
  // ↑追加↑

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        {currentCategoryId ? currentCategory?.name : "Categories"}
      </h2>
      <div className="flex flex-wrap gap-2">
        {/* ↓修正↓ */}
        <Link href='/product'>
          <Button
            variant={currentCategoryId === undefined ? "default" : "outline"}
          >
            ALL
          </Button>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Button
              variant={
                category.id === currentCategoryId ? "default" : "outline"
              }
            >
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}