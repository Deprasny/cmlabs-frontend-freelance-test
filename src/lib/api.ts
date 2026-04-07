import { API_BASE_URL } from "./constants";
import type { Ingredient, FilteredMeal, MealDetail, Area } from "./types";

export async function getAllIngredients(): Promise<Ingredient[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/list.php?i=list`, {
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return data.meals ?? [];
  } catch {
    return [];
  }
}

export async function getMealsByIngredient(
  ingredientName: string
): Promise<FilteredMeal[]> {
  try {
    const res = await fetch(
      `${API_BASE_URL}/filter.php?i=${encodeURIComponent(ingredientName)}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data.meals ?? [];
  } catch {
    return [];
  }
}

export async function getMealById(id: string): Promise<MealDetail | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.meals?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getAllAreas(): Promise<Area[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/list.php?a=list`, {
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return data.meals ?? [];
  } catch {
    return [];
  }
}

export async function getMealsByArea(area: string): Promise<FilteredMeal[]> {
  try {
    const res = await fetch(
      `${API_BASE_URL}/filter.php?a=${encodeURIComponent(area)}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data.meals ?? [];
  } catch {
    return [];
  }
}
