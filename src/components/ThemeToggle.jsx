"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-9 w-16 rounded-full", className)} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative flex h-9 w-16 items-center rounded-full border border-border bg-secondary px-1 transition-colors",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300",
          isDark ? "translate-x-7" : "translate-x-0",
        )}
      >
        {isDark ? (
          <Moon size={15} className="text-foreground" />
        ) : (
          <Sun size={15} className="text-foreground" />
        )}
      </span>
    </button>
  );
}
