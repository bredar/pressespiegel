---
id: 2026-11-23-riemann-vermutung-ki-beweis-lean-unabhaengig-geprueft
title: "Mathematik: KI-gestützter Beweis der Riemann-Vermutung hält ersten unabhängigen Prüfungen stand"
date: 2026-11-23
time: "12:10"
category: tech
icon: 🧮
edition: midday
image: "https://static.scientificamerican.com/dam/asset/64e45f50-d1c5-4a9f-ad48-60b52541abcc/riemann-proven.jpg?m=1795211310.647&w=1200"
kurz: "Ein mit dem KI-Modell Claude erstellter, maschinell prüfbarer Beweis für eines der berühmtesten Probleme der Mathematik gilt Fachleuten als sehr wahrscheinlich korrekt."
summary: "Der Anthropic-Mathematiker Levent Alpöge hat am 20. November einen mit dem KI-Modell Claude erzeugten Beweis der Riemann-Vermutung in der Beweissprache Lean vorgelegt. Unabhängige Prüfer, darunter Andrew Sutherland vom MIT, haben die 175'187 Module ohne Fehler kompiliert; die Lean- und Mathlib-Gemeinschaften bescheinigen, dass Aussage und Beweis korrekt seien. Die 1859 formulierte Vermutung über die Verteilung der Primzahlen gehört zu den sieben Millennium-Problemen."
gegenstimme: "Kein Mensch versteht den Beweis bisher im Detail: In natürliche Sprache übertragen wäre er laut ETH-Mathematiker Tim Gehrunger rund 250'000 Seiten lang. Kevin Buzzard (Imperial College) mahnte, zuerst zu prüfen, ob die Lean-Aussage wirklich der Riemann-Vermutung entspricht. Zudem stammt der Beweis von einem Mitarbeiter jener Firma, deren KI-Modell damit wirbt; die Prüfung durch Unabhängige ist deshalb zentral."
sources_json: '[{"name": "Scientific American: The AI Riemann hypothesis proof is true, independent mathematicians confirm", "url": "https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/"}, {"name": "MIT (Andrew Sutherland): Verification files for the Lean proof", "url": "https://math.mit.edu/~drew/grh/"}, {"name": "SRF: KI soll berühmtestes Problem der Mathematik gelöst haben", "url": "https://www.srf.ch/news/beweis-in-17-millionen-zeilen-ki-soll-beruehmtestes-problem-der-mathematik-geloest-haben"}]'
---
## Hintergrund
In Lean geschriebene Beweise gelten als korrekt, wenn sie fehlerfrei kompilieren und nur die drei Standardaxiome verwenden. Genau das bestätigt die Verifikationsseite des MIT: Zwei unabhängig geschriebene Prüfprogramme akzeptieren den exportierten Beweis, und ein Nachbau in einer abgeschotteten Umgebung ergab eine bitgenau identische Datei. Für die Zahlentheorie hätte ein Beweis grosse Folgen, weil viele Sätze bisher nur unter der Annahme gelten, dass die Riemann-Vermutung stimmt.

## Was jetzt?
Ausstehend ist noch der sogenannte Comparator-Lauf, der sicherstellt, dass der Code keine Symbole umdefiniert und damit stillschweigend etwas anderes beweist. Danach beginnt die Arbeit, den Beweis zu verkürzen und für Menschen nachvollziehbar zu machen. Über eine Anerkennung als Millennium-Problem entscheidet das Clay-Institut.

## Faktencheck
Teilweise belegt: Kompilierung und Axiomprüfung sind unabhängig bestätigt (MIT-Verifikationsseite, Scientific American, SRF). Offen ist der vollständige Comparator-Lauf (Stand 22. November, 17.20 Uhr Zürcher Zeit). Von einem endgültig anerkannten Beweis kann man noch nicht sprechen.
