import ActivityCard from "@/components/ActivityCard";
import { client } from "@/lib/sanity";
import { activitiesQuery } from "@/lib/queries";

export const metadata = { title: "Activités & Guide — Villa Villaverde" };

export default async function GuidePage() {
  // Récup Sanity
  let items: any[] = [];
  try {
    items = await client.fetch(activitiesQuery);
  } catch {
    /* ignore */
  }

  // Fallback si pas de données
  if (!items || items.length === 0) {
    items = [
      { title: "Dunes de Corralejo", category: "Plages", distance: "≈ 15 min" },
      { title: "El Cotillo", category: "Plages", distance: "≈ 20 min" },
      { title: "Surf — Flag Beach", category: "Nautique", distance: "≈ 18 min" },
      { title: "Calderón Hondo", category: "Volcans", distance: "≈ 12 min" },
    ];
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Activités & Guide</h1>
      <p className="opacity-80 mt-3">
        Nos idées autour de Villaverde : plages, surf, randos, villages & sunsets.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {items.map((it: any) => (
          <ActivityCard
            key={it._id ?? it.title}
            title={it.title}
            category={it.category}
            subtitle={it.subtitle ?? it.distance}
            img={it.img}
            href={it.href}
            objectPosition={it.objectPosition}
            variant={it.variant ?? "poster"}
          />
        ))}
      </div>
    </main>
  );
}


