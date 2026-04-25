"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Frontend", x: 0 },
  { name: "API Gateway", x: 200 },
  { name: "Microservices", x: 400 },
  { name: "Database", x: 600 },
];

export default function ArchitectureFlow() {
  return (
    <div className="relative w-full flex justify-center mt-20 overflow-hidden">

      {/* Services */}
      <div className="flex gap-20 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="px-6 py-4 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md text-white"
          >
            {s.name}
          </motion.div>
        ))}
      </div>

      {/* Data Flow Line */}
      <div className="absolute top-1/2 w-[80%] h-[2px] bg-white/20" />

      {/* Animated Data Packets */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-[50%] w-3 h-3 bg-purple-400 rounded-full shadow-lg"
          initial={{ x: "-40%", opacity: 0 }}
          animate={{
            x: "100%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}