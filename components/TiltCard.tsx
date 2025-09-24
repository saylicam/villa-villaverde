"use client";

import { ReactElement, ReactNode, cloneElement } from "react";
import { motion } from "framer-motion";

type Props = { children: ReactNode };

export default function TiltCard({ children }: Props) {
  let child = children as ReactElement<any>;

  // On enrichit l’enfant (souvent <a>) : on ne lui ajoute plus de rounded-2xl
  if (child && typeof child === "object" && "props" in child) {
    const prev = child.props.className ?? "";
    child = cloneElement(child, {
      className: `${prev} upgrade-suite-card group`, // pas d'arrondi ici
    });
  }

  return (
    <motion.div
      className="suite-shell"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* cadre discret sans arrondi */}
      <div className="p-[1px] bg-[linear-gradient(140deg,rgba(16,18,21,.10),rgba(16,18,21,.02))]">
        <div className="overflow-visible">{child}</div>
      </div>
    </motion.div>
  );
}



