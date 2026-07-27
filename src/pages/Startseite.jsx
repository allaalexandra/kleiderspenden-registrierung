import { Link } from 'react-router'
import Seitenkopf from '../components/Seitenkopf.jsx'
import { geschaeftsstelle } from '../data/geschaeftsstelle.js'
import { plzPraefix } from '../logik/plz.js'

export default function Startseite() {
  return (
    <>
      <Seitenkopf
        titel="Kleiderspende registrieren"
        einleitung="Spenden Sie gut erhaltene Kleidung und entscheiden Sie selbst, in welche Krisenregion Ihre Spende geht."
      />

      <p className="mt-6">
        <Link
          to="/spenden"
          className="inline-block rounded-lg bg-primaer px-6 py-3 font-bold text-white hover:bg-schrift"
        >
          Jetzt Spende registrieren
        </Link>
      </p>

      <h2 className="mt-12 text-2xl font-bold">So funktioniert es</h2>

      <ol className="mt-4 grid gap-4 sm:grid-cols-3">
        <li className="rounded-lg border border-rahmen bg-white p-4">
          <span className="block font-bold text-primaer">Schritt 1</span>
          <span className="mt-1 block font-bold">Übergabe wählen</span>
          Sie bringen die Kleidung zu uns oder lassen sie abholen.
        </li>
        <li className="rounded-lg border border-rahmen bg-white p-4">
          <span className="block font-bold text-primaer">Schritt 2</span>
          <span className="mt-1 block font-bold">Angaben machen</span>
          Art der Kleidung auswählen und das Krisengebiet bestimmen.
        </li>
        <li className="rounded-lg border border-rahmen bg-white p-4">
          <span className="block font-bold text-primaer">Schritt 3</span>
          <span className="mt-1 block font-bold">Bestätigung erhalten</span>
          Sie sehen alle Angaben noch einmal zusammengefasst.
        </li>
      </ol>

      <h2 className="mt-12 text-2xl font-bold">Persönliche Übergabe</h2>
      <p className="mt-3 max-w-prose">
        Sie erreichen uns in der {geschaeftsstelle.strasse}{' '}
        {geschaeftsstelle.hausnummer}, {geschaeftsstelle.plz} {geschaeftsstelle.ort}.
        Geöffnet ist {geschaeftsstelle.oeffnungszeiten}.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Abholung durch das Sammelfahrzeug</h2>
      <p className="mt-3 max-w-prose">
        Unser Sammelfahrzeug fährt im Postleitzahlengebiet {plzPraefix}xxx. Liegt Ihre
        Adresse außerhalb, bringen Sie die Kleidung bitte an unsere Geschäftsstelle.
      </p>
    </>
  )
}