import { client } from "@/lib/sanity";
import { villaQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

export const metadata = { title: "La Villa — Villa Villaverde" };

export default async function VillaPage() {
  let data: any = null;
  try {
    data = await client.fetch(villaQuery);
  } catch (e) {}

  const title = data?.title ?? "La Villa";
  const desc =
    data?.description ??
    "Villa lumineuse avec piscine privée, idéale pour se reposer et explorer le nord de Fuerteventura.";
  const hero =
    (data?.heroImage && urlFor(data.heroImage)) ||
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop";
  const equipments: string[] =
    data?.equipments ?? ["Piscine privée", "Fibre / Wi-Fi", "Climatisation", "Parking"];

  return (
    <main>
      <section className="relative h-[50vh] min-h-[360px]">
        <Image src={hero} alt={title} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 h-full flex items-end pb-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">{title}</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="opacity-80 leading-relaxed">{desc}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Équipements</h2>
          <ul className="mt-4 space-y-2">
            {equipments.map((e: string, i: number) => (
              <li key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
