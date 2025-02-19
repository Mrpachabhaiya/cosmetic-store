import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

// Define valid categories and their subcategories
const categoryData: Record<string, string[]> = {
  makeup: ["face", "eyes", "lips", "cheeks", "brushes", "view-all"],
  skin: [
    "moisturizers",
    "cleansers",
    "masks",
    "sunscreen",
    "serums",
    "view-all",
  ],
  hair: [
    "shampoo",
    "conditioner",
    "hair-color",
    "styling",
    "tools",
    "view-all",
  ],
  fragrance: [
    "perfumes",
    "gift-sets",
    "minis",
    "luxury",
    "new-arrivals",
    "view-all",
  ],
  "bath-body": ["shower-gels", "lotions", "scrubs", "gift-sets", "view-all"],
  natural: ["skincare", "makeup", "hair", "body-care", "view-all"],
};

export function generateStaticParams() {
  const paths: { category: string; subcategory: string }[] = [];

  // Generate all possible category/subcategory combinations
  Object.entries(categoryData).forEach(([category, subcategories]) => {
    subcategories.forEach((subcategory) => {
      paths.push({
        category: category.toLowerCase(),
        subcategory: subcategory.toLowerCase(),
      });
    });
  });

  return paths;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category, subcategory } = params;

  // Normalize the category and subcategory to lowercase
  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();

  // Validate the category and subcategory
  if (
    !categoryData[normalizedCategory] ||
    !categoryData[normalizedCategory].includes(normalizedSubcategory)
  ) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">
        {normalizedCategory} - {normalizedSubcategory.replace(/-/g, " ")}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Product grid will go here */}
        <div className="rounded-lg bg-white p-4 shadow">
          <p className="text-gray-600">Products coming soon...</p>
        </div>
      </div>
    </div>
  );
}
