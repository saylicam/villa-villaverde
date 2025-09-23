import type { Metadata } from "next";
import ReserveForm from "@/components/ReserveForm";

const RESA = process.env.NEXT_PUBLIC_RESA_URL || "https://volcanoa.vacation-bookings.com/";

export const metadata: Metadata = {
  title: "Disponibilités & Réserver — Villa Villaverde",
  description:
    "Vérifiez les disponibilités et réservez la villa à Villaverde (Fuerteventura).",
};

export default function ReservePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Disponibilités & Réserver</h1>
      <p className="opacity-80 mt-3">
        Consultez les disponibilités en temps réel sur notre plateforme de réservation.
      </p>

      {/* Formulaire client (dates + bouton) */}
      <ReserveForm resaUrl={RESA} />

      <p className="text-sm opacity-70 mt-6">
        À terme, on affichera ici un calendrier natif synchronisé (iCal), puis le paiement direct.
      </p>
    </div>
  );
}
