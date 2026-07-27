import { Link, Navigate } from 'react-router'
import { bezeichnungFuerArt } from '../data/kleidungsarten.js'
import { nameFuerGebiet } from '../data/krisengebiete.js'
import { uebergabeortText } from '../logik/uebergabeort.js'
import Seitenkopf from '../components/Seitenkopf.jsx'

export default function Bestaetigung() {
  const gespeichert = sessionStorage.getItem('letzteRegistrierung')

  if (!gespeichert) {
    return <Navigate to="/spenden" replace />
  }

  const registrierung = JSON.parse(gespeichert)
  const zeitpunkt = new Date(registrierung.registriertAm)

  const datum = zeitpunkt.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const uhrzeit = zeitpunkt.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const artDerUebergabe =
    registrierung.uebergabeart === 'geschaeftsstelle'
      ? 'Persönliche Übergabe an der Geschäftsstelle'
      : 'Abholung durch das Sammelfahrzeug'

  return (
    <>
            <Seitenkopf titel="Registrierung bestätigt" />

      <div className="mt-6 rounded-lg border-2 border-primaer bg-white p-4">
        <p className="font-bold text-primaer">
          Vielen Dank! Ihre Kleiderspende ist registriert.
        </p>
        <p className="mt-1 text-sm">
          Bitte bewahren Sie diese Angaben auf, zum Beispiel als Ausdruck.
        </p>
      </div>

      <dl className="mt-8 max-w-2xl divide-y divide-rahmen rounded-lg border border-rahmen bg-white">
        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Art der Übergabe</dt>
          <dd className="sm:col-span-2">{artDerUebergabe}</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Art der Kleider</dt>
          <dd className="sm:col-span-2">
            <ul className="list-disc pl-5">
              {registrierung.kleidungsarten.map((id) => (
                <li key={id}>{bezeichnungFuerArt(id)}</li>
              ))}
            </ul>
          </dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Krisengebiet</dt>
          <dd className="sm:col-span-2">{nameFuerGebiet(registrierung.krisengebiet)}</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Datum</dt>
          <dd className="sm:col-span-2">{datum}</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Uhrzeit</dt>
          <dd className="sm:col-span-2">{uhrzeit} Uhr</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Ort</dt>
          <dd className="sm:col-span-2">{uebergabeortText(registrierung)}</dd>
        </div>
      </dl>

      <p className="mt-8">
        <Link
          to="/spenden"
          className="inline-block rounded-lg bg-primaer px-6 py-3 font-bold text-white hover:bg-schrift"
        >
          Weitere Spende registrieren
        </Link>
      </p>
    </>
  )
}