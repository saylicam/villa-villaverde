"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

type Step = { title: string; subtitle?: string };
type Props = {
  src: string;
  objectPosition?: string;
  steps: Step[];
  heightVh?: number;
};

export default function LuxuryScrollShowcase({
  src,
  steps,
  objectPosition = "50% 40%",
  heightVh = 220,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const yImg  = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);

  const veil = useTransform(scrollYProgress, [0, 1], [0.16, 0.28]);
  const veilBg = useMotionTemplate`rgba(0, 0, 0, ${veil})`;

  const items = steps.map((_, i) => {
    const t = steps.length;
    const start = Math.max(0, (i / t) - 0.08);
    const peak  = (i + 0.5) / t;
    const end   = Math.min(1, ((i + 1) / t) + 0.08);
    const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
    const y       = useTransform(scrollYProgress, [start, peak, end], [16, 0, -16]);
    return { opacity, y };
  });

  return (
    <section ref={ref} className="relative" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div style={{ scale, y: yImg }} className="absolute inset-0">
          <Image src={src} alt="" fill priority sizes="100vw"
                 style={{ objectFit: "cover", objectPosition }} />
        </motion.div>

        <motion.div style={{ backgroundColor: veilBg }} className="absolute inset-0" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="relative w-full max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={i} style={items[i]} className="absolute inset-x-0">
                <h2 className="title-display h2 text-white drop-shadow">{s.title}</h2>
                {s.subtitle && <p className="lead text-white/90 mt-2">{s.subtitle}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
    </section>
  );
}

