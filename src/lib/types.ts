export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}

export interface FilteredMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strSource: string | null;
  [key: string]: string | null;
}

export interface RecipeItem {
  ingredient: string;
  measure: string;
}

export interface Area {
  strArea: string;
}
