import Seitenkopf from '../components/Seitenkopf.jsx'
import { geschaeftsstelle } from '../data/geschaeftsstelle.js'

export default function Impressum() {
  return (
    <>
      <Seitenkopf titel="Impressum" />

      <div className="mt-6 max-w-prose rounded-lg border-2 border-primaer bg-white p-4">
        <p className="font-bold text-primaer">Hinweis: Studienarbeit</p>
        <p className="mt-1">
          Diese Webseite ist im Rahmen einer Hochschulprüfung entstanden. Der Verein,
          die Anschrift, die Kontaktdaten und die genannten Personen sind frei
          erfunden. Es besteht kein Angebot und keine Möglichkeit, tatsächlich
          Kleidung zu spenden.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Angaben gemäß § 5 DDG</h2>
      <address className="mt-3 not-italic">
        {geschaeftsstelle.name}<br />
        {geschaeftsstelle.rechtsform}<br />
        {geschaeftsstelle.strasse} {geschaeftsstelle.hausnummer}<br />
        {geschaeftsstelle.plz} {geschaeftsstelle.ort}
      </address>

      <h2 className="mt-10 text-2xl font-bold">Vertreten durch</h2>
      <p className="mt-3">{geschaeftsstelle.vorstand}</p>

      <h2 className="mt-10 text-2xl font-bold">Kontakt</h2>
      <p className="mt-3">
        Telefon: {geschaeftsstelle.telefon}<br />
        E-Mail: {geschaeftsstelle.email}
      </p>

      <h2 className="mt-10 text-2xl font-bold">Registereintrag</h2>
      <p className="mt-3">
        Eingetragen im Vereinsregister des {geschaeftsstelle.registergericht}<br />
        Registernummer: {geschaeftsstelle.registernummer}
      </p>

      <h2 className="mt-10 text-2xl font-bold">Haftung für Inhalte</h2>
      <p className="mt-3 max-w-prose">
        Da es sich um eine Studienarbeit mit erfundenen Daten handelt, werden keine
        Auskünfte erteilt und keine Leistungen angeboten. Verweise auf externe
        Angebote bestehen nicht.
      </p>
    </>
  )
}