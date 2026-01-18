"use client";

import { motion, AnimatePresence, Variants, easeInOut } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";

const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeInOut } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.4, ease: easeInOut } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle />

      <AnimatePresence mode="wait">
        <motion.main
          key="portfolio"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="max-w-6xl mx-auto px-6 py-24 text-gray-900 dark:text-gray-100"
        >
          <h1 className="text-5xl font-bold text-center mb-4">Bogam Subhash Chandra</h1>
          <p className="text-xl text-center mb-12">
            Full-stack Application Developer with experience in Java, Spring Boot, Quarkus, and FlutterFlow.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card title="Experience" value="2+ Years" />
            <Card title="Projects" value="10+" />
            <Card title="Tech Stack" value="Java • Cloud • AI" />
          </div>

          {/* Projects */}
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="space-y-12">
            <ProjectCard
              title="FASTag Onboarding & Management"
              description="Built end-to-end FASTag onboarding and lifecycle management system using Quarkus backend and FlutterFlow frontend."
              stack="Quarkus · FlutterFlow · PostgreSQL"
              img="/fastag.png"
              link="#"
            />
            <ProjectCard
              title="Banking Application Services"
              description="Developed backend services for banking apps including customer onboarding, account management, and transactions."
              stack="Java · Spring Boot · PostgreSQL"
              img="/banking.png"
              link="https://github.com/BogamSubhashChandra/java-springboot-application"
            />
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
