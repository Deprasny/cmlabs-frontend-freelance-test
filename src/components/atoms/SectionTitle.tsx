import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h1
      className={cn(
        "text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
