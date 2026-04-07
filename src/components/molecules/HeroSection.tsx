import { UtensilsCrossed, Cookie, ChefHat } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 text-center dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 md:py-24">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4">
        <div className="mb-6 flex items-center justify-center gap-4 animate-fade-in">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md shadow-red-100 animate-float dark:bg-gray-800 dark:shadow-red-900/20">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md shadow-orange-100 animate-float dark:bg-gray-800 dark:shadow-orange-900/20" style={{ animationDelay: "0.5s" }}>
            <Cookie className="h-5 w-5 text-accent" />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md shadow-yellow-100 animate-float dark:bg-gray-800 dark:shadow-yellow-900/20" style={{ animationDelay: "1s" }}>
            <ChefHat className="h-5 w-5 text-primary" />
          </div>
        </div>
        <p className="mb-3 text-sm font-medium text-gray-500 animate-slide-up dark:text-gray-400">
          Browse 800+ ingredients and discover meals
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 animate-slide-up dark:text-white md:text-4xl lg:text-5xl" style={{ animationDelay: "0.1s" }}>
          See All The{" "}
          <span className="gradient-text">Delicious Foods</span>
        </h1>
      </div>
    </section>
  );
}
