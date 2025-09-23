"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

type Props = {
  src: string;
  title?: string;
  subtitle?: string;
  heightVh?: number;          // durée de la scène (en vh)
  objectPosition?: string;    // ex: "50% 50%"
};

export default function ParallaxCover({
  src,
  title,
  subtitle,
  heightVh = 180,
  objectPosition = "50% 50%",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // commence quand le bloc entre, finit quand il sort
  });

  // Effets image : zoom léger + translation
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);

  // Opacité du voile (0.25 -> 0.35) puis conversion en couleur CSS
  const overlay = useTransform(scrollYProgress, [0, 1], [0.25, 0.35]);
  const overlayBg = useMotionTemplate`rgba(0, 0, 0, ${overlay})`;

  return (
    <section ref={ref} className="relative" style={{ height: `${heightVh}vh` }}>
      {/* zone sticky qui garde l’image visible pendant la scène */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image
            src={src}
            alt={title || "cover"}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition }}
          />
        </motion.div>

        {/* Voile pour lisibilité du texte */}
        <motion.div
          style={{ backgroundColor: overlayBg }}
          className="absolute inset-0 pointer-events-none"
        />

        {(title || subtitle) && (
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              {title && (
                <h2 className="title-serif h2 text-white drop-shadow">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="lead text-white/90 mt-2 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
