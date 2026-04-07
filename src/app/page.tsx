import Link from "next/link";
import {
  UtensilsCrossed,
  ChefHat,
  Search,
  ArrowRight,
  Flame,
  Globe,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Browse Foods",
    desc: "Explore 800+ ingredients from cuisines around the world.",
    href: "/ingredients",
  },
  {
    icon: Flame,
    title: "Discover Meals",
    desc: "Find meals by ingredient and get inspired for your next dish.",
    href: "/ingredients",
  },
  {
    icon: BookOpen,
    title: "Detailed Recipes",
    desc: "Step-by-step instructions with video tutorials included.",
    href: "/ingredients",
  },
  {
    icon: Globe,
    title: "Global Cuisine",
    desc: "From Japanese to Italian — recipes from every corner of the globe.",
    href: "/local-culinary",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-4 animate-fade-in">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-red-100 animate-float dark:bg-gray-800 dark:shadow-red-900/20">
              <UtensilsCrossed className="h-7 w-7 text-primary" />
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-orange-100 animate-float dark:bg-gray-800 dark:shadow-orange-900/20" style={{ animationDelay: "0.5s" }}>
              <ChefHat className="h-7 w-7 text-accent" />
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-yellow-100 animate-float dark:bg-gray-800 dark:shadow-yellow-900/20" style={{ animationDelay: "1s" }}>
              <Flame className="h-7 w-7 text-primary" />
            </div>
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm animate-slide-up dark:bg-gray-800/80 dark:text-gray-300">
            Powered by TheMealDB API
          </p>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 animate-slide-up dark:text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Discover{" "}
            <span className="gradient-text">Delicious</span>
            <br />
            Recipes
          </h1>

          <p className="mb-10 max-w-lg text-lg text-gray-500 animate-slide-up dark:text-gray-400" style={{ animationDelay: "0.2s" }}>
            Explore hundreds of ingredients, find the perfect meal, and cook
            something amazing today.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/ingredients"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start Exploring
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/local-culinary"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 transition-all hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary/50 dark:hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              World Cuisines
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Everything You Need
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Your complete companion for meal discovery and cooking.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-primary/20 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-50 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white dark:from-gray-800 dark:to-gray-700">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {feature.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-4 mb-16 sm:mx-6 lg:mx-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-10 text-center text-white md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to Cook Something Amazing?
          </h2>
          <p className="mb-8 text-white/80">
            Browse foods and discover your next favorite recipe.
          </p>
          <Link
            href="/ingredients"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Browse Foods
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
