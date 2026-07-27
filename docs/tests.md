# Überprüfung der Umsetzung

Stand: Juli 2026. Geprüft in Chrome und Firefox unter Windows 11.

## 1. Unit-Tests

Ausführbar mit `npm test`. 23 Tests in zwei Dateien, alle bestanden.

| Datei | Prüft | Anzahl |
|---|---|---|
| `src/logik/plz.test.js` | Format und Einzugsgebiet der Postleitzahl | 14 |
| `src/logik/validierung.test.js` | Validierungsregeln und Fallunterscheidung | 9 |

### Postleitzahlenprüfung (Anforderung b.h)

| Eingabe | Erwartung | Ergebnis |
|---|---|---|
| `97990` (Geschäftsstelle) | angenommen | bestanden |
| `97980` (Bad Mergentheim) | angenommen | bestanden |
| `97000` (untere Grenze) | angenommen | bestanden |
| `97999` (obere Grenze) | angenommen | bestanden |
| `74564` (Crailsheim) | abgelehnt | bestanden |
| `96990` (nur zweite Stelle abweichend) | abgelehnt | bestanden |
| `9799` (vier Ziffern) | Formatfehler, **nicht** Entfernungsfehler | bestanden |
| `9799a` | Formatfehler | bestanden |
| `  97990  ` | angenommen, Leerzeichen entfernt | bestanden |

Zusätzlich wird geprüft, dass das Präfix `97` aus der Postleitzahl der
Geschäftsstelle abgeleitet und nicht fest im Code hinterlegt ist.

### Fallunterscheidung (Anforderungen b.f und b.g)

| Fall | Erwartung | Ergebnis |
|---|---|---|
| Übergabe an der Geschäftsstelle, Adresse vollständig leer | kein Fehler | bestanden |
| Abholung, Adresse vollständig leer | acht Fehler | bestanden |
| Leeres Formular | drei Fehler | bestanden |
| Abholung, gültig, PLZ `74564` | genau ein Fehler beim Feld PLZ | bestanden |
| Abholung, gültig, E-Mail ohne `@` | genau ein Fehler beim Feld E-Mail | bestanden |

Der erste Fall ist der Nachweis für Anforderung b.f: Eine leere Adresse wird
bei persönlicher Übergabe akzeptiert.

### Wirksamkeitsprobe

Um zu prüfen, dass die Tests tatsächlich etwas absichern, wurde in `plz.js`
versuchsweise `slice(0, 2)` durch `slice(0, 1)` ersetzt. Die Testfälle `74564`
und `96990` schlugen daraufhin fehl. Die Änderung wurde zurückgenommen.

## 2. Funktionstests im Browser

| Nr. | Prüfung | Ergebnis |
|---|---|---|
| F1 | Alle sieben Adressen erreichbar, je genau eine Überschrift erster Ordnung | erfüllt |
| F2 | Seitenwechsel ohne Neuladen, Zurück-Knopf funktioniert | erfüllt |
| F3 | Geschäftsstelle gewählt: kein Adressblock im HTML vorhanden | erfüllt (b.f) |
| F4 | Abholung gewählt: acht Adressfelder erscheinen | erfüllt (b.g) |
| F5 | PLZ `37073` beim Verlassen des Feldes: sofortige Meldung | erfüllt (b.h) |
| F6 | Leeres Formular absenden: drei Meldungen, kein Seitenwechsel | erfüllt |
| F7 | Bestätigung zeigt Art der Kleider, Krisengebiet, Datum, Uhrzeit, Ort | erfüllt (b.i) |
| F8 | Ort bei Geschäftsstelle = Vereinsanschrift, bei Abholung = Eingabe | erfüllt (b.i) |
| F9 | Direktaufruf von `/bestaetigung` ohne Registrierung: Umleitung zum Formular | erfüllt |
| F10 | Unbekannte Adresse zeigt Auffangseite mit Rückwegen | erfüllt |
| F11 | Sitzungsspeicher nach Schließen des Reiters geleert | erfüllt |

## 3. Responsives Verhalten (Anforderung b.c)

Gemessen auf der Spendenseite mit eingeblendetem Adressblock.

| Prüfung | 375 px | 768 px | 1280 px |
|---|---|---|---|
| Waagerechter Überlauf | 0 px | 0 px | 0 px |
| Burger-Knopf sichtbar | ja | nein | nein |
| Navigation sichtbar | nein | ja | ja |
| Straße / Hausnummer | untereinander | nebeneinander | nebeneinander |
| PLZ / Ort | untereinander | nebeneinander | nebeneinander |
| Inhaltsbreite begrenzt | — | — | 1024 px von 1265 px |

Verhältnis Straße zu Hausnummer bei 768 px: 2,07 : 1.
Klickfläche der Kontrollkästchen: 44 px. Höhe der Eingabefelder: 46 px.

## 4. Farbkontraste

Berechnet aus den tatsächlich gerenderten Elementen, nicht aus der Palette
geschätzt. Grenzwerte nach WCAG 2.2: 4,5 : 1 für Text, 3,0 : 1 für
Bedienelemente.

| Kombination | Wert | Grenzwert | Ergebnis |
|---|---|---|---|
| Überschriften auf Seitenhintergrund | 12,30 : 1 | 4,5 | erfüllt |
| Weiße Schrift auf Absende-Schaltfläche | 8,03 : 1 | 4,5 | erfüllt |
| Navigationstext auf Kopfleiste | 6,23 : 1 | 4,5 | erfüllt |
| Fehlermeldung auf weißem Grund | 6,42 : 1 | 4,5 | erfüllt |
| Fehlermeldung auf rosa Fläche | 4,98 : 1 | 4,5 | erfüllt |
| Feldrahmen gegen Feldinneres | 4,56 : 1 | 3,0 | erfüllt |
| Feldrahmen gegen Seitenhintergrund | 4,33 : 1 | 3,0 | erfüllt |

Anmerkung: Die ursprünglich vorgesehene Akzentfarbe `#E7AFC1` erreichte als
Feldrahmen nur 1,76 : 1 und war damit unbrauchbar. Für Rahmen wurde deshalb
die Farbe `#5C7D6C` ergänzt.

## 5. Bedienung ohne Maus

| Nr. | Prüfung | Ergebnis |
|---|---|---|
| B1 | Sprunglink erscheint beim ersten Tabulatorschritt und setzt den Fokus in den Hauptbereich | erfüllt |
| B2 | Fokusrahmen bei Tastaturbedienung sichtbar, beim Mausklick nicht | erfüllt |
| B3 | Geschlossenes Burger-Menü ist nicht mit der Tabulatortaste erreichbar | erfüllt |
| B4 | `aria-expanded` am Menü-Knopf wechselt korrekt | erfüllt |
| B5 | Fehlerhafte Felder tragen `aria-invalid` und verweisen per `aria-describedby` auf ihre Meldung | erfüllt |
| B6 | Klick auf ein Beschriftungsfeld setzt den Cursor ins zugehörige Eingabefeld | erfüllt |

## 6. Schutz gegen Code-Injection

| Eingabe im Feld Straße | Ergebnis |
|---|---|
| `<script>alert('Angriff')</script>` | als Text ausgegeben, nicht ausgeführt |
| `<img src=x onerror="alert(1)">` | als Text ausgegeben, kein Bildelement entsteht |

Im HTML erscheinen die Zeichen kodiert als `&lt;` und `&gt;`. Der Schutz beruht
auf der automatischen Kodierung durch React bei der Ausgabe. Eine Suche über das
gesamte Projekt nach `dangerouslySetInnerHTML` ergibt keine Treffer.

## 7. Werkzeuggestützte Prüfungen

| Befehl | Ergebnis |
|---|---|
| `npm run lint` | keine Meldungen |
| `npm test` | 23 von 23 bestanden |
| `npm run build` | erfolgreich, 90 Module |
| Browserkonsole | keine Fehler, keine Warnungen |

## 8. Nicht durchgeführte Prüfungen

- **Usability-Tests** mit Testpersonen. Die Bedienbarkeit wurde nur anhand
  anerkannter Regeln beurteilt, nicht beobachtet.
- **Performance- und Lasttests.** Ohne Server gibt es keine Last, die zu messen
  wäre; die Ladezeit des Bündels wurde nicht systematisch erhoben.
- **Tests mit echten Screenreadern.** Die Auszeichnung folgt den WCAG-Vorgaben,
  wurde aber nicht mit NVDA oder VoiceOver gegengeprüft.
- **Automatisierte Oberflächentests.** Die Funktionstests erfolgten von Hand.
  Die fachlichen Regeln sind dagegen durch Unit-Tests abgesichert.