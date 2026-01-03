"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import type { Variants } from "framer-motion";

/* ================= ANIMATION SYSTEM ================= */

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
};

/* ================= COMPONENT ================= */

export default function Portfolio() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="portfolio"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-gray-50 text-gray-900 overflow-x-hidden"
      >
        <Head>
          <title>
            Application Developer | Java, Spring Boot, Quarkus, FlutterFlow |
            Bogam Subhash Chandra
          </title>
          <meta
            name="description"
            content="Full-stack Application Developer with experience in Java, Spring Boot, Quarkus, and FlutterFlow."
          />
        </Head>

        {/* ================= HERO ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex items-center border-b border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Bogam Subhash Chandra
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-xl text-gray-700"
            >
              Application Developer · Full Stack (Java & FlutterFlow)
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-gray-600 leading-relaxed"
            >
              Full-stack application developer with experience building backend
              systems using Java, Spring Boot, and Quarkus, and frontend
              applications using FlutterFlow.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-6 text-sm"
            >
              {/* Hover underline animation */}
              <a
                href="mailto:subhashchandrabogam@gmail.com"
                className="relative group"
              >
                <span className="flex items-center gap-2">
                  <Mail size={16} /> subhashchandrabogam@gmail.com
                </span>
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="tel:+918639468821"
                className="relative group"
              >
                <span className="flex items-center gap-2">
                  <Phone size={16} /> +91 86394 68821
                </span>
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/bogam-subhash-chandra-resume.pdf"
                download
                className="relative group bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </span>
              </a>

              <a
                href="https://github.com/BogamSubhashChandra"
                className="relative group border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Github size={16} /> GitHub
                <span className="absolute left-4 right-4 bottom-2 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </a>

              <a
                href="https://www.linkedin.com/in/bogam-subhash-chandra"
                className="relative group border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
                <span className="absolute left-4 right-4 bottom-2 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== Animated Section Divider ===== */}
        <motion.div
          className="h-px bg-gray-200 max-w-6xl mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />

        {/* ================= SKILLS ================= */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>

            {/* Opacity-only animation */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-3 text-gray-700"
            >
              <li><b>Languages:</b> Java, SQL, Python</li>
              <li><b>Backend:</b> Spring Boot, Quarkus, REST APIs</li>
              <li><b>Frontend:</b> FlutterFlow</li>
              <li><b>Databases:</b> PostgreSQL, MySQL</li>
            </motion.ul>
          </div>
        </section>

        {/* ===== Animated Section Divider ===== */}
        <motion.div
          className="h-px bg-gray-200 max-w-6xl mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />

        {/* ================= PROJECTS ================= */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12">Projects</h2>
          <div className="space-y-16">

          {/* ================= FASTag PROJECT (FIRST) ================= */}
          <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="grid md:grid-cols-2 gap-10 items-center
                   border border-gray-200 rounded-2xl p-8
                   hover:shadow-lg hover:border-gray-300"
                   
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden"
        >
          <Image
            src="/fastag.png"
            alt="FASTag Onboarding System"
            width={700}
            height={500}
            className="object-cover rounded-xl"
          />
        </motion.div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold">
            FASTag Onboarding & Management System
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Quarkus · FlutterFlow · PostgreSQL
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Built end-to-end FASTag onboarding and lifecycle management system.
            Developed REST APIs using Quarkus and integrated them with a
            FlutterFlow-based frontend to enable smooth user workflows,
            payment validation, and activation flows.
          </p>
        </div>
      </motion.div>

      {/* ================= BANKING PROJECT (SECOND) ================= */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="grid md:grid-cols-2 gap-10 items-center
                   border border-gray-200 rounded-2xl p-8
                   hover:shadow-lg hover:border-gray-300"
      >
        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold">
            Banking Application Services
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Java · Spring Boot · PostgreSQL
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Developed backend services for banking applications including
            customer onboarding, account management, and transaction
            processing. Focused on clean REST API design, database consistency,
            and performance optimization in enterprise environments.
          </p>
        </div>

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden"
        >
          <Image
            src="/banking.png"
            alt="Banking Application Dashboard"
            width={700}
            height={500}
            className="object-cover rounded-xl"
          />
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>


        {/* ================= FOOTER ================= */}
        <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bogam Subhash Chandra · Application Developer
        </footer>
      </motion.main>
    </AnimatePresence>
  );
}
