import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="border-t border-rahmen bg-flaeche">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-schrift">
        <p className="font-bold">Hoffnungsfaden e. V.</p>

        <address className="not-italic">
          Friedensstraße 1, 97990 Weikersheim<br />
          Telefon 07934/4422 · kontakt@hoffnungsfaden.de
        </address>

        <nav aria-label="Rechtliche Hinweise" className="mt-4">
          <ul className="flex gap-4">
            <li><Link to="/impressum" className="underline hover:text-primaer">Impressum</Link></li>
            <li><Link to="/datenschutz" className="underline hover:text-primaer">Datenschutz</Link></li>
          </ul>
        </nav>

        <p className="mt-4">
          Diese Webseite ist eine studentische Arbeit. 
          Verein, Anschrift und Kontaktdaten sind frei erfunden.
        </p>

        <p className="mt-1 text-xs">© 2026 Hoffnungsfaden e. V.</p>
      </div>
    </footer>
  )
}
