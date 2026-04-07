import type { Metadata } from "next";
import { getMealsByIngredient } from "@/lib/api";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { MealGrid } from "@/components/organisms/MealGrid";

interface Props {
  params: Promise<{ ingredientName: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ingredientName } = await params;
  const name = decodeURIComponent(ingredientName);
  return {
    title: `${name} Meals`,
    description: `Discover delicious meals made with ${name}.`,
  };
}

export default async function IngredientDetailPage({ params }: Props) {
  const { ingredientName } = await params;
  const name = decodeURIComponent(ingredientName);
  const meals = await getMealsByIngredient(name);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Ingredients", href: "/ingredients" },
          { label: name },
        ]}
      />
      <div className="mt-6 mb-8">
        <SectionTitle>
          <span className="gradient-text">{name}</span> Meals
        </SectionTitle>
        <hr className="mt-4 border-gray-200 dark:border-gray-700" />
      </div>
      <MealGrid meals={meals} ingredientName={name} />
    </section>
  );
}
