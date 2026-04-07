import type { Metadata } from "next";
import { getAllIngredients } from "@/lib/api";
import { HeroSection } from "@/components/molecules/HeroSection";
import { IngredientGrid } from "@/components/organisms/IngredientGrid";

export const metadata: Metadata = {
  title: "Ingredients",
  description: "Browse all ingredients and discover meals you can cook.",
};

export default async function IngredientsPage() {
  const ingredients = await getAllIngredients();

  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <IngredientGrid ingredients={ingredients} />
      </section>
    </>
  );
}
