"use client";

import { ThemeProvider, ThemeToggle } from "@/components/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import "@/app/layout.tsx";
import { easeInOut } from "framer-motion";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageTransition = {
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ThemeProvider>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={Math.random()} // triggers on route change
              {...pageTransition}
              className="min-h-screen relative overflow-hidden"
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Ripple Overlay */}
              <motion.div
                className="absolute inset-0 bg-primary-light dark:bg-primary-dark opacity-20 pointer-events-none"
                initial={{ scale: 0 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {children}
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
