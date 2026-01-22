"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ScreenshotGallery({
  images,
}: {
  images: string[];
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">
        Screenshots
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden border"
          >
            <Image
              src={src}
              alt="Project screenshot"
              width={800}
              height={450}
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
