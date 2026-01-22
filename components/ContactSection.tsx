"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
        id="contact"
  className="scroll-mt-20"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
    >
      <div className="container text-center">
        <h2 className="mb-6">Contact</h2>

        <p className="mb-10 text-muted-foreground">
          Feel free to connect with me
        </p>

        <div className="flex justify-center gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/BogamSubhashChandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:scale-110"
          >
            <Github size={28} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bogam-subhash-chandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:scale-110"
          >
            <Linkedin size={28} />
          </a>

          {/* Email */}
          <a
            href="mailto:subhashchandrabogam@gmail.com"
            aria-label="Email"
            className="transition hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
