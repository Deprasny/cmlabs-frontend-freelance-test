import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getMealById } from "@/lib/api";
import { parseRecipeItems } from "@/lib/utils";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { MealDetailContent } from "@/components/organisms/MealDetailContent";

interface Props {
  params: Promise<{ ingredientName: string; mealId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mealId } = await params;
  const meal = await getMealById(mealId);
  if (!meal) return { title: "Meal Not Found" };
  return {
    title: meal.strMeal,
    description: `${meal.strMeal} - ${meal.strArea} ${meal.strCategory} recipe.`,
    openGraph: {
      title: meal.strMeal,
      description: `${meal.strMeal} - ${meal.strArea} ${meal.strCategory} recipe.`,
      images: [{ url: meal.strMealThumb }],
    },
  };
}

export default async function MealDetailPage({ params }: Props) {
  const { ingredientName, mealId } = await params;
  const name = decodeURIComponent(ingredientName);
  const meal = await getMealById(mealId);

  if (!meal) notFound();

  const recipeItems = parseRecipeItems(meal);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: "Ingredients", href: "/ingredients" },
            { label: name, href: `/ingredients/${encodeURIComponent(name)}` },
            { label: meal.strMeal },
          ]}
        />
        <Link
          href={`/ingredients/${encodeURIComponent(name)}`}
          className="hidden items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 sm:inline-flex"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to {name}
        </Link>
      </div>
      <div className="mt-6">
        <MealDetailContent meal={meal} recipeItems={recipeItems} />
      </div>
    </section>
  );
}
