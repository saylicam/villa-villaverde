"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

type Step = { title: string; subtitle?: string };

type Props = {
  imageSrc: string;               // image desktop
  imageSrcMobile?: string;        // image mobile (facultatif)
  objectPositionDesktop?: string; // ex. "50% 55%"
  objectPositionMobile?: string;  // ex. "50% 45%"
  steps: Step[];                  // étapes du récit (1–3)
  ctaHref: string;
  ctaLabel?: string;
  badge?: string;
  /** durée de la scène sticky en vh (180 ≈ 1.8 écrans) */
  heightVh?: number;
};

export default function HeroScrollNarrative({
  imageSrc,
  imageSrcMobile,
  objectPositionDesktop = "50% 55%",
  objectPositionMobile = "50% 45%",
  steps,
  ctaHref,
  ctaLabel = "Réserver",
  badge = "Villaverde • Vue volcans • Piscine privée",
  heightVh = 180,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // pin du début à la fin
  });

  // Parallax discret de l'image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0vh", "-8vh"]);

  // Voile global renforcé pour lisibilité (monte avec le scroll)
  const veil = useTransform(scrollYProgress, [0, 1], [0.32, 0.48]);
  const veilBg = useMotionTemplate`rgba(0, 0, 0, ${veil})`;

  // Étapes typographiques (crossfade & slide)
  const items = steps.map((_, i) => {
    const t = steps.length;
    const start = Math.max(0, i / t - 0.08);
    const peak = (i + 0.5) / t;
    const end = Math.min(1, (i + 1) / t + 0.08);
    const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [start, peak, end], [18, 0, -18]);
    return { opacity, y };
  });

  return (
    <section
      ref={ref}
      className="relative isolate"
      style={{
        height: `${heightVh}vh`,
        paddingTop: "var(--nav-h, 64px)",
      }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Images */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{ scale, y: yImg }}
          aria-hidden
        >
          <Image
            src={imageSrcMobile || imageSrc}
            alt="Villa Villaverde"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: objectPositionMobile }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{ scale, y: yImg }}
          aria-hidden
        >
          <Image
            src={imageSrc}
            alt="Villa Villaverde"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: objectPositionDesktop }}
          />
        </motion.div>

        {/* Overlays pour lisibilité */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: veilBg }}
          aria-hidden
        />
        <div className="hero-veil" aria-hidden />
        {/* Boost radial sous le bloc texte pour renforcer la lecture */}
        <div className="hero-veil-boost" aria-hidden />
        {/* Dégradé bas pour séparer du contenu suivant */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent"
          aria-hidden
        />

        {/* Badge top */}
        <div className="relative z-10">
          <div className="container pt-6 md:pt-8">
            <span className="chip text-xs bg-white/85">{badge}</span>
          </div>
        </div>

        {/* Steps (titres + sous-titres) */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={i} className="absolute inset-x-0" style={items[i]}>
                <h1 className="title-display h1 title-on-image">
                  {s.title}
                </h1>
                {s.subtitle ? (
                  <p className="lead lead-on-image mt-3 max-w-3xl mx-auto">
                    {s.subtitle}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA bas droite */}
        <div className="relative z-10">
          <div className="container pb-8 md:pb-10">
            <div className="flex justify-end">
              <Link
                href={ctaHref}
                target="_blank"
                className="btn btn-primary rounded-full px-7 py-3"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
