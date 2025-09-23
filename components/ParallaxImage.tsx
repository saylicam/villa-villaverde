"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = { src: string; alt: string; aspect?: string };

export default function ParallaxImage({ src, alt, aspect = "4/3" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: aspect }}>
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}
