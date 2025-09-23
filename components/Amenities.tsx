import { Wifi, Waves, Sun, Car, Snowflake, Tv } from "lucide-react";

const ICONS: Record<string, any> = { Wifi, Waves, Sun, Car, Snowflake, Tv };

export default function Amenities({ items }:{ items: {label:string; icon?:keyof typeof ICONS}[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((it, i) => {
        const Icon = ICONS[it.icon || "Sun"];
        return (
          <li key={i} className="rounded-xl border border-stone-300/60 bg-white p-4 flex items-center gap-3">
            <Icon size={18} />
            <span>{it.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
