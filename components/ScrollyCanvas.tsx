"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas({
  frameCount = 75,
}: {
  frameCount?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🔥 ✅ 3D PARALLAX (FIXED POSITION)
  const bgLayer1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgLayer2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // 🔹 Preload Images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < frameCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          const frameId = i.toString().padStart(4, "0");
          img.src = `/sequence/${frameId}.png`;

          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };

          img.onerror = () => resolve();
        });

        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, [frameCount]);

  // 🔹 Render Frame
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 🔹 Scroll Animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;

    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );

    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // 🔹 Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Initial render
  useEffect(() => {
    if (isLoaded) renderFrame(0);
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* 🌄 3D PARALLAX LAYERS */}
        <motion.div
          style={{ y: bgLayer1 }}
          className="fixed inset-0 bg-white/5 -z-30"
        />

        <motion.div
          style={{ y: bgLayer2 }}
          className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] -z-20"
        />

        {/* 🔥 Loading Screen */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 bg-[#121212]">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              Bogam Subhash Chandra
            </p>
            <p className="text-sm text-gray-400 tracking-widest uppercase">
              Loading Experience...
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />

        {/* Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}