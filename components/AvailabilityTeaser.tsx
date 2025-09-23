// components/AvailabilityTeaser.tsx — encart “Vos dates ?”
import Link from "next/link";

export default function AvailabilityTeaser() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-[color:var(--ocean)]">Disponibilités</div>
          <div className="title-serif text-xl md:text-2xl font-semibold">Vos dates ?</div>
          <p className="opacity-70 text-sm mt-1">Vérifiez la disponibilité d’une suite ou privatisez toute la villa.</p>
        </div>
        <Link href="/disponibilites" className="btn btn-dark rounded-full px-5 py-2 text-sm text-center">
          Voir le calendrier
        </Link>
      </div>
    </div>
  );
}
