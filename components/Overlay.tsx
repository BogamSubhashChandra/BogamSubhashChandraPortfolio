"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

/* ✨ Character-by-character animation */
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-center will-change-auto">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.015 }}
          className="whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

/* 🎬 Section */
const Section = ({
  text,
  subText,
  start,
  end,
  scrollYProgress,
}: {
  text: string;
  subText?: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}) => {
  // ✅ Smooth fade (NO blur)
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  // ✅ Very subtle motion (safe, no blur)
  const y = useTransform(scrollYProgress, [start, end], [40, -40]);

  const scale = useTransform(scrollYProgress, [start, end], [0.98, 1]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6 pointer-events-none"
    >
      {/* ✅ Background depth ONLY (safe) */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* ✨ Crisp Text */}
      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight [text-rendering:optimizeLegibility]">
        <AnimatedText text={text} />
      </h2>

      {/* Subtitle */}
      {subText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-lg text-gray-300 mt-4 max-w-2xl leading-relaxed"
        >
          {subText}
        </motion.p>
      )}
    </motion.div>
  );
};

/* 🔥 Overlay Controller */
export default function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <>
      <Section
        text="Bogam Subhash Chandra"
        subText="Java Full Stack Developer"
        start={0.05}
        end={0.2}
        scrollYProgress={scrollYProgress}
      />

      <Section
        text="Built for Scale"
        subText="Microservices handling 10K+ users efficiently"
        start={0.25}
        end={0.4}
        scrollYProgress={scrollYProgress}
      />

      <Section
        text="Performance Driven"
        subText="Reduced API latency by 30%"
        start={0.45}
        end={0.6}
        scrollYProgress={scrollYProgress}
      />

      <Section
        text="End-to-End Builder"
        subText="Backend systems + FlutterFlow UI"
        start={0.65}
        end={0.8}
        scrollYProgress={scrollYProgress}
      />
    </>
  );
}