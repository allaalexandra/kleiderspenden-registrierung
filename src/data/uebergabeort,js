import { geschaeftsstelle } from '../data/geschaeftsstelle.js'

export function uebergabeortText(registrierung) {
  if (registrierung.uebergabeart === 'geschaeftsstelle') {
    return (
      `${geschaeftsstelle.name}, ${geschaeftsstelle.strasse} ` +
      `${geschaeftsstelle.hausnummer}, ${geschaeftsstelle.plz} ${geschaeftsstelle.ort}`
    )
  }

  const adresse = registrierung.adresse
  return `${adresse.strasse} ${adresse.hausnummer}, ${adresse.plz} ${adresse.ort}`
}