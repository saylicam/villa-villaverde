"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorAura() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 25, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 25, mass: 0.4 });

  useEffect(() => {
    const h = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed z-[9999] w-[260px] h-[260px] rounded-full"
    >
      {/* anneau doux */}
      <div className="absolute inset-0 rounded-full"
           style={{ boxShadow: `0 0 120px 60px color-mix(in oklab, var(--ocean) 30%, transparent)` }} />
      {/* centre léger */}
      <div className="absolute inset-0 rounded-full"
           style={{ boxShadow: `0 0 80px 20px color-mix(in oklab, var(--forest) 25%, transparent)` }} />
    </motion.div>
  );
}
