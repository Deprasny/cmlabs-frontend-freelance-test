import { Skeleton } from "@/components/atoms/Skeleton";

export default function IngredientDetailLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-48" />
      <div className="mt-6 mb-8">
        <Skeleton className="h-10 w-64" />
        <hr className="mt-4 border-gray-200 dark:border-gray-700" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-6">
        <Skeleton className="h-12 w-full max-w-sm rounded-xl" />
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] w-full rounded-2xl" />
        ))}
      </div>
    </section>
  );
}
