"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Panel = {
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string; // ex: "50% 60%"
};

type Props = {
  heading?: string;
  panels: Panel[];
  /** Conserve la compat API existante (ignoré dans cette version) */
  heightVh?: number;
  /** si ta Navbar est fixed et haute, set à true pour un petit offset de viewport sur mobile */
  navOffset?: boolean;
};

export default function StickyFeaturePanels({
  heading = "Villa Villaverde",
  panels,
  navOffset = true,
}: Props) {
  return (
    <section
      className="relative py-8 md:py-16"
      style={{ paddingTop: navOffset ? "calc(var(--nav-h, 64px) + 1rem)" : undefined }}
    >
      {/* En-tête */}
      <div className="container mb-4 md:mb-10">
        <div className="text-[11px] tracking-widest uppercase text-[color:var(--accent)]/80">
          {heading}
        </div>
      </div>

      {/* Lignes “split-bleed” */}
      <div className="container space-y-16 md:space-y-28">
        {panels.map((p, i) => (
          <FeatureRow key={p.title} panel={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

/** Une ligne : texte + grande image avec parallax doux */
function FeatureRow({ panel, flip }: { panel: Panel; flip: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Parallax & fades déclenchés par le panneau lui-même
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // quand ~20–80% du panneau est dans le viewport
  });

  // Image respire légèrement et glisse subtilement
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  // Texte qui apparaît proprement
  const txtY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const txtOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 items-center gap-8 md:gap-12 min-h-[90vh]"
    >
      {/* Colonne texte */}
      <motion.div
        style={{ y: txtY, opacity: txtOpacity }}
        className={`${flip ? "md:order-2" : ""}`}
      >
        <h3 className="title-display text-3xl md:text-5xl leading-tight">
          {panel.title}
        </h3>
        <p className="lead mt-3 max-w-xl text-[color:var(--muted)]">
          {panel.subtitle}
        </p>
      </motion.div>

      {/* Colonne image (grande, bord-à-bord côté extérieur) */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className={`${flip ? "md:order-1" : ""} relative`}
      >
        <div
          className={[
            // image très généreuse
            "relative w-full h-[60vh] md:h-[72vh]",
            // coins doux + fine bordure + légère lueur : premium, pas gadget
            "overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,.18)]",
            // décalage vers le bord extérieur pour un effet “bleed”
            flip ? "md:ml-[-6vw]" : "md:mr-[-6vw]",
          ].join(" ")}
        >
          <Image
            src={panel.image}
            alt={panel.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{
              objectFit: "cover",
              objectPosition: panel.objectPosition || "50% 50%",
            }}
            priority={false}
          />
          {/* voile très léger pour lisibilité globale */}
          <div className="absolute inset-0 pointer-events-none bg-black/0 md:bg-black/0" />
        </div>
      </motion.div>
    </div>
  );
}
