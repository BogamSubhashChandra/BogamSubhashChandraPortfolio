"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "IBM",
        role: "Application Developer (Backend & Microservices)",
        period: "May 2022 – Dec 2024",
        description:
            "Built and deployed 15+ microservices using Spring Boot and Quarkus, improving feature delivery speed by 20%. Reduced API response time by 30% through query optimization and caching strategies. Deployed containerized services using Docker and Azure CI/CD pipelines ensuring 99.9% uptime for high-traffic banking systems serving 10,000+ users.",
        tech: "Spring Boot, Quarkus, Docker, Azure, PostgreSQL, JMeter",
        projects: [
            {
                name: "DBS Bank Project",
                details:
                    "Developed backend services and handled full testing lifecycle (Unit, BBT, UAT). Performed load testing using Apache JMeter and ensured production stability during deployments.",
            },
            {
                name: "HDFC Bank – FASTag System",
                details:
                    "Developed full-stack modules using Quarkus and FlutterFlow. Identified and resolved critical defects improving system reliability and executed end-to-end testing and deployment.",
            },
        ],
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Professional Experience
                </motion.h2>

                {/* Timeline */}
                <div className="relative border-l border-white/20 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            {/* Period */}
                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">
                                {exp.period}
                            </div>

                            {/* Company */}
                            <h3 className="text-3xl font-bold text-white mb-1">
                                {exp.company}
                            </h3>

                            {/* Role */}
                            <h4 className="text-xl text-gray-400 mb-4">
                                {exp.role}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed max-w-2xl mb-4">
                                {exp.description}
                            </p>

                            {/* Tech Stack */}
                            <p className="text-sm text-gray-500 mb-6">
                                Tech: {exp.tech}
                            </p>

                            {/* Client Projects */}
                            {exp.projects && (
                                <div className="space-y-4">
                                    <h5 className="text-white text-lg font-semibold">
                                        Key Client Projects
                                    </h5>

                                    {exp.projects.map((proj, i) => (
                                        <div
                                            key={i}
                                            className="border-l border-white/10 pl-4"
                                        >
                                            <p className="text-white font-medium">
                                                {proj.name}
                                            </p>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {proj.details}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}