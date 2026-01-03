"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";
import type { Variants } from "framer-motion";

/* ================= SEO + ANIMATION VARIANTS ================= */
const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        {/* ===== Primary SEO ===== */}
        <title>Java Backend Developer | Banking & FinTech | Bogam Subhash Chandra</title>
        <meta
          name="description"
          content="Java Backend Developer with 2.5+ years of experience in Banking and FinTech domains. Expertise in Spring Boot, Quarkus, REST APIs, PostgreSQL, and scalable microservices."
        />
        <meta
          name="keywords"
          content="Java Backend Developer, Banking Software Engineer, FinTech Developer, Spring Boot, Quarkus, Microservices, REST APIs"
        />
        <meta name="author" content="Bogam Subhash Chandra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ===== OpenGraph / LinkedIn ===== */}
        <meta property="og:title" content="Java Backend Developer | Banking & FinTech" />
        <meta
          property="og:description"
          content="Experienced Java Backend Developer specializing in Banking and FinTech systems using Spring Boot, Quarkus, and cloud-native microservices." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.vercel.app" />
        <meta property="og:image" content="/og-image.png" />

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Backend Developer | Banking & FinTech" />
        <meta
          name="twitter:description"
          content="Java Backend Developer with Banking & FinTech experience. Spring Boot, Quarkus, REST APIs, PostgreSQL." 
        />
      </Head>

      {/* ===== HERO SECTION ===== */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 sm:py-20"
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
            Java Backend Developer | Banking & FinTech Systems
          </motion.p>

          <motion.p variants={itemVariant} className="mt-2 text-sm sm:text-base opacity-90">
            Spring Boot · Quarkus · Microservices · REST APIs · PostgreSQL
          </motion.p>

          <motion.div variants={itemVariant} className="mt-4 flex justify-center gap-6 flex-wrap text-sm">
            <a href="mailto:subhashchandrabogam@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail size={16} /> subhashchandrabogam@gmail.com
            </a>
            <a href="tel:+918639468821" className="flex items-center gap-2 hover:underline">
              <Phone size={16} /> +91 86394 68821
            </a>
          </motion.div>

          <motion.div variants={itemVariant} className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="/resume.pdf" download className="bg-white text-blue-800 px-6 py-2 rounded-xl font-semibold shadow flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="border border-white px-4 py-2 rounded-xl flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="border border-white px-4 py-2 rounded-xl flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== ABOUT ===== */}
      <motion.section
        id="about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-14 sm:py-16"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Java Backend Developer with 2.5+ years of hands-on experience in Banking and FinTech domains.
            Strong expertise in designing secure, scalable microservices using Spring Boot and Quarkus.
            Proven experience in building RESTful APIs, integrating databases, and supporting high-volume financial transactions.
          </p>
        </div>
      </motion.section>

      {/* ===== SKILLS ===== */}
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
              <li><b>Languages:</b> Java, SQL, Python</li>
              <li><b>Backend:</b> Spring Boot, Quarkus, REST APIs, Microservices</li>
              <li><b>Databases:</b> PostgreSQL, MySQL, MongoDB</li>
            </ul>
            <ul className="list-disc list-inside">
              <li><b>Cloud & DevOps:</b> Azure, Docker</li>
              <li><b>Testing:</b> JUnit, Mockito, Apache JMeter</li>
              <li><b>Tools:</b> Git, Postman, CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ===== PROJECTS ===== */}
      <motion.section
        id="projects"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-14 sm:py-16 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariant} className="p-6 bg-white border rounded-2xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold">Banking Microservices Platform</h3>
              <p className="text-sm text-gray-600 mt-1">Spring Boot · Quarkus · PostgreSQL · Azure</p>
              <p className="mt-3 text-sm">
                Developed secure backend microservices for banking systems including onboarding,
                account management, and transaction workflows. Focused on performance optimization,
                reliability, and regulatory compliance.
              </p>
            </motion.div>

            <motion.div variants={itemVariant} className="p-6 bg-white border rounded-2xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold">FASTag Onboarding & Management System</h3>
              <p className="text-sm text-gray-600 mt-1">Quarkus · FlutterFlow · PostgreSQL</p>
              <p className="mt-3 text-sm">
                Implemented FASTag onboarding and lifecycle management services with Quarkus backend.
                Integrated FlutterFlow frontend and ensured reliable data flow and validation for
                FinTech operations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <motion.footer
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-6 sm:py-8 text-center text-sm"
      >
        © {new Date().getFullYear()} Bogam Subhash Chandra · Java Backend Developer
      </motion.footer>

      {/* ===== Google Analytics (GA4) ===== */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </main>
  );
}
