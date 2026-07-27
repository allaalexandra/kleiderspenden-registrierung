import { describe, it, expect } from 'vitest'
import { pruefeRegistrierung, pruefePlz } from './validierung.js'

const leereAdresse = {
  vorname: '',
  nachname: '',
  strasse: '',
  hausnummer: '',
  plz: '',
  ort: '',
  telefon: '',
  email: '',
}

const gueltigeAdresse = {
  vorname: 'Maria',
  nachname: 'Sanchez',
  strasse: 'Hauptstraße',
  hausnummer: '12a',
  plz: '97980',
  ort: 'Bad Mergentheim',
  telefon: '07931 123456',
  email: 'maria.sanchez@example.de',
}

describe('pruefeRegistrierung', () => {
  it('meldet drei Fehler bei einem vollständig leeren Formular', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: '',
      kleidungsarten: [],
      krisengebiet: '',
      adresse: leereAdresse,
    })

    expect(Object.keys(fehler)).toHaveLength(3)
  })

  it('verlangt bei Übergabe an der Geschäftsstelle keine Adresse', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: 'geschaeftsstelle',
      kleidungsarten: ['schuhe'],
      krisengebiet: 'ua-charkiw',
      adresse: leereAdresse,
    })

    expect(fehler).toEqual({})
  })

  it('verlangt bei Abholung alle acht Adressangaben', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: 'abholung',
      kleidungsarten: ['schuhe'],
      krisengebiet: 'ua-charkiw',
      adresse: leereAdresse,
    })

    expect(Object.keys(fehler)).toHaveLength(8)
  })

  it('lässt eine vollständige Abholung ohne Fehler durch', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: 'abholung',
      kleidungsarten: ['schuhe', 'damen-hosen'],
      krisengebiet: 'sy-aleppo',
      adresse: gueltigeAdresse,
    })

    expect(fehler).toEqual({})
  })

  it('lehnt eine Abholadresse außerhalb des Einzugsgebiets ab', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: 'abholung',
      kleidungsarten: ['schuhe'],
      krisengebiet: 'sy-aleppo',
      adresse: { ...gueltigeAdresse, plz: '74564' },
    })

    expect(Object.keys(fehler)).toEqual(['plz'])
  })

  it('lehnt eine unvollständige E-Mail-Adresse ab', () => {
    const fehler = pruefeRegistrierung({
      uebergabeart: 'abholung',
      kleidungsarten: ['schuhe'],
      krisengebiet: 'sy-aleppo',
      adresse: { ...gueltigeAdresse, email: 'maria.sanchez' },
    })

    expect(Object.keys(fehler)).toEqual(['email'])
  })
})

describe('pruefePlz', () => {
  it('meldet bei vier Ziffern das Format und nicht die Entfernung', () => {
    expect(pruefePlz('9799')).toContain('fünf Ziffern')
  })

  it('meldet bei gültigem Format außerhalb des Gebiets die Entfernung', () => {
    expect(pruefePlz('74564')).toContain('Einzugsgebiets')
  })

  it('gibt nichts zurück bei einer gültigen Postleitzahl im Gebiet', () => {
    expect(pruefePlz('97980')).toBeUndefined()
  })
})