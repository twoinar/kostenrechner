# GNotKG Kostenrechner

Web-App für das Notariat: Kostenberechnung nach GNotKG (Tabelle B) für Kauf, Übertragung, Scheidungsfolgen, Ehevertrag, Testament/Erbvertrag, Vorsorgevollmacht und freie Gebühren.

- Läuft im Browser am PC und am Handy, lässt sich als App-Symbol auf den Startbildschirm legen und funktioniert danach auch offline.
- Keine Daten verlassen das Gerät; keine Anfragen an fremde Server (Schriften liegen in `schriften/`, SIL Open Font License).
- „Als Text kopieren“ und „Drucken“ für die Kostenberechnung.

## Veröffentlichen

GitHub Pages: Settings → Pages → „Deploy from a branch“ → `main` / `(root)`.
Nach Änderungen in `sw.js` die `VERSION` erhöhen, damit installierte Geräte die neue Fassung laden.

## Hinweis

Überschlägige Berechnung für die häufigsten Gestaltungen; maßgeblich bleibt die Prüfung im Einzelfall.
