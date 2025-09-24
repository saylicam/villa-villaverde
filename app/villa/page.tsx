// app/villa/page.tsx
import Image from "next/image";
import Section from "@/components/Section";

export const metadata = { title: "La Villa — Villa Villaverde" };

// Données locales (remplacent Sanity)
const TITLE = "La Villa";
const DESC =
  "Villa lumineuse avec piscine privée, idéale pour se reposer et explorer le nord de Fuerteventura.";
const HERO = "/images/hero/villaverde-livingroom-bright.jpg"; // mets l’image que tu veux ici
const EQUIPMENTS: string[] = [
  "Piscine privée",
  "Fibre / Wi-Fi",
  "Climatisation",
  "Parking",
];

export default function VillaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px]">
        <Image
          src={HERO}
          alt={TITLE}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 h-full flex items-end pb-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">{TITLE}</h1>
        </div>
      </section>

      {/* Contenu */}
      <Section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="opacity-80 leading-relaxed">{DESC}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Équipements</h2>
            <ul className="mt-4 space-y-2">
              {EQUIPMENTS.map((e, i) => (
                <li key={i} className="rounded-lg border border-black/10 bg-white px-3 py-2">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
