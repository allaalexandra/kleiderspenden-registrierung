import { describe, it, expect } from 'vitest'
import { hatGueltigesFormat, istInNaehe, plzPraefix } from './plz.js'

describe('hatGueltigesFormat', () => {
  it('akzeptiert genau fünf Ziffern', () => {
    expect(hatGueltigesFormat('97990')).toBe(true)
  })

  it('lehnt vier Ziffern ab', () => {
    expect(hatGueltigesFormat('9799')).toBe(false)
  })

  it('lehnt sechs Ziffern ab', () => {
    expect(hatGueltigesFormat('979901')).toBe(false)
  })

  it('lehnt Buchstaben ab', () => {
    expect(hatGueltigesFormat('9799a')).toBe(false)
  })

  it('ignoriert Leerzeichen am Rand', () => {
    expect(hatGueltigesFormat('  97990  ')).toBe(true)
  })

  it('lehnt eine leere Eingabe ab', () => {
    expect(hatGueltigesFormat('')).toBe(false)
  })
})

describe('istInNaehe', () => {
  it('leitet das Präfix aus der Geschäftsstelle ab', () => {
    expect(plzPraefix).toBe('97')
  })

  it('akzeptiert die Postleitzahl der Geschäftsstelle selbst', () => {
    expect(istInNaehe('97990')).toBe(true)
  })

  it('akzeptiert Bad Mergentheim', () => {
    expect(istInNaehe('97980')).toBe(true)
  })

  it('akzeptiert die untere Grenze des Gebiets', () => {
    expect(istInNaehe('97000')).toBe(true)
  })

  it('akzeptiert die obere Grenze des Gebiets', () => {
    expect(istInNaehe('97999')).toBe(true)
  })

  it('lehnt Crailsheim ab', () => {
    expect(istInNaehe('74564')).toBe(false)
  })

  it('lehnt eine Postleitzahl ab, bei der nur die zweite Stelle abweicht', () => {
    expect(istInNaehe('96990')).toBe(false)
  })

  it('lehnt eine unvollständige Postleitzahl ab', () => {
    expect(istInNaehe('9799')).toBe(false)
  })
})