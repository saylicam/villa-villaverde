// app/suites/villa/page.tsx — privatisation
import Section from "@/components/Section";
import Image from "next/image";

const RESA = process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/";

export default function VillaEntire() {
  return (
    <Section>
      <h1 className="title-serif h2">Villa entière — Mirador + Jardin</h1>
      <p className="opacity-80 mt-2">Réunissez les deux niveaux pour profiter de tous les espaces : deux cuisines, deux séjours, circulation intérieur/extérieur.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {[
          "/images/hero/villaverde-pool-panorama.jpg",
          "/images/interiors/kitchen-premium.jpg",
          "/images/outdoor/garden-terraces.jpg",
          "/images/hero/villaverde-terrace-goldenhour.jpg",
          "/images/interiors/bedroom-mirador.jpg",
          "/images/interiors/bedroom-garden.jpg",
        ].map((src)=>(
          <div key={src} className="relative rounded-xl overflow-hidden border border-black/10" style={{aspectRatio:"4/3"}}>
            <Image src={src} alt="Villa entière" fill style={{objectFit:"cover"}}/>
          </div>
        ))}
      </div>
      <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm opacity-80">
        <li>• 2 niveaux</li><li>• 2 cuisines</li><li>• 2 séjours</li>
        <li>• Piscine & extérieurs</li><li>• 2× salles d’eau</li><li>• Fibre / Wi-Fi</li>
      </ul>
      <a href={RESA} target="_blank" className="btn btn-dark rounded-full px-6 py-3 mt-6 inline-block">Voir disponibilités</a>
    </Section>
  );
}
