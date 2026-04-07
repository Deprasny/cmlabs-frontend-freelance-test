import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { INGREDIENT_IMAGE_URL } from "./constants";
import type { MealDetail, RecipeItem } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIngredientImageUrl(name: string, small = false): string {
  const suffix = small ? "-Small" : "";
  return `${INGREDIENT_IMAGE_URL}/${encodeURIComponent(name)}${suffix}.png`;
}

export function parseYouTubeEmbedUrl(watchUrl: string): string | null {
  try {
    const url = new URL(watchUrl);
    const videoId = url.searchParams.get("v");
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    return null;
  } catch {
    return null;
  }
}

export function parseRecipeItems(meal: MealDetail): RecipeItem[] {
  const items: RecipeItem[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      items.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }
  return items;
}
