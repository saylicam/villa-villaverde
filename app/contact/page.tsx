// app/contact/page.tsx
import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section>
      <h1 className="title-serif h2">Contact & Accès</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <form className="rounded-2xl border border-black/10 bg-white p-6 grid gap-3">
          <input className="border border-black/10 rounded-lg px-3 py-2" placeholder="Votre nom"/>
          <input className="border border-black/10 rounded-lg px-3 py-2" placeholder="Votre email"/>
          <textarea className="border border-black/10 rounded-lg px-3 py-2 min-h-[120px]" placeholder="Votre message" />
          <button className="btn btn-dark rounded-full px-5 py-2 w-fit">Envoyer</button>
        </form>
        <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
          <div className="p-6">
            <div className="font-medium">Villa Villaverde</div>
            <div className="opacity-80 text-sm mt-1">Villaverde, Fuerteventura — Espagne</div>
          </div>
          <div className="aspect-[16/10] bg-[url('/images/hero/villaverde-volcano-vista.jpg')] bg-cover bg-center" />
        </div>
      </div>
    </Section>
  );
}
