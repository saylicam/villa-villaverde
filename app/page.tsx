// app/page.tsx
import HeroScrollNarrative from "@/components/HeroScrollNarrative";
import LuxuryScrollShowcase from "@/components/LuxuryScrollShowcase";
import StickyFeaturePanels from "@/components/StickyFeaturePanels";
import Section from "@/components/Section";
import TiltCard from "@/components/TiltCard";
import AvailabilityTeaser from "@/components/AvailabilityTeaser";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ActivityCard, { type Activity } from "@/components/ActivityCard";

const RESA =
  process.env.NEXT_PUBLIC_RESA_URL ||
  "https://volcanoa.vacation-bookings.com/";

// ---- Adresse & cartes
const ADDRESS = "52 Calle Tabaiba, Villaverde 35640, Spain";
const MAP_Q = encodeURIComponent(ADDRESS);
const GMAPS_URL = `https://www.google.com/maps?q=${MAP_Q}`;
const GMAPS_EMBED = `https://maps.google.com/maps?q=${MAP_Q}&z=14&output=embed`;
const APPLE_MAPS_URL = `https://maps.apple.com/?q=${MAP_Q}`;

export default async function Home() {
  return (
    <>
      {/* 1) HERO narratif pinné */}
      <HeroScrollNarrative
        imageSrc="/images/villa/facade-exterieure.jpg"
        imageSrcMobile="/images/villa/facade-exterieure-mobile.jpg"
        objectPositionDesktop="50% 55%"
        objectPositionMobile="50% 45%"
        ctaHref={RESA}
        ctaLabel="Réserver"
        steps={[
          {
            title: "Luxe & sérénité entre volcans et océan",
            subtitle:
              "Votre refuge design à Villaverde — lumière, calme et horizons.",
          },
          {
            title: "Deux niveaux équipés",
            subtitle:
              "Chaque niveau : 3 chambres en suite. Bas 120 m² (6 pers) • Haut 180 m² (7 pers).",
          },
          {
            title: "Villa entière ou niveau au choix",
            subtitle:
              "Louez l’un des deux niveaux, ou privatisez toute la villa pour réunir famille & amis.",
          },
        ]}
      />

      {/* 2) DISPONIBILITÉS */}
      <Section>
        <Reveal>
          <AvailabilityTeaser />
        </Reveal>
      </Section>

     {/* 3) SUITES */}
<Section id="suites" tone="sand">
  <div className="text-center max-w-3xl mx-auto">
    <Reveal><h2 className="title-display h2">Deux suites — ou la villa entière</h2></Reveal>
    <Reveal delay={0.1}>
      <p className="lead mt-3">
        Louez au choix <b>Mirador</b> (étage haut) ou <b>Jardin</b> (niveau piscine).
        Privatisez toute la villa pour réunir famille &amp; amis.
      </p>
    </Reveal>
  </div>

  <div className="mt-8 grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Suite Mirador",
        tag: "Étage haut",
        img: "/images/hero/villaverde-volcano-vista.jpg",
        link: "/suites/mirador",
        bullets: ["3 chambres en suite", "Capacité 7 voyageurs", "180 m²", "Vue volcans"],
      },
      {
        title: "Suite Jardin",
        tag: "Niveau piscine",
        img: "/images/outdoor/garden-terraces.jpg",
        link: "/suites/jardin",
        bullets: ["3 chambres en suite", "Capacité 6 voyageurs", "120 m²", "Accès terrasses & piscine"],
      },
      {
        title: "Villa entière",
        tag: "Privatisation",
        img: "/images/hero/villaverde-pool-panorama.jpg",
        link: "/suites/villa",
        bullets: ["2 niveaux communicants", "6 chambres en suite (6+7 pers)", "300 m² au total", "Idéal familles & réunions"],
      },
    ].map((c, i) => (
      <Reveal key={c.title} delay={0.06 * i}>
        <TiltCard>
          <a href={c.link} className="suite-card group block rounded-2xl transition">
            {/* MEDIA – rectangles PLUS HAUTS (ratio responsif) */}
            <div className="suite-media relative overflow-hidden rounded-2xl aspect-[7/5] md:aspect-[8/5] xl:aspect-[9/5]">
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={i === 0}
              />
              {/* voile de lisibilité bas */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              {/* filet bronze discret au survol */}
              <div className="pointer-events-none absolute inset-y-2 left-2 w-[2px] rounded-full opacity-0 scale-y-90 group-hover:opacity-100 group-hover:scale-y-100 transition duration-300"
                   style={{ background: "linear-gradient(180deg,rgba(176,141,87,0),rgba(176,141,87,.55),rgba(176,141,87,0))" }}/>
            </div>

            {/* PANNEAU “verre” qui chevauche l’image */}
            <div className="-mt-7 md:-mt-8 p-5 rounded-2xl bg-white/85 backdrop-blur-md ring-1 ring-[color:var(--line)] shadow-soft">
              <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">{c.tag}</div>
              <div className="title-serif text-lg font-semibold mt-1">{c.title}</div>
              <ul className="mt-2 text-sm text-[color:var(--muted)] space-y-1">
                {c.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>
          </a>
        </TiltCard>
      </Reveal>
    ))}
  </div>
</Section>


      {/* 4) HIGHLIGHTS (images grandes, effet split-bleed via StickyFeaturePanels) */}
      <StickyFeaturePanels
        heading="Villa Villaverde"
        panels={[
          {
            title: "Design lumineux & matériaux sobres",
            subtitle:
              "Volumes apaisants, circulation fluide, mobilier choisi — un cadre pensé pour ralentir.",
            image: "/images/hero/villaverde-livingroom-bright.jpg",
            objectPosition: "50% 50%",
          },
          {
            title: "Piscine & lounge sunset",
            subtitle:
              "Terrasses, cuisine d’été, douche extérieure — le meilleur spot à l’heure dorée.",
            image: "/images/hero/villaverde-terrace-goldenhour.jpg",
            objectPosition: "50% 60%",
          },
          {
            title: "Panoramas volcaniques",
            subtitle:
              "Depuis Mirador, une ligne d’horizon minérale et changeante au fil du jour.",
            image: "/images/hero/villaverde-volcano-vista.jpg",
            objectPosition: "50% 45%",
          },
        ]}
      />

      {/* 5) SCÈNE PLAGE PINNÉE */}
      <LuxuryScrollShowcase
        src="/images/activities/turquoise-beach.jpg"
        objectPosition="50% 45%"
        heightVh={220}
        steps={[
          {
            title: "Plages turquoise à quelques minutes",
            subtitle:
              "Eau claire, baie abritée et longues promenades face à l’océan.",
          },
          {
            title: "Dunes de Corralejo",
            subtitle: "Désert de sable et horizon océan à perte de vue.",
          },
          {
            title: "Calderón Hondo",
            subtitle: "Balade panoramique sur les cratères volcaniques.",
          },
        ]}
      />

    {/* 6) ACTIVITÉS – posters rectangulaires, rythme décalé */}
<Section id="activites" tone="sand">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="title-display h2">Volcans, dunes & plages</h2>
    <p className="lead mt-2">À quelques minutes — de quoi varier rythmes et horizons.</p>
  </div>

  <div className="mt-8 posters-grid">
    <div className="poster">
      <div className="act-h-tall overflow-hidden ring-1 ring-black/5 shadow-soft poster-rect">
        <ActivityCard
          variant="poster"
          title="Calderón Hondo"
          category="Volcans"
          subtitle="Sentier panoramique (≈ 5–10 min)."
          img="/images/activities/calderon-hondo.jpg"
          href="/activites"
          objectPosition="50% 35%"
        />
      </div>
    </div>

    <div className="poster">
      <div className="act-h-mid overflow-hidden ring-1 ring-black/5 shadow-soft poster-rect">
        <ActivityCard
          variant="poster"
          title="Plage turquoise"
          category="Plages"
          subtitle="Eau claire & baie abritée (≈ 10 min)."
          img="/images/activities/turquoise-beach.jpg"
          href="/activites"
          objectPosition="50% 50%"
        />
      </div>
    </div>

    <div className="poster">
      <div className="act-h-short overflow-hidden ring-1 ring-black/5 shadow-soft poster-rect">
        <ActivityCard
          variant="poster"
          title="Dunes de Corralejo"
          category="Nature"
          subtitle="Désert de sable & océan (≈ 12–15 min)."
          img="/images/activities/corralejo-dunes.jpg"
          href="/activites"
          objectPosition="50% 45%"
        />
      </div>
    </div>

    <div className="poster">
      <div className="act-h-mid overflow-hidden ring-1 ring-black/5 shadow-soft poster-rect">
        <ActivityCard
          variant="poster"
          title="Panoramas volcaniques"
          category="Vue"
          subtitle="Horizon minéral"
          img="/images/hero/villaverde-volcano-vista.jpg"
          href="/activites"
          objectPosition="50% 45%"
        />
      </div>
    </div>
  </div>

  <div className="mt-8 text-center">
    <a href="/activites" className="btn btn-light rounded-full px-5 py-2">
      Voir toutes les activités
    </a>
  </div>
</Section>



      {/* 7) GALERIE */}
      <Section id="galerie">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title-display h2">Galerie</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          {[
            "/images/hero/villaverde-pool-sunset.jpg",
            "/images/villa/facade-exterieure.jpg",
            "/images/outdoor/garden-terraces.jpg",
            "/images/hero/villaverde-terrace-goldenhour.jpg",
            "/images/hero/villaverde-livingroom-bright.jpg",
          ].map((src, idx) => (
            <div
              key={src}
              className={`relative rounded-2xl overflow-hidden ${
                idx === 0 ? "md:col-span-2" : ""
              } card`}
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={src}
                alt={`galerie-${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/galerie"
            className="btn btn-primary rounded-full px-6 py-3 inline-block"
          >
            Ouvrir la galerie
          </a>
        </div>
      </Section>

      {/* 8) ADRESSE, RÈGLES & CARTE */}
      <Section id="acces" tone="sand">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title-display h2">Localisation & Accès</h2>
          <p className="lead mt-2">
            Située à <b>Villaverde</b>, au calme et proche de tout.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Infos / règles */}
          <div className="rounded-2xl overflow-hidden card">
            <div className="p-6 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">
                  Adresse
                </div>
                <div className="mt-1 font-medium">{ADDRESS}</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={GMAPS_URL}
                    target="_blank"
                    className="btn btn-light rounded-full px-4 py-2"
                  >
                    Ouvrir dans Google Maps
                  </a>
                  <a
                    href={APPLE_MAPS_URL}
                    target="_blank"
                    className="btn btn-light rounded-full px-4 py-2"
                  >
                    Ouvrir dans Apple Plans
                  </a>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">
                  Règles
                </div>
                <ul className="mt-2 text-sm text-[color:var(--muted)] space-y-1">
                  <li>• Non-fumeur (intérieur)</li>
                  <li>• Animaux non autorisés</li>
                  <li>• Fêtes/évènements interdits</li>
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">
                  À proximité
                </div>
                <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-[color:var(--muted)]">
                  <li>• Plage turquoise : ≈ 10 min</li>
                  <li>• Dunes de Corralejo : ≈ 12–15 min</li>
                  <li>• Calderón Hondo : ≈ 5–10 min</li>
                  <li>• Aéroport (FUE) : ≈ 30–35 min</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Carte embarquée */}
          <div className="rounded-2xl overflow-hidden card">
            <div className="aspect-[16/10]">
              <iframe
                src={GMAPS_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 9) CTA FINAL */}
      <Section id="reserve">
        <div className="text-center">
          <h2 className="title-display h2">
            Vos dates, votre suite — ou la villa entière
          </h2>
          <p className="lead mt-2">Réservez en quelques clics.</p>
          <a
            href={RESA}
            target="_blank"
            className="btn btn-dark rounded-full px-6 py-3 mt-5 inline-block"
          >
            Voir les disponibilités
          </a>
        </div>
      </Section>
    </>
  );
}


