// app/activites/page.tsx
import Section from "@/components/Section";
import Image from "next/image";

const ACTIVITIES = [
  { t:"Calderón Hondo", k:"Volcans", p:"Sentier panoramique autour du cratère (≈ 5–10 min).", img:"/images/activities/calderon-hondo.jpg" },
  { t:"Dunes de Corralejo", k:"Nature", p:"Immenses dunes blondes entre volcan et océan (≈ 12–15 min).", img:"/images/activities/corralejo-dunes.jpg" },
  { t:"Plage turquoise", k:"Plages", p:"Eau claire & baie abritée (≈ 10 min).", img:"/images/activities/turquoise-beach.jpg" },
  { t:"El Cotillo", k:"Coucher de soleil", p:"Lagons, criques et sunsets à l’ouest (≈ 20–25 min).", img:"/images/outdoor/sunset-terrace.jpg" },
  { t:"Surf & boat trips", k:"Nautique", p:"Spots et écoles pour tous niveaux (≈ 10–20 min).", img:"/images/activities/turquoise-beach.jpg" },
  { t:"Restaurants", k:"Food", p:"Tapas locales & fruits de mer (Villaverde, Lajares, Corralejo).", img:"/images/outdoor/garden-terraces.jpg" },
];

export default function Activites() {
  return (
    <Section>
      <h1 className="title-serif h2">Activités autour de la villa</h1>
      <p className="opacity-80 mt-2">Découvrez les paysages volcaniques, les plages turquoise et les meilleures adresses à proximité.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ACTIVITIES.map((it)=>(
          <div key={it.t} className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <div className="relative aspect-[4/3]"><Image src={it.img} alt={it.t} fill style={{objectFit:"cover"}} /></div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-wide text-[color:var(--ocean)]">{it.k}</div>
              <div className="font-medium mt-1">{it.t}</div>
              <div className="opacity-70 text-sm mt-1">{it.p}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
