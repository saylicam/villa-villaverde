// app/galerie/page.tsx — grande galerie (simple, sans lightbox pour l’instant)
import Section from "@/components/Section";
import Image from "next/image";

const IMAGES = [
  "/images/hero/villaverde-pool-sunset.jpg",
  "/images/hero/villaverde-terrace-goldenhour.jpg",
  "/images/hero/villaverde-livingroom-bright.jpg",
  "/images/hero/villaverde-volcano-vista.jpg",
  "/images/hero/villaverde-pool-panorama.jpg",
  "/images/villa/facade-exterieure.jpg",
  "/images/outdoor/garden-terraces.jpg",
  "/images/outdoor/bay-window-lawn.jpg",
  "/images/outdoor/lawn-sunrise.jpg",
  "/images/outdoor/sunset-terrace.jpg",
  "/images/interiors/kitchen-premium.jpg",
  "/images/interiors/bedroom-mirador.jpg",
  "/images/interiors/bedroom-garden.jpg",
  "/images/interiors/bathroom-spa.jpg",
];

export default function Galerie() {
  return (
    <Section>
      <h1 className="title-serif h2">Galerie</h1>
      <p className="opacity-80 mt-2">Intérieurs lumineux, extérieurs minéraux, horizons volcaniques : explorez la villa en images.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {IMAGES.map((src)=>(
          <div key={src} className="relative rounded-xl overflow-hidden border border-black/10" style={{aspectRatio:"16/10"}}>
            <Image src={src} alt="galerie" fill style={{objectFit:"cover"}} />
          </div>
        ))}
      </div>
    </Section>
  );
}
