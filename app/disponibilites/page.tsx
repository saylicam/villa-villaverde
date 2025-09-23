// app/disponibilites/page.tsx — avec onglets (Mirador / Jardin / Villa)
import Section from "@/components/Section";
import Tabs from "@/components/Tabs";

const RESA = process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/";

function Panel({ title }:{title:string}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
      <div className="title-serif text-xl md:text-2xl font-semibold">{title}</div>
      <p className="opacity-80 mt-2 text-sm">Calendrier à venir (iCal/booking). En attendant, réservez via notre portail.</p>
      <a href={RESA} target="_blank" className="btn btn-dark mt-5 rounded-full px-5 py-2 inline-block">Réserver</a>
    </div>
  );
}

export default function Disponibilites() {
  return (
    <Section>
      <h1 className="title-serif h2">Disponibilités</h1>
      <p className="opacity-80 mt-2">Choisissez votre configuration et consultez les disponibilités.</p>
      <div className="mt-6">
        <Tabs
          tabs={[
            { label: "Suite Mirador", content: <Panel title="Suite Mirador — Étage haut" /> },
            { label: "Suite Jardin", content: <Panel title="Suite Jardin — Niveau piscine" /> },
            { label: "Villa entière", content: <Panel title="Villa entière — Privatisation" /> },
          ]}
        />
      </div>
    </Section>
  );
}
