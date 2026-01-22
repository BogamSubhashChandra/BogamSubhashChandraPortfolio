"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function HeroParallax() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="text-center px-4">
        <h1 className="mb-4">Bogam Subhash Chandra</h1>

        <p className="max-w-xl mx-auto mb-8 text-muted-foreground">
          Application Developer — Java Full-Stack with Spring Boot,
          Quarkus & Flutter
        </p>

        {/* ✅ Contact icons with glow + stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-[20px]"
        >
          {/* GitHub */}
          <motion.a
            variants={item}
            href="https://github.com/BogamSubhashChandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform hover:scale-110"
          >
            <Github
              size={28}
              className="text-gray-400 drop-shadow-[0_0_6px_rgba(156,163,175,0.6)]"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={item}
            href="https://www.linkedin.com/in/bogam-subhash-chandra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <Linkedin
              size={28}
              className="text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
            />
          </motion.a>

          {/* Mail */}
          <motion.a
            variants={item}
            href="mailto:subhashchandrabogam@gmail.com"
            aria-label="Email"
            className="transition-transform hover:scale-110"
          >
            <Mail
              size={28}
              className="text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
            />
        
          </motion.a>
          
        </motion.div>
<button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/bogam subhash chandra Resume.pdf";
    link.download = "bogam subhash chandra Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="
    inline-flex items-center justify-center
    px-6 py-3 mb-8
    rounded-full text-sm font-medium
    bg-indigo-600 text-white
    hover:bg-indigo-700
    transition
  "
>
  Download Resume
</button>


      </motion.div>
    </section>
  );
}
