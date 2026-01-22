    "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const tabs = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 border-b bg-white/70 dark:bg-black/40 backdrop-blur"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LEFT: Pills */}
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
                className={`
                  inline-flex items-center justify-center
                  px-5 py-2 rounded-full text-sm font-medium
                  transition-all
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

        {/* RIGHT: Resume */}
        <div className="flex items-center gap-3">
          <a
            href="/bogam subhash chandra Resume.pdf"
            download
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full text-sm font-medium
              border border-gray-300 dark:border-gray-700
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition
            "
          >
            <Download size={16} />
            Resume
          </a>

          {/* spacer for fixed theme toggle */}
          <div className="w-12" />
        </div>
      </div>
    </motion.nav>
  );
}
