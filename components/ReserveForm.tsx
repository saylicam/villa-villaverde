"use client";
import { useState } from "react";

export default function ReserveForm({ resaUrl }: { resaUrl: string }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const go = () => {
    try {
      const url = new URL(resaUrl);
      if (start) url.searchParams.set("start", start);
      if (end) url.searchParams.set("end", end);
      window.open(url.toString(), "_blank");
    } catch {
      window.open(resaUrl, "_blank");
    }
  };

  return (
    <div className="mt-8 grid sm:grid-cols-2 gap-4">
      <div>
        <label className="text-sm opacity-80">Arrivée</label>
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="mt-1 w-full rounded-lg border border-black/20 bg-transparent px-3 py-2"
        />
      </div>
      <div>
        <label className="text-sm opacity-80">Départ</label>
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="mt-1 w-full rounded-lg border border-black/20 bg-transparent px-3 py-2"
        />
      </div>

      <button
        onClick={go}
        className="sm:col-span-2 mt-2 rounded-full px-6 py-3 bg-black text-white hover:opacity-90 transition"
      >
        Vérifier & réserver
      </button>
    </div>
  );
}
