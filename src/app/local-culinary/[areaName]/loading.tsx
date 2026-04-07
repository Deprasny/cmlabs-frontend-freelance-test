import { Skeleton } from "@/components/atoms/Skeleton";

export default function AreaDetailLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="mt-6 mb-8 h-10 w-64" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] w-full rounded-2xl" />
        ))}
      </div>
    </section>
  );
}
