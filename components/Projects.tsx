"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "DBS Bank – Backend System",
        category: "Enterprise Banking",
        description:
            "Designed and developed backend services for a high-scale banking platform. Optimized APIs and implemented performance testing using JMeter to ensure system reliability under load.",
        impact:
            "Improved system stability and ensured smooth deployment across Unit, BBT, and UAT phases.",
        tech: "Java, Spring Boot, MySQL, JMeter",
        image: "/projects/dbs.png",
    },
    {
        title: "HDFC Bank – FASTag System",
        category: "Full Stack System",
        description:
            "Built full-stack modules using Quarkus and FlutterFlow for FASTag onboarding and management. Handled end-to-end development from APIs to UI.",
        impact:
            "Resolved critical production issues improving system reliability and user onboarding experience.",
        tech: "Java, Quarkus, FlutterFlow, PostgreSQL, Docker",
        image: "/projects/hdfc.png",
    },
    {
        title: "Microservices Platform @ IBM",
        category: "Scalable Architecture",
        description:
            "Developed and deployed 15+ microservices for enterprise applications using Spring Boot and Quarkus with containerized architecture.",
        impact:
            "Reduced API response time by 30% and improved feature delivery speed by 20% for systems serving 10K+ users.",
        tech: "Spring Boot, Quarkus, Docker, Azure, REST APIs",
        image: "/projects/microservices.png",
    },
    {
        title: "Cross-Platform App (FlutterFlow)",
        category: "Rapid Development",
        description:
            "Built a cross-platform application POC using FlutterFlow integrated with backend APIs for rapid product validation.",
        impact:
            "Reduced development time by 30% enabling faster feature iteration.",
        tech: "FlutterFlow, REST APIs, Firebase",
        image: "/projects/flutterflow.png",
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Engineering Case Studies
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[520px] flex flex-col justify-end"
                        >
                            {/* Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 group-hover:opacity-75" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full">
                                        {project.tech}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-lg leading-relaxed mb-3">
                                    {project.description}
                                </p>

                                {/* Impact (KEY DIFFERENTIATOR) */}
                                <p className="text-green-400 text-sm font-medium">
                                    🚀 Impact: {project.impact}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}