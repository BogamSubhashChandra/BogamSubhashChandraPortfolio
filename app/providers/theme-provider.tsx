"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme =
  | "light"
  | "dark"
  | "blue"
  | "emerald"
  | "violet";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme, x?: number, y?: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (t: Theme, x = window.innerWidth / 2, y = window.innerHeight / 2) => {
    const ripple = document.createElement("div");
    ripple.className = "theme-ripple";
    ripple.style.setProperty("--x", `${x}px`);
    ripple.style.setProperty("--y", `${y}px`);

    document.body.appendChild(ripple);
    setThemeState(t);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
