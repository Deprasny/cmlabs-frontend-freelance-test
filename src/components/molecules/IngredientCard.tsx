"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getIngredientImageUrl } from "@/lib/utils";
import { Info } from "lucide-react";

interface IngredientCardProps {
  name: string;
  description?: string | null;
  priority?: boolean;
}

export function IngredientCard({ name, description, priority }: IngredientCardProps) {
  const [imgError, setImgError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Link
      href={`/ingredients/${encodeURIComponent(name)}`}
      className="card-shine group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <Image
        src={imgError ? "/placeholder-food.svg" : getIngredientImageUrl(name)}
        alt={name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        onError={() => setImgError(true)}
        priority={priority}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity group-hover:from-black/70" />

      {/* Info button */}
      {description && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowInfo(!showInfo);
          }}
          className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-600 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white"
          aria-label={`Info about ${name}`}
        >
          <Info className="h-3.5 w-3.5" />
        </button>
      )}

      {/* Description tooltip */}
      {showInfo && description && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 p-4">
          <p className="text-xs leading-relaxed text-white line-clamp-6">
            {description}
          </p>
        </div>
      )}

      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <span className="inline-block rounded-lg bg-primary/90 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm sm:text-sm">
          {name}
        </span>
      </div>
    </Link>
  );
}
