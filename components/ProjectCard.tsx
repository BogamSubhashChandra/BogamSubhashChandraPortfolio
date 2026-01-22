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
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  whileHover={{ y: -4 }}
  className="card"
>
  {/* 👇 NEW INNER WRAPPER CONTROLS SPACING */}
  <div className="flex flex-col gap-8">
    
    {/* Title + description */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>
      <p className="text-sm text-slate-400">
        {project.description}
      </p>
    </div>

    {/* Tech Stack */}
    <div className="space-y-8">
      {Object.entries(project.tech).map(([group, sets]) => {
        const { primary, secondary } = sets;

        if (
          (!primary || primary.length === 0) &&
          (!secondary || secondary.length === 0)
        ) {
          return null;
        }

        return (
          <div key={group} className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              {group}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {primary.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-1.5
                    text-xs font-semibold
                    rounded-full
                    bg-indigo-600/15
                    text-indigo-500
                    border border-indigo-500/40
                    whitespace-nowrap
                  "
                >
                  {skill}
                </span>
              ))}

              {secondary.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-1.5
                    text-xs font-medium
                    rounded-full
                    border border-slate-400/40
                    text-slate-300
                    bg-black/30
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

    {/* Actions */}
    <div className="pt-6 border-t border-slate-700/40 flex justify-between">
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

  </div>
</motion.div>
  );
}
