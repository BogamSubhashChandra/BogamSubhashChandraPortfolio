"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";


/* ================= SAFE ANIMATIONS ================= */

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/* ================= PAGE ================= */

export default function Page() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="portfolio"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        style={{ padding: "3rem 1.25rem", maxWidth: 1100, margin: "auto" }}
      >
        <ThemeToggle />

        {/* ================= HERO ================= */}
        <section style={{ marginTop: "4rem" }}>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: "3rem", fontWeight: 800 }}
          >
            Bogam Subhash Chandra
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginTop: "1rem", fontSize: "1.25rem", opacity: 0.85 }}
          >
            Application Developer · Java · Spring Boot · FlutterFlow
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginTop: "1.5rem", maxWidth: 720, opacity: 0.9 }}
          >
            Full-stack developer experienced in building scalable backend systems
            using Java, Spring Boot, and Quarkus, and modern frontend applications
            using FlutterFlow.
          </motion.p>
        </section>

        {/* ================= ICON ACTIONS ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <IconButton
            icon={<Download size={22} />}
            label="Resume"
            href="/bogam-subhash-chandra-resume.pdf"
            download
          />
          <IconButton
            icon={<Github size={22} />}
            label="GitHub"
            href="https://github.com/BogamSubhashChandra"
          />
          <IconButton
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/bogam-subhash-chandra"
          />
        </motion.div>

        {/* ================= SKILLS ================= */}
        <section style={{ marginTop: "6rem" }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
            <SkillBar label="Java" value={90} />
            <SkillBar label="Spring Boot / Quarkus" value={85} />
            <SkillBar label="FlutterFlow" value={75} />
            <SkillBar label="PostgreSQL / MySQL" value={80} />
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section style={{ marginTop: "6rem" }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <ProjectCard
            title="FASTag Onboarding & Management System"
            tech="Quarkus · FlutterFlow · PostgreSQL"
            desc="End-to-end FASTag onboarding system with secure APIs and smooth user experience."
            image="/fastag.png"
          />

          <ProjectCard
            title="Banking Application Services"
            tech="Java · Spring Boot · PostgreSQL"
            desc="Enterprise-grade backend services for customer onboarding and transaction processing."
            image="/banking.png"
          />
        </section>

        {/* ================= FOOTER ================= */}
        <footer style={{ marginTop: "6rem", textAlign: "center", opacity: 0.7 }}>
          © {new Date().getFullYear()} Bogam Subhash Chandra
        </footer>
      </motion.main>
    </AnimatePresence>
  );
}

/* ================= COMPONENTS ================= */

function IconButton({
  icon,
  label,
  href,
  download,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  download?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "1px solid var(--border-color)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 12 }}>{label}</span>
    </motion.a>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{label}</strong>
        <span>{value}%</span>
      </div>

      <div
        style={{
          height: 10,
          background: "var(--border-color)",
          borderRadius: 999,
          marginTop: 6,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.2 }}
          style={{
            height: "100%",
            background: "var(--text-color)",
            borderRadius: 999,
          }}
        />
      </div>
    </motion.div>
  );
}
function ProjectCard({
  title,
  tech,
  desc,
  image,
  link,
}: {
  title: string;
  tech: string;
  desc: string;
  image: string;
  link?: string;
}) {
  return (
    <motion.a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{
          marginTop: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
          border: "1px solid var(--border-color)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          style={{ borderRadius: 12, overflow: "hidden" }}
        >
          <Image src={image} alt={title} width={400} height={250} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </motion.div>

        {/* DESCRIPTION */}
        <div>
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <p style={{ opacity: 0.7 }}>{tech}</p>
          <p style={{ marginTop: "0.75rem" }}>{desc}</p>
          {link && <p style={{ marginTop: "0.5rem", fontSize: 12, opacity: 0.6 }}>Click to view →</p>}
        </div>
      </motion.div>
    </motion.a>
  );
}

