import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItemProps {
  href?: string;
  label: string;
  isLast?: boolean;
}

export function BreadcrumbItem({ href, label, isLast }: BreadcrumbItemProps) {
  return (
    <li className="flex items-center gap-1.5">
      {href && !isLast ? (
        <Link
          href={href}
          className="text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          {label}
        </Link>
      ) : (
        <span className="text-sm text-gray-400">{label}</span>
      )}
      {!isLast && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
    </li>
  );
}
