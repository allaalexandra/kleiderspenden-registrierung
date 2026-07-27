import { geschaeftsstelle } from '../data/geschaeftsstelle.js'

export const plzPraefix = geschaeftsstelle.plz.slice(0, 2)

export function hatGueltigesFormat(plz) {
  return /^\d{5}$/.test(plz.trim())
}

export function istInNaehe(plz) {
  if (!hatGueltigesFormat(plz)) {
    return false
  }
  return plz.trim().slice(0, 2) === plzPraefix
}
