import Seitenkopf from '../components/Seitenkopf.jsx'
import { geschaeftsstelle } from '../data/geschaeftsstelle.js'

export default function Datenschutz() {
  return (
    <>
      <Seitenkopf titel="Datenschutz" />

      <div className="mt-6 max-w-prose rounded-lg border-2 border-primaer bg-white p-4">
        <p className="font-bold text-primaer">Keine Übertragung an einen Server</p>
        <p className="mt-1">
          Diese Anwendung besitzt keinen Server und keine Datenbank. Alle Eingaben
          bleiben ausschließlich im Speicher Ihres Browsers und werden nicht
          übermittelt.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Verantwortlich</h2>
      <p className="mt-3">
        {geschaeftsstelle.name}, {geschaeftsstelle.strasse}{' '}
        {geschaeftsstelle.hausnummer}, {geschaeftsstelle.plz} {geschaeftsstelle.ort}
      </p>

      <h2 className="mt-10 text-2xl font-bold">Welche Daten erhoben werden</h2>
      <p className="mt-3 max-w-prose">
        Der Umfang hängt davon ab, wie die Kleidung übergeben wird:
      </p>
      <ul className="mt-3 max-w-prose list-disc pl-6">
        <li>
          <strong>Übergabe an der Geschäftsstelle:</strong> Es werden ausschließlich
          die Art der Kleidung und das gewählte Krisengebiet erfasst. Personenbezogene
          Daten werden nicht erhoben.
        </li>
        <li className="mt-2">
          <strong>Abholung:</strong> Zusätzlich werden Vor- und Nachname, die
          Abholadresse, eine Telefonnummer und eine E-Mail-Adresse erhoben. Diese
          Angaben sind erforderlich, um das Sammelfahrzeug zu planen und bei
          Rückfragen Kontakt aufnehmen zu können.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Speicherung und Löschung</h2>
      <p className="mt-3 max-w-prose">
        Die Angaben werden für die Anzeige der Bestätigungsseite im
        Sitzungsspeicher des Browsers abgelegt. Dieser Speicher wird vom Browser
        automatisch geleert, sobald der Reiter geschlossen wird. Eine dauerhafte
        Speicherung findet nicht statt. Das ist besonders für das öffentlich
        zugängliche Tablet in der Geschäftsstelle von Bedeutung: Die Angaben einer
        Person sind für die nächste nicht mehr einsehbar.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Cookies und Auswertung</h2>
      <p className="mt-3 max-w-prose">
        Es werden keine Cookies gesetzt. Eine Reichweitenmessung oder eine Einbindung
        von Diensten Dritter findet nicht statt.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Hinweis</h2>
      <p className="mt-3 max-w-prose">
        Diese Seite ist Teil einer Studienarbeit. Sämtliche Angaben zum Verein sind
        frei erfunden. Es werden keine echten Spenden entgegengenommen.
      </p>
    </>
  )
}