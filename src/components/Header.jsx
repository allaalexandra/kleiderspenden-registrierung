export default function Header() {
  return (
    <header className="border-b border-rahmen bg-flaeche">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="" className="h-12 w-12" />
          <span className="text-lg font-bold text-schrift">Hoffnungsfaden e. V.</span>
        </a>

        <nav aria-label="Hauptnavigation">
          <ul className="flex gap-6">
            <li><a href="/" className="text-schrift hover:text-primaer">Start</a></li>
            <li><a href="/spenden" className="text-schrift hover:text-primaer">Spende registrieren</a></li>
            <li><a href="/verein" className="text-schrift hover:text-primaer">Über uns</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}