"use client";

import { motion, Variants, easeInOut } from "framer-motion";

interface CardProps {
  title: string;
  value: string;
}

export default function Card({ title, value }: CardProps) {
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );
}
