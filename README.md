# Kleiderspenden-Registrierung

Webanwendung zur Registrierung von Kleiderspenden für den (fiktiven) Verein
Hoffnungsfaden e. V. Spendende Personen entscheiden selbst, in welche
Krisenregion ihre Spende versendet wird.

> **Hinweis:** Diese Anwendung ist im Rahmen einer Fallstudie im Kurs
> „Programmierung von Webanwendungsoberflächen" entstanden. Verein, Anschrift,
> Kontaktdaten und Personen sind frei erfunden. Es werden keine Spenden
> entgegengenommen und keine Daten an einen Server übertragen.

## Umsetzung der Anforderungen

| Nr. | Anforderung | Umgesetzt in |
|---|---|---|
| a | Öffentliches Code-Repository | dieses Repository, `.github/workflows/` |
| b.a | Titel und Logo | `index.html`, `public/logo.svg`, `src/components/Header.jsx` |
| b.b | Header mit globaler Navigation, Content, Footer mit rechtlichen Hinweisen | `src/App.jsx`, `src/components/Header.jsx`, `src/components/Footer.jsx`, `src/pages/Impressum.jsx`, `src/pages/Datenschutz.jsx` |
| b.c | Responsives Design für Desktop, Tablet, Smartphone | `src/components/Header.jsx` (Burger-Menü ab 768 px), `src/pages/Spenden.jsx` (Raster ab 640 px) |
| b.d | Formular zur Registrierung | `src/pages/Spenden.jsx`, `src/logik/validierung.js` |
| b.e | Übergabe an der Geschäftsstelle **oder** Abholung | `src/pages/Spenden.jsx` (Auswahl der Übergabeart) |
| b.f | Geschäftsstelle: nur Kleidungsart und Krisengebiet, keine Adresse | `src/pages/Spenden.jsx` (bedingte Anzeige), `src/logik/validierung.js` (bedingte Prüfung) |
| b.g | Abholung: Adresse, Kleidungsart, Krisengebiet | `src/pages/Spenden.jsx`, `src/components/Feld.jsx` |
| b.h | Prüfung der Postleitzahl auf Nähe zur Geschäftsstelle | `src/logik/plz.js`, `src/logik/plz.test.js` |
| b.i | Bestätigungsseite mit allen Angaben | `src/pages/Bestaetigung.jsx`, `src/logik/uebergabeort.js` |

## Technologien

| Baustein | Version | Rolle |
|---|---|---|
| [React](https://react.dev) | 19.2 | JavaScript-Framework, Aufbau aus Komponenten |
| [React Router](https://reactrouter.com) | 8.3 | Routing ohne Neuladen der Seite |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | CSS-Framework, Utility-First |
| [Vite](https://vite.dev) | 8.1 | Entwicklungsserver und Build-Werkzeug |
| [Vitest](https://vitest.dev) | 4.1 | Unit-Tests |
| Node.js | 24.18 | Laufzeitumgebung der Werkzeuge |

Vite ist **kein** Framework, sondern ein Build-Werkzeug. Die Anforderung
„mindestens ein CSS- und/oder JavaScript-Framework" wird durch React und
Tailwind CSS erfüllt.

Ein Backend ist bewusst nicht vorhanden: Die Aufgabenstellung schließt es aus.
Alle Daten bleiben im Browser, die Registrierung wird über den Sitzungsspeicher
an die Bestätigungsseite übergeben.

## Projektstruktur

```
src/
  components/   wiederverwendbare Bausteine (Header, Footer, Feld, Seitenkopf)
  data/         fachliche Stammdaten (Kleidungsarten, Krisengebiete, Geschäftsstelle)
  logik/        fachliche Regeln ohne Bezug zur Oberfläche, mit Unit-Tests
  pages/        je eine Komponente pro Adresse
```

Die Trennung zwischen `data` (Werte), `logik` (Regeln) und `pages`/`components`
(Darstellung) macht die fachlichen Regeln einzeln testbar. Die Postleitzahl der
Geschäftsstelle ist die einzige Quelle für das Einzugsgebiet; die Prüfregel, die
Fehlermeldung und die Angabe auf der Startseite leiten sich daraus ab.

## Lokal starten

```bash
npm install
```
```bash
npm run dev
```

## Weitere Befehle

| Befehl | Wirkung |
|---|---|
| `npm run dev` | Entwicklungsserver auf http://localhost:5173 |
| `npm run build` | Produktionsbündel nach `dist/` |
| `npm run lint` | ESLint über das gesamte Projekt |
| `npm test` | Unit-Tests einmalig ausführen |

## Tests

23 Unit-Tests in zwei Dateien prüfen die fachlichen Regeln:

- `src/logik/plz.test.js` — Format und Einzugsgebiet der Postleitzahl (Anf. b.h),
  einschließlich der Grenzfälle `97000`, `97999` und `96990`
- `src/logik/validierung.test.js` — Validierungsregeln, darunter der Nachweis,
  dass bei Übergabe an der Geschäftsstelle keine Adresse verlangt wird (Anf. b.f)

Weitere Nachweise, darunter die gemessenen Kontrastwerte, stehen in
`docs/tests.md`. Das Fachkonzept steht in `docs/konzept.md`.