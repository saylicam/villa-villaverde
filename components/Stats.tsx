"use client";
import { useEffect, useRef, useState } from "react";

function useCount(end: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.floor(end * (1 - Math.pow(1 - p, 2))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration]);
  return val;
}

export default function Stats() {
  const nights = useCount(250);
  const rating = useCount(49); // 4.9
  const guests = useCount(1200);

  return (
    <div className="grid sm:grid-cols-3 gap-6 text-center">
      <div className="gold-border rounded-2xl p-6 bg-white">
        <div className="title-serif text-3xl">{nights}+</div>
        <div className="opacity-70 mt-1 text-sm">Nuits accueillies</div>
      </div>
      <div className="gold-border rounded-2xl p-6 bg-white">
        <div className="title-serif text-3xl">{(rating/10).toFixed(1)}</div>
        <div className="opacity-70 mt-1 text-sm">Note moyenne</div>
      </div>
      <div className="gold-border rounded-2xl p-6 bg-white">
        <div className="title-serif text-3xl">{guests}+</div>
        <div className="opacity-70 mt-1 text-sm">Voyageurs heureux</div>
      </div>
    </div>
  );
}
