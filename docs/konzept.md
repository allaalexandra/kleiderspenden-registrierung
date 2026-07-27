# Konzept zur Kleiderspendenregistrierung

## 1. Ausgangslage und Ziel

Ein gemeinnütziger Verein sammelt Kleiderspenden und versendet diese in verschiedene Krisengebiete. Im Rahmen der Registrierung können spendende Personen selbst auswählen, für welche Zielregion ihre Kleiderspende bestimmt ist.

Für die Übergabe der Kleidung stehen zwei Möglichkeiten zur Verfügung:

- Abholung an der angegebenen Adresse
- Persönliche Übergabe an der Geschäftsstelle

Eine Abholung ist ausschließlich innerhalb des Postleitzahlengebiets 97xxx möglich. Sämtliche im Projekt verwendeten Personen- und Vereinsdaten sind fiktiv.

## 2. Verein und Geschäftsstelle

**Vereinsname:** Hoffnungsfaden e. V.  
**Anschrift:** Friedensstraße 1, 97990 Weikersheim

## 3. Auswahllisten

Für die Registrierung werden zwei Auswahllisten benötigt:

- Liste der spendbaren Kleidungsarten mit Mehrfachauswahl
- Liste der verfügbaren Krisengebiete mit Einfachauswahl

## 4. Datenmodell

Die erfassten Formulardaten werden in drei Kategorien unterteilt:

- Felder, die immer erforderlich sind
- Felder, die nur bei einer Abholung erforderlich sind
- Felder, deren Inhalt automatisch aus anderen Angaben abgeleitet wird

Der Übergabeort wird beispielsweise aus der gewählten Übergabeart abgeleitet. Bei einer Abholung entspricht er der angegebenen Adresse. Bei einer persönlichen Übergabe wird automatisch die Adresse der Geschäftsstelle verwendet.

## Validierungsregeln
| Feld | Regel | Fehlermeldung | Pflichtfeld |
|---|---|---|---|
| Übergabeart | Einer der beiden Werte gewählt | Bitte wählen Sie eine Übergabeart aus. | Ja |
| Kleidungsarten | Mindestens ein Kästchen angehakt | Bitte wählen Sie mindestens eine Kleidungsart aus. | Ja |
| Krisengebiet | Ein Eintrag aus der Liste gewählt | Bitte wählen Sie ein Krisengebiet aus. | Ja |
| Vorname | Nicht leer | Bitte geben Sie Ihren Vornamen ein. | Ja |
| Nachname | Nicht leer | Bitte geben Sie Ihren Nachnamen ein. | Ja |
| Straße | Nicht leer | Bitte geben Sie die Straße ein. | Nur bei Abholung |
| Hausnummer | Nicht leer | Bitte geben Sie die Hausnummer ein. | Nur bei Abholung |
| PLZ (Format) | Genau fünf Ziffern | Bitte geben Sie die Postleitzahl mit genau fünf Ziffern ein. | Nur bei Abholung |
| PLZ (Nähe) | Die ersten beiden Ziffern sind 97 | Diese Adresse liegt außerhalb unseres Einzugsgebiets (97xxx). Das Sammelfahrzeug kann dort nicht abholen – bitte bringen Sie die Kleidung zu unserer Geschäftsstelle. | Nur bei Abholung |
| Ort | Nicht leer | Bitte geben Sie den Ort ein. | Nur bei Abholung |
| Telefon | Nicht leer; erlaubt sind Ziffern, +, −, /, Klammern und Leerzeichen | Bitte geben Sie eine gültige Telefonnummer ein. | Ja |
| E-Mail | Enthält genau ein @-Zeichen mit Text davor und einem Punkt danach | Bitte geben Sie eine gültige E-Mail-Adresse ein. | Ja |

## Seitenstruktur
| Seite | Adresse | Zweck |
|---|---|---|
| Startseite | `index.html` | Vorstellung des Vereins und Einstieg in die Website |
| Seite 2 | `seite2.html` | Zweck der Seite |
| Seite 3 | `seite3.html` | Zweck der Seite |
| Seite 4 | `seite4.html` | Zweck der Seite |
| Seite 5 | `seite5.html` | Zweck der Seite |
| Seite 6 | `seite6.html` | Zweck der Seite |
| Seite 7 | `seite7.html` | Zweck der Seite |