import { Link, NavLink } from 'react-router'

function navKlassen({ isActive }) {
  return isActive
    ? 'font-bold text-primaer underline underline-offset-4'
    : 'text-schrift hover:text-primaer'
}

export default function Header() {
  return (
    <header className="border-b border-rahmen bg-flaeche">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="" className="h-12 w-12" />
          <span className="text-lg font-bold text-schrift">Hoffnungsfaden e. V.</span>
        </Link>

        <nav aria-label="Hauptnavigation">
          <ul className="flex gap-6">
            <li><NavLink to="/" end className={navKlassen}>Start</NavLink></li>
            <li><NavLink to="/spenden" className={navKlassen}>Spende registrieren</NavLink></li>
            <li><NavLink to="/verein" className={navKlassen}>Über uns</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
