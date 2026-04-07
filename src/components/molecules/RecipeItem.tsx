interface RecipeItemProps {
  ingredient: string;
  measure: string;
}

export function RecipeItem({ ingredient, measure }: RecipeItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-2.5 text-sm text-gray-700 shadow-sm dark:bg-gray-800/80 dark:text-gray-300">
      <span className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
      <span>
        {measure && <span className="font-semibold text-gray-900 dark:text-white">{measure}</span>}{" "}
        {ingredient}
      </span>
    </li>
  );
}
