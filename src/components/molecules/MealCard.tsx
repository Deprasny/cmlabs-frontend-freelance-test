"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MealCardProps {
  name: string;
  thumbnail: string;
  href: string;
}

export function MealCard({ name, thumbnail, href }: MealCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={href}
      className="card-shine group relative aspect-[4/3] overflow-hidden rounded-2xl border border-transparent shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-700 dark:bg-gray-800"
    >
      <Image
        src={imgError ? "/placeholder-food.svg" : thumbnail}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all group-hover:from-black/80" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-bold text-white drop-shadow-lg md:text-base line-clamp-2">
          {name}
        </h3>
      </div>
    </Link>
  );
}
