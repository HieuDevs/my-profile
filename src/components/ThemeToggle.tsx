"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);
  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  const handleToggle = () => setTheme(isDark ? "light" : "dark");

  const sunOpacity = isDark ? "opacity-0" : "opacity-100";
  const moonOpacity = isDark ? "opacity-100" : "opacity-0";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="group border-border/60 bg-background/70 hover:bg-background/90 focus-visible:ring-primary/50 relative inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm backdrop-blur transition-colors focus:outline-none focus-visible:ring-2"
    >
      <svg
        aria-hidden
        className={`h-4 w-4 text-yellow-500 transition-opacity duration-200 ${sunOpacity}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path
          d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.49 0-1.41 1.41M6.46 17.49l-1.41 1.41"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        aria-hidden
        className={`text-foreground absolute h-4 w-4 transition-opacity duration-200 ${moonOpacity}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>
  );
}
