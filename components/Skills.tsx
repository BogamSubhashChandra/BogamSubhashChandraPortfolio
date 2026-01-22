"use client";

import { motion } from "framer-motion";

const skills = ["Java", "Spring Boot", "Microservices", "Flutter"];

export default function Skills() {
  return (
    <section>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
