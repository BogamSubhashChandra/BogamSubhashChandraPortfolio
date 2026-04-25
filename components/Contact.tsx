"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/BogamSubhashChandra",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bogam-subhash-chandra",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:subhashchandrabogam@gmail.com",
  },
];

export default function Contact() {
  return (
    <motion.section
  id="contact"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-40 px-6 text-center"
>
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white"
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 mb-16 text-lg">
          Open to opportunities, collaborations, and building impactful systems.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl text-white">
                {item.icon}
              </div>

              <span className="text-white font-medium">
                {item.name}
              </span>
            </motion.a>
          ))}
        </div>

    
        <a
          href="/Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
          download="Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
          className="mt-12 inline-block px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}