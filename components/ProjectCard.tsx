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

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-sm border rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium text-indigo-500 hover:underline"
        >
          View case study →
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
