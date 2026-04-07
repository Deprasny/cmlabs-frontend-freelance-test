import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { ScrollToTop } from "@/components/atoms/ScrollToTop";
import { ChefHat } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e53e3e",
};

export const metadata: Metadata = {
  title: {
    default: "MealApp - Discover Delicious Foods",
    template: "%s | MealApp",
  },
  description:
    "Explore ingredients and discover delicious meal recipes from around the world.",
  openGraph: {
    type: "website",
    siteName: "MealApp",
    title: "MealApp - Discover Delicious Foods",
    description:
      "Explore ingredients and discover delicious meal recipes from around the world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MealApp - Discover Delicious Foods",
    description:
      "Explore ingredients and discover delicious meal recipes from around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme"),d=window.matchMedia("(prefers-color-scheme:dark)").matches;if(t==="dark"||(t!=="light"&&d))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <ChefHat className="h-4 w-4 text-primary" />
                <span>
                  meal<span className="font-bold text-gray-700 dark:text-gray-200">app</span>
                </span>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <span>Powered by TheMealDB</span>
              </div>
              <nav className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                &copy; {new Date().getFullYear()} MealApp. Built with Next.js &
                Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
