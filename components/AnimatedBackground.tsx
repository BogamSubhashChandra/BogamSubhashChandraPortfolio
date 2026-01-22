"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 -z-10"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(1200px at 20% 10%, rgba(59,130,246,0.15), transparent 60%), linear-gradient(to bottom, #020617, #020617)"
              : "radial-gradient(1200px at 20% 10%, rgba(250,204,21,0.35), transparent 60%), linear-gradient(to bottom, #ffffff, #f8fafc)",
        }}
      />
    </AnimatePresence>
  );
}
