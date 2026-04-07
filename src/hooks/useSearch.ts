"use client";

import { useState, useMemo, useTransition } from "react";

export function useSearch<T>(
  items: T[],
  searchKey: (item: T) => string
) {
  const [query, setQuery] = useState("");
  const [deferredQuery, setDeferredQuery] = useState("");
  const [, startTransition] = useTransition();

  const handleSetQuery = (value: string) => {
    setQuery(value);
    startTransition(() => {
      setDeferredQuery(value);
    });
  };

  const filtered = useMemo(() => {
    if (!deferredQuery.trim()) return items;
    const lower = deferredQuery.toLowerCase();
    return items.filter((item) =>
      searchKey(item).toLowerCase().includes(lower)
    );
  }, [items, deferredQuery, searchKey]);

  return { query, setQuery: handleSetQuery, filtered };
}
