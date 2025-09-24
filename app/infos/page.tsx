// app/infos/page.tsx — Tarifs & Règles + FAQ
import Section from "@/components/Section";
import Accordion from "@/components/Accordion";

export default function Infos() {
  return (
    <Section>
      <h1 className="title-serif h2">Tarifs & Règles</h1>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <div className="font-medium">Tarifs indicatifs</div>
          <ul className="opacity-80 text-sm mt-2 space-y-1">
            <li>• Basse saison : à partir de €…/nuit</li>
            <li>• Haute saison : à partir de €…/nuit</li>
            <li>• Ménage : €… (une fois)</li>
            <li>• Caution : €… (empreinte)</li>
          </ul>
          <div className="text-xs opacity-60 mt-3">
            Les tarifs exacts et politiques d’annulation s’affichent au moment de la réservation.
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <div className="font-medium">Règles principales</div>
          <ul className="opacity-80 text-sm mt-2 space-y-1">
            <li>• Check-in : 15:00 — Check-out : 11:00</li>
            <li>• Non-fumeur, pas de fêtes</li>
            <li>• Enfants bienvenus (lit bébé sur demande)</li>
            <li>• Animaux : [à préciser]</li>
          </ul>
        </div>
      </div>

      <h2 className="title-serif text-2xl font-semibold mt-10 mb-3">FAQ</h2>

      <Accordion
        items={[
          {
            title: "Comment se passe le check-in ?",
            content:
              "Nous vous envoyons les instructions détaillées quelques jours avant l’arrivée (coffre à clé / accueil sur place selon disponibilité).",
            defaultOpen: true, // (optionnel) ouvert par défaut
          },
          {
            title: "La piscine est-elle chauffée ?",
            content: "[À préciser].",
          },
          {
            title: "Y a-t-il un lit bébé / chaise haute ?",
            content: "Disponible sur demande à la réservation.",
          },
          {
            title: "Politique d’annulation ?",
            content:
              "Selon le portail de réservation (Airbnb/Booking) en attendant notre moteur interne.",
          },
        ]}
      />
    </Section>
  );
}

