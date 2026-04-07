"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-md focus-visible:px-1",
        isActive ? "text-primary" : "text-gray-600 dark:text-gray-400"
      )}
    >
      {label}
    </Link>
  );
}
