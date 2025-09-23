// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-black/5">
      <div className="container py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold">Villa Villaverde</div>
          <p className="opacity-70 mt-2">Villaverde, Fuerteventura, Espagne</p>
        </div>
        <div>
          <div className="font-medium mb-2">Navigation</div>
          <ul className="space-y-1 opacity-80">
            <li><a href="/suites">Suites</a></li>
            <li><a href="/galerie">Galerie</a></li>
            <li><a href="/activites">Activités</a></li>
            <li><a href="/disponibilites">Disponibilités</a></li>
            <li><a href="/infos">Infos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Contact</div>
          <p className="opacity-80">hello@villaverde.example<br/>+34 000 00 00</p>
        </div>
        <div>
          <div className="font-medium mb-2">Réseaux</div>
          <p className="opacity-80">Instagram • Airbnb • Booking</p>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container py-4 text-xs opacity-70">© {new Date().getFullYear()} Villa Villaverde.</div>
      </div>
    </footer>
  );
}
