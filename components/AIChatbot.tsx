"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function AIChatbot() {
  const [message, setMessage] = useState("Ask me anything 👇");
  const [visible, setVisible] = useState(true);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // 🔥 Prevent unnecessary updates
    if (p < 0.3 && message !== "Welcome! I build scalable systems 🚀") {
      setMessage("Welcome! I build scalable systems 🚀");
    } else if (
      p >= 0.3 &&
      p < 0.6 &&
      message !== "I’ve worked on microservices & banking apps 💡"
    ) {
      setMessage("I’ve worked on microservices & banking apps 💡");
    } else if (
      p >= 0.6 &&
      message !== "Let’s connect! I’m open to opportunities 🤝"
    ) {
      setMessage("Let’s connect! I’m open to opportunities 🤝");
    }

    // Optional: hide slightly at top
    setVisible(p > 0.05);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 w-[280px] text-sm text-gray-300 shadow-xl">
        
        {/* Header */}
        <div className="text-white text-xs mb-2 opacity-70">
          AI Assistant
        </div>

        {/* Message */}
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.p>

      </div>
    </motion.div>
  );
}