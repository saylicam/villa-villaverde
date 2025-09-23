// app/suites/page.tsx — page d’overview des 3 options
import Section from "@/components/Section";
import Image from "next/image";

export default function Suites() {
  return (
    <Section>
      <h1 className="title-serif h2">Suites & Villa entière</h1>
      <p className="opacity-80 mt-2">Choisissez la configuration qui vous convient : étage haut (Mirador), niveau piscine (Jardin), ou privatisation complète.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { t:"Suite Mirador", img:"/images/interiors/bedroom-mirador.jpg", href:"/suites/mirador" },
          { t:"Suite Jardin", img:"/images/interiors/bedroom-garden.jpg", href:"/suites/jardin" },
          { t:"Villa entière", img:"/images/hero/villaverde-pool-panorama.jpg", href:"/suites/villa" },
        ].map(c=>(
          <a key={c.t} href={c.href} className="block rounded-2xl overflow-hidden border border-black/10 bg-white">
            <div className="relative aspect-[4/3]"><Image src={c.img} alt={c.t} fill style={{objectFit:"cover"}}/></div>
            <div className="p-5 font-medium">{c.t}</div>
          </a>
        ))}
      </div>
    </Section>
  );
}
