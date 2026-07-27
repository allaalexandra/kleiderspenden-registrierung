import { hatGueltigesFormat, istInNaehe, plzPraefix } from './plz.js'

export function pruefeRegistrierung(daten) {
  const fehler = {}

  if (daten.uebergabeart === '') {
    fehler.uebergabeart = 'Bitte wählen Sie eine Übergabeart aus.'
  }

  if (daten.kleidungsarten.length === 0) {
    fehler.kleidungsarten = 'Bitte wählen Sie mindestens eine Kleidungsart aus.'
  }

  if (daten.krisengebiet === '') {
    fehler.krisengebiet = 'Bitte wählen Sie ein Krisengebiet aus.'
  }

  if (daten.uebergabeart === 'abholung') {
    const adresse = daten.adresse

    if (adresse.vorname.trim() === '') {
      fehler.vorname = 'Bitte geben Sie Ihren Vornamen ein.'
    }
    if (adresse.nachname.trim() === '') {
      fehler.nachname = 'Bitte geben Sie Ihren Nachnamen ein.'
    }
    if (adresse.strasse.trim() === '') {
      fehler.strasse = 'Bitte geben Sie die Straße ein.'
    }
    if (adresse.hausnummer.trim() === '') {
      fehler.hausnummer = 'Bitte geben Sie die Hausnummer ein.'
    }
    if (!hatGueltigesFormat(adresse.plz)) {
      fehler.plz = 'Bitte geben Sie die Postleitzahl mit genau fünf Ziffern ein.'
    } else if (!istInNaehe(adresse.plz)) {
      fehler.plz =
        `Diese Adresse liegt außerhalb unseres Einzugsgebiets (${plzPraefix}xxx). ` +
        'Das Sammelfahrzeug kann dort nicht abholen – bitte bringen Sie die ' +
        'Kleidung zu unserer Geschäftsstelle.'
    }
    if (adresse.ort.trim() === '') {
      fehler.ort = 'Bitte geben Sie den Ort ein.'
    }
    if (!/^[\d+\-/() ]+$/.test(adresse.telefon.trim())) {
      fehler.telefon = 'Bitte geben Sie eine gültige Telefonnummer ein.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adresse.email.trim())) {
      fehler.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
  }

  return fehler
}