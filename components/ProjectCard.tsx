"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="card"
    >
      <h3 className="mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>

      {/* Tech Stack */}
<div className="space-y-6 mb-6">
  {Object.entries(project.tech).map(([group, sets]) => {
    const { primary, secondary } = sets as {
      primary: string[];
      secondary: string[];
    };

    if (primary.length === 0 && secondary.length === 0) return null;

    return (
      <div key={group} className="space-y-3">
        {/* Group label */}
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {group}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {/* Primary skills */}
          {primary.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-1.5
                text-xs font-semibold
                rounded-full
                bg-indigo-600/15
                text-indigo-600
                border border-indigo-500/40
                whitespace-nowrap
              "
            >
              {skill}
            </span>
          ))}

          {/* Secondary skills */}
          {secondary.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-1.5
                text-xs font-medium
                rounded-full
                border border-slate-400/40 dark:border-slate-600/40
                text-slate-700 dark:text-slate-300
                bg-white/60 dark:bg-black/30
                whitespace-nowrap
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  })}
</div>





      <div className="flex items-center justify-between pt-3">
  <Link
    href={`/projects/${project.slug}`}
    className="text-sm font-medium text-indigo-400 hover:underline"
  >
    
    View case study →
  </Link>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
  >
    <Github size={14} />
    GitHub
  </a>
</div>
    </motion.div>
  );
}
