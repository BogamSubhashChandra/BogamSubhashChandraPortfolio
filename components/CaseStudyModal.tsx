"use client";

import { motion } from "framer-motion";
import ArchitectureFlow from "./ArchitectureFlow";

export default function CaseStudyModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#121212] max-w-5xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-4xl font-bold mb-6">{project.title}</h2>

        <h3 className="text-purple-400 text-xl mb-2">Problem</h3>
        <p className="text-gray-300">{project.problem}</p>

        <h3 className="text-purple-400 text-xl mt-6 mb-2">Solution</h3>
        <p className="text-gray-300">{project.solution}</p>

        <h3 className="text-purple-400 text-xl mt-6 mb-2">Impact</h3>
        <ul className="text-green-400 list-disc ml-6">
          {project.impact.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        {/* 🔥 Animated Architecture */}
        <h3 className="text-purple-400 text-xl mt-10 mb-4">
          System Architecture
        </h3>

        <ArchitectureFlow />

        <p className="text-gray-400 mt-6">Tech: {project.tech}</p>
      </motion.div>
    </div>
  );
}