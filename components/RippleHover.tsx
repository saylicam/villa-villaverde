"use client";

import { PropsWithChildren, useRef, useState } from "react";

export default function RippleHover({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({x:50, y:50});
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
      className="relative overflow-hidden rounded-[inherit]"
      style={{
        transition: "filter .35s ease",
        filter: hover ? "brightness(1.03)" : "none",
      }}
    >
      {/* glow radial précis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(220px 220px at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--ocean) 18%, transparent), transparent 60%)`,
          opacity: hover ? 1 : 0,
          transition: "opacity .25s ease",
        }}
      />
      {children}
    </div>
  );
}
