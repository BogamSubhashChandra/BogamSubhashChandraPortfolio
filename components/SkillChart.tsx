"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
  color: string; // Tailwind color for bar
}

interface SkillChartProps {
  skills: Skill[];
}

export default function SkillChart({ skills }: SkillChartProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              className={`h-4 rounded-full ${skill.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
