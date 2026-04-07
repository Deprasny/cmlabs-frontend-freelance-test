import { Skeleton } from "@/components/atoms/Skeleton";

export default function IngredientsLoading() {
  return (
    <>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Skeleton className="mx-auto mb-4 h-6 w-32" />
          <Skeleton className="mx-auto mb-3 h-4 w-48" />
          <Skeleton className="mx-auto h-12 w-80" />
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Skeleton className="mb-6 h-10 w-full max-w-sm" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="aspect-square w-full rounded-xl" />
              <Skeleton className="mx-auto h-4 w-20" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
