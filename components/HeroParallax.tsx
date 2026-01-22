"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref}  className="relative min-h-[90vh] flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="text-center px-6">
        <h1 className="mb-6">Bogam Subhash Chandra</h1>
        <p className="max-w-xl mx-auto">
          Application Developer — Java Full-Stack with experience in
          Spring Boot, Quarkus & Flutter-Flow.
        </p>
      </motion.div>
    </section>
  );
}
