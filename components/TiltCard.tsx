"use client";

import { ReactElement, ReactNode, cloneElement } from "react";
import { motion } from "framer-motion";

type Props = { children: ReactNode };

export default function TiltCard({ children }: Props) {
  let child = children as ReactElement<any>;
  if (child && typeof child === "object" && "props" in child) {
    const prev = child.props.className ?? "";
    child = cloneElement(child, { className: `${prev} group` });
  }

  return (
    <motion.div
      className="rounded-2xl"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="rounded-2xl p-[1px] bg-[linear-gradient(140deg,rgba(16,18,21,.10),rgba(16,18,21,.02))]">
        <div className="rounded-2xl overflow-visible">
          {child}
        </div>
      </div>
    </motion.div>
  );
}


