import { cn } from "@/lib/utils";

type MarkProps = {
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-14 w-14 text-xl",
} as const;

export function KarigarMark({ size = "md", tone = "dark", className }: MarkProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "relative grid place-items-center rounded-xl font-bold shadow-md",
        isLight
          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-blue-500/20"
          : "bg-gradient-to-br from-cyan-300 to-teal-400 text-[#062c60] shadow-cyan-500/30",
        sizeMap[size],
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-extrabold tracking-tight">K</span>
      <span
        className={cn(
          "absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full",
          isLight ? "bg-cyan-200" : "bg-[#062c60]",
        )}
      />
    </div>
  );
}
