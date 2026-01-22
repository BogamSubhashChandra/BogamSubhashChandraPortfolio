"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type RippleState = {
  x: number;
  y: number;
} | null;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ripple, setRipple] = useState<RippleState>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // click position relative to viewport
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // start ripple
    setRipple({ x, y });

    // switch theme slightly after ripple starts
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 120);

    // cleanup ripple
    setTimeout(() => {
      setRipple(null);
    }, 900);
  };

  return createPortal(
    <>
      {/* 🔥 FULL SCREEN RIPPLE */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            key="theme-ripple"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 35, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              borderRadius: "9999px",
              transform: "translate(-50%, -50%)",
              zIndex: 9998,

              // 🎨 color synced with theme background
              background:
                theme === "dark"
                  ? "radial-gradient(circle, rgba(96,165,250,0.45), rgba(2,6,23,0.9))"
                  : "radial-gradient(circle, rgba(250,204,21,0.45), rgba(255,255,255,0.9))",
            }}
          />
        )}
      </AnimatePresence>

      {/* 🌙 TOGGLE BUTTON */}
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 9999,
        }}
      >
        <button
          onClick={handleToggle}
          aria-label="Toggle theme"
          style={{
            width: 44,
            height: 44,
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
            background:
              theme === "dark"
                ? "rgba(2,6,23,0.6)"
                : "rgba(255,255,255,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {theme === "dark" ? (
            <Moon size={22} color="white" />
          ) : (
            <Sun size={22} color="black" />
          )}
        </button>
      </div>
    </>,
    document.body
  );
}
