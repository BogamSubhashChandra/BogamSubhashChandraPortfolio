"use client";

import { motion } from "framer-motion";

export default function ScrollSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="py-8"
    >
      <div className="max-w-5xl mx-auto px-4 space-y-3">
        {children}
      </div>
    </motion.section>
  );
}
