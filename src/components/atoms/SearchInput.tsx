"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
  ariaLabel,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel || placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 focus:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          aria-label="Clear search"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
