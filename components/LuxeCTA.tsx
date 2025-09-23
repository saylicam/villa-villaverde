export default function LuxeCTA({ href }:{ href:string }) {
  return (
    <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[color:var(--gold)] to-transparent">
      <div className="rounded-3xl bg-[color:var(--forest)] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="title-serif text-2xl md:text-3xl font-semibold">Prêt à réserver ?</h3>
          <p className="opacity-90 mt-2">Vérifiez les disponibilités en temps réel.</p>
        </div>
        <a href={href} target="_blank" className="btn btn-primary">Voir les disponibilités</a>
      </div>
    </div>
  );
}
