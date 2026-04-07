"use client";

import { useState, useCallback } from "react";
import type { Ingredient } from "@/lib/types";
import { useSearch } from "@/hooks/useSearch";
import { SearchBar } from "@/components/molecules/SearchBar";
import { IngredientCard } from "@/components/molecules/IngredientCard";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

interface IngredientGridProps {
  ingredients: Ingredient[];
}

export function IngredientGrid({ ingredients }: IngredientGridProps) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const getKey = useCallback((item: Ingredient) => item.strIngredient, []);
  const { query, setQuery, filtered } = useSearch(ingredients, getKey);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="space-y-8">
      <SearchBar
        value={query}
        onChange={handleSearchChange}
        placeholder="Search ingredients by name..."
        resultCount={filtered.length}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5">
        {visible.map((ingredient, index) => (
          <IngredientCard
            key={ingredient.idIngredient}
            name={ingredient.strIngredient}
            description={ingredient.strDescription}
            priority={index < 8}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-white">No ingredients found</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try searching for something else
          </p>
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-white px-8 py-3 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-red-100 dark:bg-gray-900 dark:border-primary/30"
          >
            Load More
            <span className="text-xs font-normal opacity-70">
              ({filtered.length - visibleCount} remaining)
            </span>
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      )}
    </div>
  );
}
