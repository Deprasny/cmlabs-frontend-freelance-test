"use client";

import { SearchInput } from "@/components/atoms/SearchInput";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  resultCount?: number;
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  resultCount,
}: SearchBarProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <SearchInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full sm:max-w-sm"
      />
      {resultCount !== undefined && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </p>
      )}
    </div>
  );
}
