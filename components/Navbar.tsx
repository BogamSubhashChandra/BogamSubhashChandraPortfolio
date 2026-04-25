"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaFileDownload } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

const sections = ["overview", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("overview");
  const [openResume, setOpenResume] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // 🔥 REAL SCROLL DETECTION (SECTION BASED)
  useEffect(() => {
  const handleScroll = () => {
    let current = "overview";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();

      // 🔥 Section is considered active when it's near top
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = id;
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // initial run

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* 🔥 LOGO = OVERVIEW */}
          <a
            href="#overview"
            className={`font-semibold transition ${
              active === "overview" ? "text-white" : "text-gray-400"
            }`}
          >
            Subhash Chandra
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm relative">

            {sections.slice(1).map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`relative px-1 transition ${
                  active === sec
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {sec}

                {/* 🔥 Animated underline */}
                {active === sec && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-white"
                  />
                )}
              </a>
            ))}

            {/* 👁 Preview */}
            <button
              onClick={() => setOpenResume(true)}
              className="relative group w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-blue-500 transition"
            >
              <FaEye />
              <span className="tooltip absolute -bottom-10 text-xs bg-black px-2 py-1 rounded">
                Preview Resume
              </span>
            </button>

            {/* 📄 Download */}
            <a
              href="/Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
              download
              className="relative group w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-green-500 transition"
            >
              <FaFileDownload />
              <span className="tooltip absolute -bottom-10 text-xs bg-black px-2 py-1 rounded">
                Download Resume
              </span>
            </a>

          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {openMenu && (
          <div className="md:hidden bg-black/90 flex flex-col items-center gap-6 py-6">

            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setOpenMenu(false)}
                className="text-white text-lg"
              >
                {sec}
              </a>
            ))}

            <button
              onClick={() => {
                setOpenResume(true);
                setOpenMenu(false);
              }}
              className="text-white"
            >
              Preview Resume
            </button>

            <a
              href="/Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
              download
              className="text-white"
            >
              Download Resume
            </a>
          </div>
        )}
      </motion.nav>

      <ResumeModal open={openResume} onClose={() => setOpenResume(false)} />
    </>
  );
}