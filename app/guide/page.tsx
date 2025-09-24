// app/guide/page.tsx
import ActivityCard from "@/components/ActivityCard";

export const metadata = { title: "Activités & Guide — Villa Villaverde" };

// Images de secours déjà présentes dans ton projet (change si tu veux)
const FALLBACKS = {
  dunes: "/images/activities/corralejo-dunes.jpg",
  beach: "/images/activities/turquoise-beach.jpg",
  hondo: "/images/activities/calderon-hondo.jpg",
  vista: "/images/hero/villaverde-volcano-vista.jpg",
};

export default function GuidePage() {
  // Tu peux brancher des données dynamiques plus tard.
  const items = [
    {
      title: "Dunes de Corralejo",
      category: "Nature",
      subtitle: "Désert de sable & océan (≈ 12–15 min).",
      img: FALLBACKS.dunes,
      href: "/activites",
      objectPosition: "50% 45%",
    },
    {
      title: "Plage turquoise",
      category: "Plages",
      subtitle: "Eau claire & baie abritée (≈ 10 min).",
      img: FALLBACKS.beach,
      href: "/activites",
      objectPosition: "50% 50%",
    },
    {
      title: "Calderón Hondo",
      category: "Volcans",
      subtitle: "Sentier panoramique (≈ 5–10 min).",
      img: FALLBACKS.hondo,
      href: "/activites",
      objectPosition: "50% 35%",
    },
    {
      title: "Panoramas volcaniques",
      category: "Vue",
      subtitle: "Horizon minéral",
      img: FALLBACKS.vista,
      href: "/activites",
      objectPosition: "50% 45%",
    },
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
            img={it.img}
            href={it.href}
            objectPosition={it.objectPosition}
            variant="poster"
          />
        ))}
      </div>
    </main>
  );
}
