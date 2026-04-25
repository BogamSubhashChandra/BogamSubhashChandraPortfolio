"use client";

import { motion } from "framer-motion";

const blocks = [
  { name: "Frontend", x: 0 },
  { name: "API Gateway", x: 150 },
  { name: "Microservices", x: 300 },
  { name: "Database", x: 450 },
];

export default function Architecture() {
  return (
    <div className="flex justify-center items-center gap-10 mt-20 flex-wrap">

      {blocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="px-6 py-4 border border-white/20 rounded-xl glass text-center"
        >
          {block.name}
        </motion.div>
      ))}

    </div>
  );
}