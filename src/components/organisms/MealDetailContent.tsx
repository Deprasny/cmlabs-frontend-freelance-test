import Image from "next/image";
import { Tag } from "@/components/atoms/Tag";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { YouTubeEmbed } from "@/components/atoms/YouTubeEmbed";
import { RecipeItem } from "@/components/molecules/RecipeItem";
import type { MealDetail, RecipeItem as RecipeItemType } from "@/lib/types";

interface MealDetailContentProps {
  meal: MealDetail;
  recipeItems: RecipeItemType[];
}

export function MealDetailContent({ meal, recipeItems }: MealDetailContentProps) {
  return (
    <div className="space-y-12">
      {/* Title and tag */}
      <div className="animate-fade-in">
        <Tag className="mb-3">{meal.strArea} Culinary</Tag>
        <SectionTitle>{meal.strMeal}</SectionTitle>
        {meal.strTags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {meal.strTags.split(",").map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
        <hr className="mt-6 border-gray-200 dark:border-gray-700" />
      </div>

      {/* Image + Instructions */}
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg animate-slide-up md:aspect-square">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            Instructions
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base md:leading-7">
            {meal.strInstructions
              .split(/\r?\n/)
              .filter(Boolean)
              .map((paragraph, i) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
          </div>
        </div>
      </div>

      {/* Recipes */}
      {recipeItems.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-red-50/50 to-orange-50/50 p-6 dark:from-gray-900 dark:to-gray-800 md:p-8">
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            Recipes
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {recipeItems.map((item, index) => (
              <RecipeItem
                key={`${item.ingredient}-${index}`}
                ingredient={item.ingredient}
                measure={item.measure}
              />
            ))}
          </ul>
        </div>
      )}

      {/* YouTube Video */}
      {meal.strYoutube && (
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            Tutorials
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <YouTubeEmbed url={meal.strYoutube} title={`${meal.strMeal} - Tutorial`} />
          </div>
        </div>
      )}
    </div>
  );
}
