# GNotKG Kostenrechner

Web-App für das Notariat: Kostenberechnung nach GNotKG (Tabelle B) für Kauf, Übertragung, Scheidungsfolgen, Ehevertrag, Testament/Erbvertrag, Vorsorgevollmacht und freie Gebühren.

- Läuft im Browser am PC und am Handy, lässt sich als App-Symbol auf den Startbildschirm legen und funktioniert danach auch offline.
- Keine Daten verlassen das Gerät; keine Anfragen an fremde Server (Schriften liegen in `schriften/`, SIL Open Font License).
- „Als Text kopieren“ und „Drucken“ für die Kostenberechnung.

## Veröffentlichen

GitHub Pages: Settings → Pages → „Deploy from a branch“ → `main` / `(root)`.
Nach Änderungen in `sw.js` die `VERSION` erhöhen, damit installierte Geräte die neue Fassung laden.

## Vorbelegen über die Adresse

Andere Formulare (z. B. der Vorgesprächsbogen) können einen Reiter öffnen und Felder vorbelegen:

    https://twoinar.github.io/kostenrechner/#scheidung?s_grund=180000&s_bm1=4000&s_kun=2&s_kua0=5

- Vor dem `?` steht der Reiter (`kauf`, `uebertragung`, `scheidung`, `ehevertrag`, `testament`, `vollmacht`, `tabelle`), danach Feld-IDs aus `index.html` mit Werten.
- Die übergebenen Werte ersetzen die gespeicherten Eingaben dieses Reiters; nicht übergebene Felder stehen auf der Vorgabe. Haken: `1` oder `0`.
- Scheidung: `s_nm1`/`s_nm2` übergeben das Nettoeinkommen monatlich; der Rechner rechnet es in das Bruttoeinkommen (`s_bm1`/`s_bm2`) zurück (Steuerklasse I, Kinder und Kirchensteuer wie übergeben). Ein ebenfalls übergebenes Brutto geht vor.
- Danach kürzt der Rechner die Adresse auf `#reiter`, damit ein Neuladen spätere Änderungen nicht überschreibt.
- Mit `einbetten=1` (im `<iframe>`) oder `fenster=1` (eigenes Fenster, mit `window.open` ohne `noopener` geöffnet) erscheint der Knopf „In den Vorgesprächsbogen übernehmen“. Er schickt `{typ:"gnotkg-uebernahme", reiter, titel, gw, netto, ust, durchlaufend, gesamt, text, herleitung, positionen, durchlaufendePosten, hinweise}` an die einbettende bzw. öffnende Seite; das eigene Fenster schließt sich danach.
- Mit `einbetten=1` meldet der Rechner in einem `<iframe>` jedes Ergebnis per `postMessage` an die einbettende Seite: `{typ:"gnotkg-kosten", reiter, titel, gw, netto, ust, durchlaufend, gesamt, text}`.

## Hinweis

Überschlägige Berechnung für die häufigsten Gestaltungen; maßgeblich bleibt die Prüfung im Einzelfall.
