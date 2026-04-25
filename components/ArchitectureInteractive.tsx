"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  {
    name: "Frontend",
    desc: "FlutterFlow / React UI handling user interactions",
  },
  {
    name: "API Gateway",
    desc: "Routes requests and handles authentication",
  },
  {
    name: "Microservices",
    desc: "Spring Boot / Quarkus services handling business logic",
  },
  {
    name: "Database",
    desc: "PostgreSQL storing transactional data",
  },
];

export default function ArchitectureInteractive() {
  const [selected, setSelected] = useState(nodes[0]);

  return (
    <div className="mt-10">
      
      {/* Nodes */}
      <div className="flex flex-wrap justify-center gap-6">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(node)}
            whileHover={{ scale: 1.1 }}
            className={`cursor-pointer px-6 py-3 rounded-xl border ${
              selected.name === node.name
                ? "bg-purple-500 text-white"
                : "border-white/20 text-gray-300"
            }`}
          >
            {node.name}
          </motion.div>
        ))}
      </div>

      {/* Details */}
      <motion.div
        key={selected.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-center text-gray-300 max-w-xl mx-auto"
      >
        {selected.desc}
      </motion.div>
    </div>
  );
}