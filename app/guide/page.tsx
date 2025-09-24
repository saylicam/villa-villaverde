// app/guide/page.tsx
import ActivityCard from "@/components/ActivityCard";

export const metadata = { title: "Activités & Guide — Villa Villaverde" };

export default async function GuidePage() {
  // Données locales (sans Sanity)
  const items = [
    { title: "Dunes de Corralejo", category: "Plages",  subtitle: "≈ 15 min" },
    { title: "El Cotillo",         category: "Plages",  subtitle: "≈ 20 min" },
    { title: "Surf — Flag Beach",  category: "Nautique",subtitle: "≈ 18 min" },
    { title: "Calderón Hondo",     category: "Volcans", subtitle: "≈ 12 min" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Activités & Guide</h1>
      <p className="opacity-80 mt-3">
        Nos idées autour de Villaverde : plages, surf, randos, villages & sunsets.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {items.map((it) => (
          <ActivityCard
            key={it.title}
            title={it.title}
            category={it.category}
            subtitle={it.subtitle}
            // optionnels si tu veux afficher une image/lien :
            // img="/images/..." href="/activites/..."
            variant="poster"
          />
        ))}
      </div>
    </main>
  );
}
