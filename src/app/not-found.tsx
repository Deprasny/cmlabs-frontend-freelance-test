import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 text-8xl font-extrabold gradient-text">404</div>
      <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-sm text-gray-500 dark:text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/ingredients"
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all hover:shadow-xl hover:-translate-y-0.5 dark:shadow-red-900/30"
      >
        Browse Foods
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
