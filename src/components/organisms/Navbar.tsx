"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);

  return (
    <header className="glass sticky top-0 z-50 border-b border-gray-100/50 shadow-sm dark:border-gray-800/50 dark:bg-gray-950/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={cn(
          "overflow-hidden border-t border-gray-100/50 bg-white/95 backdrop-blur-sm transition-all duration-300 dark:border-gray-800/50 dark:bg-gray-950/95 md:hidden",
          isOpen ? "max-h-64 py-4 px-4" : "max-h-0 py-0 px-4"
        )}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={close}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
