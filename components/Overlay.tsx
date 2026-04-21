"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    text,
    subText,
    align = "center",
    start,
    end,
    scrollYProgress,
}: {
    text: string;
    subText?: string;
    align?: "left" | "center" | "right";
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.05, start, end, end + 0.05],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.05, end + 0.05],
        [50, -50]
    );

    const alignClass =
        align === "left"
            ? "items-start text-left"
            : align === "right"
            ? "items-end text-right"
            : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-8 md:px-20 ${alignClass}`}
        >
            {/* Main Text */}
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white text-shadow-strong">
                {text}
            </h2>

            {/* Sub Text */}
            {subText && (
                <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light tracking-wide max-w-2xl text-shadow-soft">
                    {subText}
                </p>
            )}
        </motion.div>
    );
};

export default function Overlay({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    return (
        <>
            {/* Intro */}
            <Section
                text="Bogam Subhash Chandra."
                subText="Java Full Stack Developer | Microservices & FlutterFlow Specialist"
                align="center"
                start={0.05}
                end={0.2}
                scrollYProgress={scrollYProgress}
            />

            {/* Experience */}
            <Section
                text="2.5+ Years Experience."
                subText="Built scalable microservices and full-stack applications improving performance by 30% for banking systems serving 10K+ users."
                align="left"
                start={0.3}
                end={0.45}
                scrollYProgress={scrollYProgress}
            />

            {/* Expertise */}
            <Section
                text="From APIs to UI — End-to-End."
                subText="Spring Boot, Quarkus, FlutterFlow, Docker & Azure — delivering high-performance systems with 99.9% uptime."
                align="right"
                start={0.6}
                end={0.75}
                scrollYProgress={scrollYProgress}
            />
        </>
    );
}