"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";
import type { Variants } from "framer-motion";

/* ================= PROFESSIONAL ANIMATION SYSTEM ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Portfolio() {
  return (
    <main className="bg-gray-50 text-gray-900 overflow-x-hidden">
      <Head>
        {/* ===== SEO ===== */}
        <title>Application Developer | Java, Spring Boot, Quarkus, Flutterflow | Bogam Subhash Chandra</title>
        <meta
          name="description"
          content="Application Developer with experience in Java, Spring Boot, Quarkus, flutterflow and REST APIs. Experienced in building scalable, maintainable backend systems for enterprise applications."
        />
        <meta
          name="keywords"
          content="Application Developer, Backend Developer, Java Developer, Flutterflow Developer, Spring Boot, Quarkus, REST APIs, Microservices"
        />
        <meta name="author" content="Bogam Subhash Chandra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="border-b border-gray-200"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-6 py-20"
        >
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold">
            Bogam Subhash Chandra
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 text-lg text-gray-700">
            Application Developer
          </motion.p>

          <motion.p variants={fadeUp} className="mt-2 text-sm text-gray-600 max-w-2xl">
            Java backend developer experienced in building RESTful APIs and microservices with Spring Boot
             and Quarkus, and integrating backend services with FlutterFlow-based frontends for complete end-to-end applications.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex gap-6 flex-wrap text-sm">
            <a href="mailto:subhashchandrabogam@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail size={16} /> subhashchandrabogam@gmail.com
            </a>
            <a href="tel:+918639468821" className="flex items-center gap-2 hover:underline">
              <Phone size={16} /> +91 86394 68821
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex gap-4 flex-wrap">
            <a
              href="/bogam subhash chandra Resume.pdf"
              download
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium"
            >
              <Download size={16} className="inline mr-2" /> Resume
            </a>
            <a
              href="https://github.com/BogamSubhashChandra"
              className="border border-gray-300 px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bogam-subhash-chandra"
              className="border border-gray-300 px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Software Developer with 2.5+ years of professional experience in full-stack development. 
            Skilled in Java, Spring Boot, and Quarkus for backend development, and FlutterFlow for 
            frontend development, with a strong understanding of REST APIs, database integration, 
            and application performance. Experienced in collaborating with cross-functional teams to deliver reliable 
            and scalable software solutions.
          </p>
        </div>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <ul className="list-disc list-inside text-gray-700">
              <li><b>Languages:</b> Java, SQL, Python</li>
              <li><b>Backend:</b> Spring Boot, Quarkus, REST APIs</li>
              <li><b>Frontend:</b> FlutterFlow (UI development & backend integration)</li>
              <li><b>Databases:</b> PostgreSQL, MySQL</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>Tools:</b> Git, Postman, JUnit, Mockito</li>
              <li><b>Cloud:</b> Azure, Docker (basic)</li>
              <li><b>Testing:</b> API & performance testing(BBT)</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold">Banking Application Services</h3>
              <p className="text-sm text-gray-600 mt-1">Java · Spring Boot · PostgreSQL</p>
              <p className="mt-3 text-sm text-gray-700">
                Developed backend services for banking applications including account onboarding
                and transaction processing. Focused on clean API design, database consistency,
                and performance optimization.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold">FASTag Onboarding System</h3>
              <p className="text-sm text-gray-600 mt-1">Quarkus · FlutterFlow · PostgreSQL</p>
              <p className="mt-3 text-sm text-gray-700">
                Built REST APIs for FASTag onboarding and lifecycle management.
                Integrated backend services with a FlutterFlow frontend and ensured
                smooth data validation and workflow handling.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bogam Subhash Chandra · Software Developer
      </footer>
    </main>
  );
}
