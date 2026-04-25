"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "IBM",
    role: "Application Developer (Backend & Microservices)",
    period: "May 2022 – Dec 2024",
    description:
      "Built and deployed 15+ microservices using Spring Boot and Quarkus. Reduced API response time by 30% through optimization and caching. Deployed containerized services using Docker and Azure CI/CD pipelines ensuring 99.9% uptime for high-traffic systems serving 10,000+ users.",
    tech: "Spring Boot, Quarkus, Docker, Azure, PostgreSQL, JMeter",
    projects: [
      {
        name: "DBS Bank Project",
        details:
          "Developed backend services and handled full testing lifecycle (Unit, BBT, UAT). Performed load testing using Apache JMeter.",
        logo: "/logos/dbs.png",
      },
      {
        name: "HDFC Bank – FASTag System",
        details:
          "Developed full-stack modules using Quarkus and FlutterFlow and improved system reliability.",
        logo: "/logos/hdfc.png",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-20 py-32 md:py-40 px-4 md:px-12 mb-32"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title (no transform → crisp) */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">
          Professional Experience
        </h2>

        <div className="space-y-16">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="will-change-auto"
            >
              {/* Period */}
              <div className="text-sm text-gray-500 mb-2 tracking-wide">
                {exp.period}
              </div>

              {/* Company */}
              <div className="flex items-center gap-4 mb-3 group">

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Image
                    src="/logos/ibm.png"
                    alt="IBM"
                    width={50}
                    height={50}
                    className="
                      object-contain
                      mix-blend-lighten
                      brightness-110
                      contrast-125
                      transition duration-300
                    "
                  />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {exp.company}
                </h3>
              </div>

              {/* Role */}
              <h4 className="text-lg md:text-xl text-gray-400 mb-4">
                {exp.role}
              </h4>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  🚀 30% Faster APIs
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  👥 10K+ Users
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  🛡️ 99.9% Uptime
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-6">
                {exp.description}
              </p>

              {/* Tech */}
              <p className="text-sm md:text-base text-purple-400 mb-6">
                Tech: {exp.tech}
              </p>

              {/* Projects */}
              <div className="space-y-5">
                <h5 className="text-lg font-semibold text-white mb-2">
                  Key Client Projects
                </h5>

                {exp.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <Image
                        src={proj.logo}
                        alt={proj.name}
                        width={32}
                        height={32}
                        className="object-contain mix-blend-lighten"
                      />
                    </motion.div>

                    <div>
                      <p className="text-base font-medium text-white">
                        {proj.name}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {proj.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}