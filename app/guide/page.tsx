import { client } from "@/lib/sanity";
import { activitiesQuery } from "@/lib/queries";
import ActivityCard from "@/components/ActivityCard";

export const metadata = { title: "Activités & Guide — Villa Villaverde" };

export default async function GuidePage() {
  let items: any[] = [];
  try {
    items = await client.fetch(activitiesQuery);
  } catch (e) {}

  const hasData = items && items.length > 0;
  if (!hasData) {
    // Fallback demo
    items = [
      { title: "Dunes de Corralejo", category: "Plage", distance: "15 min" },
      { title: "El Cotillo", category: "Plage", distance: "20 min" },
      { title: "Surf — Flag Beach", category: "Surf", distance: "18 min" },
      { title: "Rando volcan Calderon Hondo", category: "Rando", distance: "12 min" },
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
          <ActivityCard key={it._id || it.title} item={it} />
        ))}
      </div>
    </main>
  );
}
