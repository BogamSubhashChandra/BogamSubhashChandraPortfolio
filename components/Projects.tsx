"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";

const projects = [
  {
    title: "DBS Bank – Backend System",
    category: "Enterprise Banking",
    description:
      "Designed and developed backend services for a high-scale banking platform.",
    impact: ["Improved system stability"],
    image: "/projects/banking.png",
    logo: "/logos/dbs.png",
    metrics: ["High Load Handling", "Stable APIs"],
  },
  {
    title: "HDFC Bank – FASTag System",
    category: "Full Stack System",
    description:
      "Built full-stack modules using Quarkus and FlutterFlow.",
    impact: ["Improved onboarding experience"],
    image: "/projects/fastag.png",
    logo: "/logos/hdfc.png",
    metrics: ["Faster Onboarding", "Production Stability"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <motion.section
        id="projects"
        className="relative z-20 py-32 md:py-40 px-4 md:px-12 mb-32"
      >
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Reduced title */}
          <h2 className="text-3xl md:text-6xl font-bold mb-16 text-white">
            Engineering Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setSelected(project)}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-lg hover:border-white/20 hover:shadow-lg transition-all"
              >
                {/* 🔥 Slightly smaller image */}
                <div className="relative h-[260px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* 🔥 Reduced padding */}
                <div className="p-5">

                  {/* Logo + Category */}
                  <div className="flex items-center gap-2 mb-2 group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={project.logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="
                          object-contain
                          mix-blend-lighten
                          brightness-110
                          contrast-125
                        "
                      />
                    </motion.div>

                    {/* 🔥 Smaller category */}
                    <p className="text-[10px] uppercase tracking-wider text-purple-400/80">
                      {project.category}
                    </p>
                  </div>

                  {/* 🔥 Reduced title */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>

                  {/* 🔥 Reduced description */}
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* 🔥 Smaller badges */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-white/10 border border-white/20 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* 🔥 Slightly smaller impact */}
                  <p className="text-green-400 text-xs md:text-sm font-medium">
                    🚀 {project.impact[0]}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {selected && (
        <CaseStudyModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}