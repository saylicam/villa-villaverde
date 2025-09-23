"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.3 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        x: sx, y: sy,
        background:
          "radial-gradient(circle at 50% 50%, rgba(39,193,165,.35), transparent 60%), radial-gradient(circle at 60% 40%, rgba(200,169,106,.35), transparent 55%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
