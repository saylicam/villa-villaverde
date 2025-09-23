"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

type Props = {
  imageSrc: string;
  imageSrcMobile?: string;
  objectPositionDesktop?: string;
  objectPositionMobile?: string;
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel?: string;
  badge?: string;
  navOffset?: boolean;
};

export default function HeroCinematic({
  imageSrc,
  imageSrcMobile,
  objectPositionDesktop = "50% 55%",
  objectPositionMobile = "50% 45%",
  title,
  subtitle,
  ctaHref,
  ctaLabel = "Réserver",
  badge = "Villaverde • Vue volcans • Piscine privée",
  navOffset = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax discret
  const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-6vh"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0px", "-10px"]);

  // Overlay très léger (via MotionTemplate, compatible Framer v7)
  const overlay = useTransform(scrollYProgress, [0, 1], [0.18, 0.24]);
  const overlayBg = useMotionTemplate`rgba(0, 0, 0, ${overlay})`;

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden grid grid-rows-[1fr_auto]
                 min-h-[680px] md:min-h-[calc(100dvh-var(--nav-h,64px))]
                 pt-[var(--nav-h,64px)]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 md:hidden">
          <Image
            src={imageSrcMobile || imageSrc}
            alt="Villa Villaverde"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: objectPositionMobile }}
          />
        </motion.div>
        {/* Desktop */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 hidden md:block">
          <Image
            src={imageSrc}
            alt="Villa Villaverde"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: objectPositionDesktop }}
          />
        </motion.div>

        {/* Overlays */}
        <motion.div style={{ backgroundColor: overlayBg }} className="absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="container self-start pt-6 md:pt-10 mb-8">
        <span className="chip text-xs bg-white/75 border border-[color:var(--line)] shadow-sm">
          {badge}
        </span>

        <motion.h1
          style={{ y: titleY }}
          className="title-display h1 text-white drop-shadow mt-4 max-w-3xl md:max-w-4xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="lead text-white/90 drop-shadow max-w-2xl mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <Link href={ctaHref} target="_blank" className="btn btn-primary rounded-full px-7 py-3">
            {ctaLabel}
          </Link>
        </motion.div>
      </div>

      {/* Carte d’info bas de Hero */}
      <div className="container w-full pb-[max(env(safe-area-inset-bottom),1rem)] md:pb-8">
        <div className="mx-auto w-[min(92vw,980px)] card shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 p-5 md:p-0">
            <InfoCell label="EMPLACEMENT" value="Villaverde, Fuerteventura" />
            <InfoCell label="CAPACITÉ" value="4–8 voyageurs" />
            <div className="flex items-center justify-between md:justify-center gap-4 md:gap-6 px-0 md:px-8 py-0 md:py-5">
              <div className="min-w-0">
                <div className="text-xs tracking-widest text-black/60 uppercase">TYPE</div>
                <div className="truncate font-medium">2 suites / Villa entière</div>
              </div>
              <Link
                href={ctaHref}
                target="_blank"
                className="btn btn-dark px-5 py-2 text-sm"
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-0 md:px-8 py-0 md:py-5">
      <div className="text-xs tracking-widest text-black/60 uppercase">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

