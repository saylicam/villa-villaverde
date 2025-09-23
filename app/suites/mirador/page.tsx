// app/suites/mirador/page.tsx
import Section from "@/components/Section";
import Image from "next/image";

const RESA = process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/";

export default function Mirador() {
  return (
    <>
      <Section>
        <h1 className="title-serif h2">Suite Mirador — Étage haut</h1>
        <p className="opacity-80 mt-2">Chambre(s) confortable(s), cuisine haut de gamme, salle à manger et salon panoramique sur les volcans.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            "/images/interiors/bedroom-mirador.jpg",
            "/images/hero/villaverde-volcano-vista.jpg",
            "/images/interiors/kitchen-premium.jpg",
            "/images/hero/villaverde-livingroom-bright.jpg",
          ].map((src)=>(
            <div key={src} className="relative rounded-xl overflow-hidden border border-black/10" style={{aspectRatio:"4/3"}}>
              <Image src={src} alt="Mirador" fill style={{objectFit:"cover"}}/>
            </div>
          ))}
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm opacity-80">
          <li>• 1–2 chambres</li><li>• 1 salle d’eau</li><li>• Cuisine haut de gamme</li>
          <li>• Séjour lumineux</li><li>• Vue volcans</li><li>• Fibre / Wi-Fi</li>
        </ul>
        <a href={RESA} target="_blank" className="btn btn-dark rounded-full px-6 py-3 mt-6 inline-block">Voir disponibilités</a>
      </Section>
    </>
  );
}
