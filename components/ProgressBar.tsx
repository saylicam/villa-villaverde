"use client";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-[color:var(--ocean)] to-[color:var(--gold)] origin-left"
      style={{ scaleX: scrollYProgress }} />
  );
}
