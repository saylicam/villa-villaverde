"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
  defaultOpen?: boolean;
};

// ⬇️ accepte aussi des objets { q, a } (legacy)
type LegacyItem = { q: string; a: string; defaultOpen?: boolean };

type Props = {
  items?: (AccordionItem | LegacyItem)[];
};

function normalize(it: AccordionItem | LegacyItem): AccordionItem {
  if ("q" in it && "a" in it) {
    return { title: it.q, content: it.a, defaultOpen: (it as LegacyItem).defaultOpen };
  }
  return it as AccordionItem;
}

export default function Accordion({ items = [] }: Props) {
  const normalized = items.map(normalize);
  return (
    <div className="space-y-3">
      {normalized.map((it, i) => (
        <Item key={i} {...it} />
      ))}
    </div>
  );
}

function Item({ title, content, defaultOpen }: AccordionItem) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="rounded-xl border border-[color:var(--line)] bg-white">
      <button
        type="button"
        className="w-full px-4 py-3 text-left flex items-center justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{title}</span>
        <span
          className="inline-grid place-items-center size-7 rounded-full border border-[color:var(--line)]"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" width="18" height="18" className={`transition-transform ${open ? "rotate-180" : ""}`}>
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 text-[color:var(--muted)] leading-relaxed">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
}
