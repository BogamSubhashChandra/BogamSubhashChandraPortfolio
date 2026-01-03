"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";

// Reusable animation variants (TypeScript-safe)
import type { Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // cubic-bezier easing (TS-safe)
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <title>Bogam Subhash Chandra | Java Full Stack Developer</title>
        <meta
          name="description"
          content="Java Full Stack Developer skilled in Spring Boot, Quarkus, FlutterFlow, and scalable backend systems."
        />
        <meta
          name="keywords"
          content="Java Developer, Spring Boot, Quarkus, Backend Engineer, Full Stack Developer"
        />
        <meta name="author" content="Bogam Subhash Chandra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20"
        >
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto px-4 sm:px-6 text-center"
          >
            <motion.h1 variants={itemVariant} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Bogam Subhash Chandra
            </motion.h1>
            <motion.p variants={itemVariant} className="mt-4 text-base sm:text-xl">
              Java Full Stack Developer | Spring Boot | Quarkus | FlutterFlow
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="mt-4 flex justify-center gap-6 flex-wrap text-sm"
            >
              <a href="mailto:subhashchandrabogam@gmail.com" className="flex items-center gap-2 hover:underline">
                <Mail size={16} /> subhashchandrabogam@gmail.com
              </a>
              <a href="tel:+918639468821" className="flex items-center gap-2 hover:underline">
                <Phone size={16} /> +91 86394 68821
              </a>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="mt-6 flex justify-center gap-4 flex-wrap"
            >
              <a href="/resume.pdf" download className="bg-white text-blue-700 px-6 py-2 rounded-xl font-semibold shadow flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
              <a href="https://github.com/BogamSubhashChandra" target="_blank" rel="noopener noreferrer" className="border border-white px-4 py-2 rounded-xl flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/bogam-subhash-chandra" target="_blank" rel="noopener noreferrer" className="border border-white px-4 py-2 rounded-xl flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-14 sm:py-16"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Java Full Stack Developer with 2.5+ years of experience in building scalable banking and financial systems. Specialized in Spring Boot and Quarkus microservices, REST APIs, and FlutterFlow-based frontends.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white py-14 sm:py-16"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
              <ul className="list-disc list-inside">
                <li><b>Languages:</b> Java, Python, Dart, SQL</li>
                <li><b>Backend:</b> Spring Boot, Quarkus, REST APIs</li>
                <li><b>Databases:</b> PostgreSQL, MySQL, MongoDB</li>
              </ul>
              <ul className="list-disc list-inside">
                <li><b>Frontend:</b> FlutterFlow, HTML, JavaScript</li>
                <li><b>Cloud:</b> Azure, Docker</li>
                <li><b>Testing:</b> JUnit, Mockito, JMeter</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-14 sm:py-16 bg-gray-50"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariant} className="p-6 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold">Banking Microservices Platform</h3>
                <p className="text-sm text-gray-600 mt-1">Spring Boot · Quarkus · PostgreSQL · Azure</p>
                <p className="mt-3 text-sm">Developed scalable backend microservices for banking applications including onboarding, accounts, and transaction workflows.</p>
              </motion.div>
              <motion.div variants={itemVariant} className="p-6 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold">FASTag Onboarding & Management System</h3>
                <p className="text-sm text-gray-600 mt-1">Quarkus · FlutterFlow · PostgreSQL</p>
                <p className="mt-3 text-sm">Built FASTag onboarding and lifecycle management services with Quarkus backend and FlutterFlow frontend integration.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 text-white py-6 sm:py-8 text-center text-sm"
        >
          © {new Date().getFullYear()} Bogam Subhash Chandra · subhashchandra.dev
        </motion.footer>
      </div>
    </main>
  );
}
