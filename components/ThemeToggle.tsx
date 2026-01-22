"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ripple, setRipple] = useState(false);

  // ✅ Wait until client is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents hydration mismatch
    return null;
  }

  const toggleTheme = () => {
    setRipple(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setRipple(false), 700);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Ripple */}
        <AnimatePresence>
          {ripple && (
            <motion.span
              initial={{ scale: 0, opacity: 0.35 }}
              animate={{ scale: 18, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-indigo-500"
            />
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border backdrop-blur bg-white/60 dark:bg-black/40"
        >
          {theme === "dark" ? (
            <Moon
              size={22}
              className="text-white drop-shadow-[0_0_6px_#60a5fa]"
            />
          ) : (
            <Sun
              size={22}
              className="text-black drop-shadow-[0_0_6px_#facc15]"
            />
          )}
        </button>
      </div>
    </div>
  );
}
