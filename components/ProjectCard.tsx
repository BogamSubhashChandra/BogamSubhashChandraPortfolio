"use client";

import Image from "next/image";
import { motion, Variants, easeInOut } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  img: string;
  link?: string;
}

export default function ProjectCard({ title, description, stack, img, link }: ProjectCardProps) {
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };

  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -4 }}
      className="grid md:grid-cols-2 gap-6 items-center p-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stack}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      <div className="rounded-xl overflow-hidden">
        <Image src={img} alt={title} width={700} height={400} className="object-cover rounded-xl" />
      </div>
    </motion.a>
  );
}
