// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/suites", label: "Suites" },
  { href: "/galerie", label: "Galerie" },
  { href: "/activites", label: "Activités" },
  { href: "/disponibilites", label: "Disponibilités" },
  { href: "/infos", label: "Infos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Villa Villaverde</Link>
        <nav className="hidden md:flex items-center gap-5">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className={`text-sm hover:opacity-80 ${path===l.href?"font-medium":""}`}>{l.label}</Link>
          ))}
          <a href={process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/"} target="_blank" className="btn btn-dark rounded-full px-5 py-2 text-sm">Réserver</a>
        </nav>
        <button className="md:hidden btn px-3 py-1" onClick={()=>setOpen(v=>!v)}>Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="container py-2 flex flex-col">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className="py-2 border-b border-black/5" onClick={()=>setOpen(false)}>{l.label}</Link>
            ))}
            <a href={process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/"} target="_blank" className="py-3 text-center font-medium">Réserver</a>
          </div>
        </div>
      )}
    </header>
  );
}



