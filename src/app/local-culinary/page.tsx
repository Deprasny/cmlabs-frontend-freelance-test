import type { Metadata } from "next";
import { getAllAreas } from "@/lib/api";
import { Globe } from "lucide-react";
import { AreaCard } from "@/components/molecules/AreaCard";

export const metadata: Metadata = {
  title: "Local Culinary",
  description: "Explore meals from cuisines around the world.",
};

export default async function LocalCulinaryPage() {
  const areas = await getAllAreas();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 text-center dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 md:py-24">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4">
          <div className="mb-6 flex items-center justify-center animate-fade-in">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md shadow-red-100 animate-float dark:bg-gray-800 dark:shadow-red-900/20">
              <Globe className="h-5 w-5 text-primary" />
            </div>
          </div>
          <p className="mb-3 text-sm font-medium text-gray-500 animate-slide-up dark:text-gray-400">
            Explore world cuisines
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 animate-slide-up dark:text-white md:text-4xl lg:text-5xl" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Local Culinary</span>
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map((area) => (
            <AreaCard key={area.strArea} name={area.strArea} />
          ))}
        </div>
      </section>
    </>
  );
}
