"use client";

import { Theme, useTheme } from "@/app/providers/theme-provider";

const themes: Theme[] = ["light", "dark", "blue", "emerald", "violet"];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 flex-wrap">
      {themes.map((t) => (
        <button
          key={t}
          onClick={(e) =>
            setTheme(t, e.clientX, e.clientY)
          }
          className={`px-3 py-1 rounded-md border text-sm
            ${theme === t ? "font-semibold border-black" : "border-gray-300"}
          `}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
