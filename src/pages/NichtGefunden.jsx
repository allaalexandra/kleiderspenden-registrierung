import { Link } from 'react-router'
import Seitenkopf from '../components/Seitenkopf.jsx'

export default function NichtGefunden() {
  return (
    <>
      <Seitenkopf
        titel="Seite nicht gefunden"
        einleitung="Die aufgerufene Adresse gibt es nicht. Möglicherweise hat sich ein Tippfehler eingeschlichen, oder die Seite wurde umbenannt."
      />

      <p className="mt-6">Von hier kommen Sie weiter:</p>

      <ul className="mt-3 list-disc pl-6">
        <li>
          <Link to="/" className="underline hover:text-primaer">Zur Startseite</Link>
        </li>
        <li className="mt-1">
          <Link to="/spenden" className="underline hover:text-primaer">Spende registrieren</Link>
        </li>
        <li className="mt-1">
          <Link to="/verein" className="underline hover:text-primaer">Über uns</Link>
        </li>
      </ul>
    </>
  )
}