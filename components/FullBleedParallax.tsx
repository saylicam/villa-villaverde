"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FullBleedParallax({
  src,
  title,
  subtitle,
  height = "min-h-[70vh]",
  overlay = true,
  children,
}: {
  src: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);   // déplacement doux
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]); // évite les bords vides

  return (
    <section className={`relative ${height} overflow-hidden`}>
      <motion.div ref={ref} className="absolute inset-0">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image src={src} alt={title || "background"} fill priority style={{ objectFit: "cover" }} />
        </motion.div>
        {overlay && <div className="absolute inset-0 bg-black/35" />}
      </motion.div>

      <div className="relative z-10 container flex items-center justify-center h-full text-center text-white">
        <div className="max-w-3xl">
          {title && <h2 className="title-serif h2">{title}</h2>}
          {subtitle && <p className="lead opacity-90 mt-3">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
