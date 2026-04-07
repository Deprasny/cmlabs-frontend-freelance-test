"use client";

import { useCallback } from "react";
import type { FilteredMeal } from "@/lib/types";
import { useSearch } from "@/hooks/useSearch";
import { SearchBar } from "@/components/molecules/SearchBar";
import { MealCard } from "@/components/molecules/MealCard";

interface MealGridProps {
  meals: FilteredMeal[];
  ingredientName: string;
}

export function MealGrid({ meals, ingredientName }: MealGridProps) {
  const getKey = useCallback((item: FilteredMeal) => item.strMeal, []);
  const { query, setQuery, filtered } = useSearch(meals, getKey);

  return (
    <div className="space-y-8">
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search meals by name..."
        resultCount={filtered.length}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5">
        {filtered.map((meal) => (
          <MealCard
            key={meal.idMeal}
            name={meal.strMeal}
            thumbnail={meal.strMealThumb}
            href={`/ingredients/${encodeURIComponent(ingredientName)}/${meal.idMeal}`}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="text-2xl">🍽️</span>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {query ? "No meals found" : "No meals available"}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {query
              ? `No results for "${query}" — try a different search`
              : "This ingredient has no meals listed yet"}
          </p>
        </div>
      )}
    </div>
  );
}
