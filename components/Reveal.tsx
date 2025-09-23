"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number; y?: number; once?: boolean }>;

export default function Reveal({ children, delay = 0.05, y = 24, once = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
