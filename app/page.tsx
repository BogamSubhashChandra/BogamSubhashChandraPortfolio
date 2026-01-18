"use client";

import ThemeToggle from "@/components/ThemeToggle";
import StatCard from "@/components/StatCard";
import SkillChart from "@/components/SkillChart";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 space-y-10"
    >
      <ThemeToggle />

      <h1 className="text-4xl font-bold accent">
        Bogam Subhash Chandra
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Experience" value="2+ Years" />
        <StatCard title="Projects" value="10+" />
        <StatCard title="Tech Stack" value="Java • Cloud • AI" />
      </div>

      <SkillChart />
    </motion.main>
  );
}
