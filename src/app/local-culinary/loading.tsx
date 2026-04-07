import { Skeleton } from "@/components/atoms/Skeleton";

export default function LocalCulinaryLoading() {
  return (
    <>
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Skeleton className="mx-auto mb-6 h-11 w-11" />
          <Skeleton className="mx-auto mb-3 h-4 w-48" />
          <Skeleton className="mx-auto h-12 w-64" />
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-2xl" />
          ))}
        </div>
      </section>
    </>
  );
}
