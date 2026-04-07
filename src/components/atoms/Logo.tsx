import Link from "next/link";
import { ChefHat } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white transition-transform group-hover:scale-105">
        <ChefHat className="h-4 w-4" />
      </div>
      <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
        meal<span className="text-primary">app</span>
      </span>
    </Link>
  );
}
