"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

type Step = { title: string; subtitle?: string };
type Props = {
  src: string;
  objectPosition?: string;
  steps: Step[];           // 2–5 étapes
  heightVh?: number;       // durée de la scène
  maskFadeBottom?: boolean;
};

export default function DestinationShowcase({
  src,
  steps,
  objectPosition = "50% 40%",
  heightVh = 220,
  maskFadeBottom = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);
  const veil = useTransform(scrollYProgress, [0, 1], [0.18, 0.32]);
  const veilBg = useMotionTemplate`rgba(0,0,0,${veil})`;

  const items = steps.map((_, i) => {
    const t = steps.length;
    const start = Math.max(0, (i / t) - 0.05);
    const peak  = (i + 0.5) / t;
    const end   = Math.min(1, ((i + 1) / t) + 0.05);
    const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [start, peak, end], [16, 0, -16]);
    return { opacity, y };
  });

  return (
    <section ref={ref} className="relative" style={{ height: `${heightVh}vh` }}>
      <div className={`sticky top-0 h-[100dvh] overflow-hidden ${maskFadeBottom ? "mask-fade-b" : ""}`}>
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image src={src} alt="Destination" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition }} />
        </motion.div>

        <motion.div style={{ backgroundColor: veilBg }} className="absolute inset-0 pointer-events-none" />

        {/* Steps centrés */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            {steps.map((s, i) => (
              <motion.div key={i} style={items[i]} className="absolute inset-x-0">
                <h2 className="title-serif h2 text-white drop-shadow">{s.title}</h2>
                {s.subtitle && <p className="lead text-white/90 mt-2 max-w-2xl mx-auto">{s.subtitle}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
