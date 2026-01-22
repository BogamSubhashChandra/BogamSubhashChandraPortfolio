"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const tabs = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-40 border-b bg-white/80 dark:bg-black/60 backdrop-blur"
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* LEFT: PILL TABS */}
        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            const isActive =
              tab.href === "/"
                ? pathname === "/"
                : pathname.startsWith(tab.href);

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SPACER (for fixed toggle) */}
        <div className="w-12" />
      </div>
    </motion.nav>
  );
}
