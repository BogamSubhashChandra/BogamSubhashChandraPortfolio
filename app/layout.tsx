import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bogam Subhash Chandra | Java Full Stack Developer",
  description:
    "Java Full Stack Developer with 2.5+ years experience building scalable microservices and full-stack applications using Spring Boot, Quarkus, FlutterFlow, and cloud technologies. Experienced in banking systems, performance optimization, and distributed architectures.",
  keywords: [
    "Bogam Subhash Chandra",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Quarkus Developer",
    "Microservices Engineer",
    "FlutterFlow Developer",
    "Backend Developer India",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Bogam Subhash Chandra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.variable}
        antialiased
        bg-[#0a0a0a]
        text-white
        [text-rendering:optimizeLegibility]
        [-webkit-font-smoothing:antialiased]
        [-moz-osx-font-smoothing:grayscale]
        selection:bg-white/30`}
        >
          {/* 🔥 Sticky Navbar */}
        <Navbar />
        
        
        {/* 🔥 Scroll Progress Bar */}
        <ScrollProgress />
        

        {/* 🔥 Main Content */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}