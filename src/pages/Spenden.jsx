import { useState } from 'react'
import { kleidungsarten } from '../data/kleidungsarten.js'
import { krisengebiete } from '../data/krisengebiete.js'
import { pruefeRegistrierung, pruefePlz } from '../logik/validierung.js'
import Feld from '../components/Feld.jsx'

export default function Spenden() {
  const [uebergabeart, setUebergabeart] = useState('')
  const [gewaehlteArten, setGewaehlteArten] = useState([])
  const [krisengebiet, setKrisengebiet] = useState('')
  const [fehler, setFehler] = useState({})
  function artUmschalten(id) {
    if (gewaehlteArten.includes(id)) {
      setGewaehlteArten(gewaehlteArten.filter((eintrag) => eintrag !== id))
    } else {
      setGewaehlteArten([...gewaehlteArten, id])
    }
  }
  const [adresse, setAdresse] = useState({
    vorname: '',
    nachname: '',
    strasse: '',
    hausnummer: '',
    plz: '',
    ort: '',
    telefon: '',
    email: '',
  })

    function adresseAendern(ereignis) {
    const { name, value } = ereignis.target
    setAdresse({ ...adresse, [name]: value })
  }

  function plzVerlassen() {
    const wert = adresse.plz.trim()
    const meldung = wert === '' ? undefined : pruefePlz(wert)
    const neueFehler = { ...fehler }

    if (meldung) {
      neueFehler.plz = meldung
    } else {
      delete neueFehler.plz
    }

    setFehler(neueFehler)
  }
  
  function formularAbsenden(ereignis) {
    ereignis.preventDefault()

    const registrierung = {
      uebergabeart,
      kleidungsarten: gewaehlteArten,
      krisengebiet,
      adresse,
    }

    const gefundeneFehler = pruefeRegistrierung(registrierung)
    setFehler(gefundeneFehler)

    if (Object.keys(gefundeneFehler).length > 0) {
      return
    }

    console.log('Registrierung', registrierung)
  }

  const anzahlFehler = Object.keys(fehler).length

  return (
    <>
      <h1 className="text-3xl font-bold text-primaer">Spende registrieren</h1>

      <form className="mt-8" onSubmit={formularAbsenden} noValidate>
        <fieldset>
          <legend className="text-xl font-bold">1. Wie möchten Sie spenden?</legend>

          <div className="mt-3 flex flex-col gap-3">
            <label className="flex items-start gap-3 rounded-lg border border-rahmen bg-flaeche p-4">
              <input
                type="radio"
                name="uebergabeart"
                value="geschaeftsstelle"
                checked={uebergabeart === 'geschaeftsstelle'}
                onChange={(ereignis) => setUebergabeart(ereignis.target.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-bold">Übergabe an der Geschäftsstelle</span>
                Sie bringen die Kleidung zu uns in die Friedensstraße 1 in Weikersheim.
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg border border-rahmen bg-flaeche p-4">
              <input
                type="radio"
                name="uebergabeart"
                value="abholung"
                checked={uebergabeart === 'abholung'}
                onChange={(ereignis) => setUebergabeart(ereignis.target.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-bold">Abholung durch das Sammelfahrzeug</span>
                Wir holen die Kleidung bei Ihnen ab, wenn Sie im Umkreis 97xxx wohnen.
              </span>
            </label>
          </div>
            {fehler.uebergabeart && (
            <p className="mt-2 text-sm font-bold text-red-700">
    {fehler.uebergabeart}</p>
          )}
        </fieldset>

        {uebergabeart === 'abholung' && (
          <fieldset className="mt-8">
            <legend className="text-xl font-bold">Ihre Abholadresse</legend>

            <p className="mt-2 max-w-prose text-sm">
              Diese Angaben brauchen wir, um das Sammelfahrzeug zu planen und Sie
              bei Rückfragen erreichen zu können.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Feld id="vorname" label="Vorname" wert={adresse.vorname} onAendern={adresseAendern} fehler={fehler.vorname} />
                <Feld id="nachname" label="Nachname" wert={adresse.nachname} onAendern={adresseAendern} fehler={fehler.nachname} />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <Feld id="strasse" label="Straße" wert={adresse.strasse} onAendern={adresseAendern} fehler={fehler.strasse} />
                </div>
                <Feld id="hausnummer" label="Hausnummer" wert={adresse.hausnummer} onAendern={adresseAendern}  fehler={fehler.hausnummer} />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Feld id="plz" label="Postleitzahl" wert={adresse.plz} onAendern={adresseAendern} onVerlassen={plzVerlassen} fehler={fehler.plz} />
                <div className="sm:col-span-2">
                  <Feld id="ort" label="Ort" wert={adresse.ort} onAendern={adresseAendern} fehler={fehler.ort} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Feld id="telefon" label="Telefon" typ="tel" wert={adresse.telefon} onAendern={adresseAendern} fehler={fehler.telefon} />
                <Feld id="email" label="E-Mail" typ="email" wert={adresse.email} onAendern={adresseAendern} fehler={fehler.email} />
              </div>
            </div>
          </fieldset>
        )}
        
        <fieldset className="mt-8">
          <legend className="text-xl font-bold">2. Welche Kleidung möchten Sie spenden?</legend>

          {kleidungsarten.map((bereich) => (
            <fieldset key={bereich.gruppe} className="mt-4">
              <legend className="font-bold">{bereich.gruppe}</legend>

              <div className="mt-2 flex flex-col">
                {bereich.arten.map((art) => (
                  <label key={art.id} className="flex items-center gap-3 py-1">
                    <input
                      type="checkbox"
                      value={art.id}
                      checked={gewaehlteArten.includes(art.id)}
                      onChange={() => artUmschalten(art.id)}
                      className="h-5 w-5 accent-primaer"
                    />
                    {art.bezeichnung}
                  </label>
                ))}           
              </div>
            </fieldset>
            ))}
          {fehler.kleidungsarten && (
            <p className="mt-2 text-sm font-bold text-red-700">
    {fehler.kleidungsarten}</p>
          )}
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-xl font-bold">3. Wohin soll Ihre Spende gehen?</legend>

          <label htmlFor="krisengebiet" className="mt-3 block font-bold">
            Krisengebiet
          </label>
          <select
            id="krisengebiet"
            name="krisengebiet"
            value={krisengebiet}
            onChange={(ereignis) => setKrisengebiet(ereignis.target.value)}
            className="mt-1 block w-full max-w-md rounded-lg border border-rahmen bg-white px-3 py-2"
          >
            <option value="">Bitte wählen</option>
            {krisengebiete.map((gebiet) => (
              <option key={gebiet.id} value={gebiet.id}>
                {gebiet.name}
              </option>
            ))}
          </select>
            {fehler.krisengebiet && (
            <p className="mt-2 text-sm font-bold text-red-700">
    {fehler.krisengebiet}</p>
            )}
        </fieldset>
        
                {anzahlFehler > 0 && (
          <div
            role="alert"
            className="mt-8 rounded-lg border-2 border-red-700 bg-white p-4"
          >
            <p className="font-bold text-red-700">
              Das Formular konnte nicht abgeschickt werden:{' '}
              {anzahlFehler === 1
                ? 'eine Angabe ist unvollständig.'
                : `${anzahlFehler} Angaben sind unvollständig.`}
            </p>
            <p className="mt-1 text-sm">
              Bitte prüfen Sie die rot markierten Felder weiter oben.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="mt-8 rounded-lg bg-primaer px-6 py-3 font-bold text-white hover:bg-schrift"
        >
          Spende registrieren
        </button>
      </form>
    </>
  )
}