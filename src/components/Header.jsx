import { useState } from 'react'
import { Link, NavLink } from 'react-router'

function navKlassen({ isActive }) {
  return isActive
    ? 'font-bold text-primaer underline underline-offset-4'
    : 'text-schrift hover:text-primaer'
}

export default function Header() {
  const [menuOffen, setMenuOffen] = useState(false)

  function menuSchliessen() {
    setMenuOffen(false)
  }

  return (
    <header className="border-b border-rahmen bg-flaeche">
      <div className="mx-auto max-w-5xl px-4 py-3 md:flex md:items-center md:justify-between md:gap-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={menuSchliessen}>
            <img src="/logo.svg" alt="" className="h-12 w-12" />
            <span className="text-lg font-bold text-schrift">Hoffnungsfaden e. V.</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOffen(!menuOffen)}
            aria-expanded={menuOffen}
            aria-controls="hauptnavigation"
            className="rounded-lg border border-rahmen px-3 py-2 font-bold text-schrift md:hidden"
          >
            {menuOffen ? 'Schließen' : 'Menü'}
          </button>
        </div>

        <nav
          id="hauptnavigation"
          aria-label="Hauptnavigation"
          className={`${menuOffen ? 'block' : 'hidden'} md:block`}
        >
          <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:gap-6">
            <li>
              <NavLink to="/" end className={navKlassen} onClick={menuSchliessen}>
                Start
              </NavLink>
            </li>
            <li>
              <NavLink to="/spenden" className={navKlassen} onClick={menuSchliessen}>
                Spende registrieren
              </NavLink>
            </li>
            <li>
              <NavLink to="/verein" className={navKlassen} onClick={menuSchliessen}>
                Über uns
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}