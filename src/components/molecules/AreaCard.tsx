import Link from "next/link";
import { Globe } from "lucide-react";

interface AreaCardProps {
  name: string;
}

const AREA_EMOJIS: Record<string, string> = {
  American: "🇺🇸", British: "🇬🇧", Canadian: "🇨🇦", Chinese: "🇨🇳",
  Croatian: "🇭🇷", Dutch: "🇳🇱", Egyptian: "🇪🇬", Filipino: "🇵🇭",
  French: "🇫🇷", Greek: "🇬🇷", Indian: "🇮🇳", Irish: "🇮🇪",
  Italian: "🇮🇹", Jamaican: "🇯🇲", Japanese: "🇯🇵", Kenyan: "🇰🇪",
  Malaysian: "🇲🇾", Mexican: "🇲🇽", Moroccan: "🇲🇦", Norwegian: "🇳🇴",
  Polish: "🇵🇱", Portuguese: "🇵🇹", Russian: "🇷🇺", Spanish: "🇪🇸",
  Thai: "🇹🇭", Turkish: "🇹🇷", Ukrainian: "🇺🇦", Vietnamese: "🇻🇳",
  Algerian: "🇩🇿", Argentinian: "🇦🇷", Australian: "🇦🇺",
  "Saudi Arabian": "🇸🇦", Slovakian: "🇸🇰", Syrian: "🇸🇾",
  Tunisian: "🇹🇳", Uruguayan: "🇺🇾", Venezulan: "🇻🇪",
};

export function AreaCard({ name }: AreaCardProps) {
  const emoji = AREA_EMOJIS[name];

  return (
    <Link
      href={`/local-culinary/${encodeURIComponent(name)}`}
      className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-50 text-2xl transition-colors group-hover:from-primary group-hover:to-accent dark:from-gray-800 dark:to-gray-700">
        {emoji || <Globe className="h-5 w-5 text-primary group-hover:text-white" />}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors dark:text-white">
          {name}
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-500">Cuisine</p>
      </div>
    </Link>
  );
}
