import Seitenkopf from '../components/Seitenkopf.jsx'
import { geschaeftsstelle } from '../data/geschaeftsstelle.js'
import { krisengebiete } from '../data/krisengebiete.js'

export default function Verein() {
  return (
    <>
      <Seitenkopf
        titel="Über uns"
        einleitung="Hoffnungsfaden e. V. sammelt gut erhaltene Kleidung und bringt sie dorthin, wo sie gebraucht wird."
      />

      <h2 className="mt-10 text-2xl font-bold">Unsere Arbeit</h2>
      <p className="mt-3 max-w-prose">
        Der Verein ist ehrenamtlich organisiert. Gespendete Kleidung wird an der
        Geschäftsstelle gesichtet, sortiert und verpackt. Anschließend übergeben wir
        sie an Hilfsorganisationen in der jeweiligen Region. Das Besondere daran:
        Die spendende Person entscheidet selbst, wohin ihre Spende geht.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Geschäftsstelle</h2>

      <dl className="mt-4 max-w-2xl divide-y divide-rahmen rounded-lg border border-rahmen bg-white">
        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Anschrift</dt>
          <dd className="sm:col-span-2">
            {geschaeftsstelle.name}<br />
            {geschaeftsstelle.strasse} {geschaeftsstelle.hausnummer}<br />
            {geschaeftsstelle.plz} {geschaeftsstelle.ort}
          </dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Öffnungszeiten</dt>
          <dd className="sm:col-span-2">{geschaeftsstelle.oeffnungszeiten}</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">Telefon</dt>
          <dd className="sm:col-span-2">{geschaeftsstelle.telefon}</dd>
        </div>

        <div className="grid gap-1 p-4 sm:grid-cols-3">
          <dt className="font-bold">E-Mail</dt>
          <dd className="sm:col-span-2">{geschaeftsstelle.email}</dd>
        </div>
      </dl>

      <h2 className="mt-10 text-2xl font-bold">Aktuelle Zielregionen</h2>
      <p className="mt-3 max-w-prose">
        Bei der Registrierung können Sie eine dieser Regionen auswählen:
      </p>

      <ul className="mt-3 list-disc pl-6">
        {krisengebiete.map((gebiet) => (
          <li key={gebiet.id}>{gebiet.name}</li>
        ))}
      </ul>
    </>
  )
}