// app/infos/page.tsx
import Accordion, { type AccordionItem } from "@/components/Accordion";

export const metadata = { title: "Tarifs & Règles — FAQ" };

export default function Infos() {
  const faq: AccordionItem[] = [
    {
      title: "Comment se passe le check-in ?",
      content:
        "Nous vous envoyons les instructions détaillées quelques jours avant l’arrivée (coffre à clé / accueil sur place selon disponibilité).",
      defaultOpen: true,
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
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="title-display h2">Tarifs & Règles — FAQ</h1>

      <div className="mt-6">
        <Accordion items={faq} />
      </div>
    </main>
  );
}


