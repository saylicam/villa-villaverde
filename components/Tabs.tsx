// components/Tabs.tsx — simple onglets (pour Disponibilités)
"use client";
import { useState } from "react";

export default function Tabs({
  tabs,
  initial = 0,
}: {
  tabs: { label: string; content: React.ReactNode }[];
  initial?: number;
}) {
  const [i, setI] = useState(initial);
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t, idx) => (
          <button
            key={t.label}
            onClick={() => setI(idx)}
            className={`px-4 py-2 rounded-full text-sm border ${
              i === idx ? "bg-black text-white border-black" : "bg-white border-black/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{tabs[i].content}</div>
    </div>
  );
}
