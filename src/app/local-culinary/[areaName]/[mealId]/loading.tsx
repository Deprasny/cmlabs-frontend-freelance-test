import { Skeleton } from "@/components/atoms/Skeleton";

export default function LocalCulinaryMealDetailLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-64" />
      <div className="mt-6 space-y-10">
        <div>
          <Skeleton className="h-5 w-32" />
          <Skeleton className="mt-2 h-10 w-72" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Skeleton className="aspect-[4/3] rounded-2xl md:aspect-square" />
          <div className="space-y-3">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </section>
  );
}
