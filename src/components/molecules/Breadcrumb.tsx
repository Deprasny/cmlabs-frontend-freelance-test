import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-md px-1.5 py-0.5 font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="rounded-md px-1.5 py-0.5 text-gray-400 dark:text-gray-500">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
