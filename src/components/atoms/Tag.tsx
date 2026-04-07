import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block text-sm font-semibold text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
