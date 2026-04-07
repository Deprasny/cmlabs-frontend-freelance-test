import type { Metadata } from "next";
import { getMealsByArea } from "@/lib/api";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { MealCard } from "@/components/molecules/MealCard";

interface Props {
  params: Promise<{ areaName: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { areaName } = await params;
  const name = decodeURIComponent(areaName);
  return {
    title: `${name} Cuisine`,
    description: `Discover delicious ${name} meals and recipes.`,
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { areaName } = await params;
  const name = decodeURIComponent(areaName);
  const meals = await getMealsByArea(name);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Local Culinary", href: "/local-culinary" },
          { label: name },
        ]}
      />
      <div className="mt-6 mb-8">
        <SectionTitle>
          <span className="gradient-text">{name}</span> Cuisine
        </SectionTitle>
        <hr className="mt-4 border-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            name={meal.strMeal}
            thumbnail={meal.strMealThumb}
            href={`/local-culinary/${encodeURIComponent(name)}/${meal.idMeal}`}
          />
        ))}
      </div>

      {meals.length === 0 && (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <span className="text-2xl">🍽️</span>
          </div>
          <p className="text-lg font-medium text-gray-900">No meals available</p>
          <p className="mt-1 text-sm text-gray-500">
            No meals listed for {name} cuisine yet
          </p>
        </div>
      )}
    </section>
  );
}
