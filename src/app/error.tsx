"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        Something went wrong
      </h2>
      <p className="mb-8 max-w-sm text-gray-500">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
      >
        Try Again
      </button>
    </section>
  );
}
