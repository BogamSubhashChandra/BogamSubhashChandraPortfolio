"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-16 py-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-center">
        {/* Icons with 20px gap */}
        <div className="flex items-center gap-[20px]">
          {/* GitHub */}
          <a
            href="https://github.com/BogamSubhashChandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform hover:scale-110"
          >
            <Github size={28} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bogam-subhash-chandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>

          {/* Email */}
          <a
            href="mailto:subhashchandrabogam@gmail.com"
            aria-label="Email"
            className="transition-transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
