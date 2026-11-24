---
id: 2026-11-24-vp-vnp-valiant-vermutung-anthropic-openai-beweise
title: "KI-Beweise für Valiants Vermutung: Anthropic und OpenAI legen fast zeitgleich vor"
date: 2026-11-24
time: "17:05"
category: tech
icon: 🧮
edition: evening
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/2/0/7/4/2/5/shutterstock_2755383857-3cbbd48e8cc11827.jpg?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Beide KI-Firmen beanspruchen den Beweis von VP ≠ VNP, einem seit 1979 offenen Problem der Informatik; geprüft hat ihn noch kein Mensch."
summary: "Anthropic hat am 23. November ein 70-seitiges Paper veröffentlicht, das mit einem von einem internen Claude-Modell gefundenen Beweis die Vermutung VP ≠ VNP von Leslie Valiant (1979) belegen soll; wenige Stunden später folgte OpenAI mit einem 30-seitigen Paper. Beide Arbeiten sind in der Beweissprache Lean formalisiert, aber noch von keinem unabhängigen Mathematiker geprüft."
gegenstimme: "Fachleute mahnen zur Vorsicht: Lean prüft nur, ob die Beweisschritte aus den Definitionen folgen, nicht ob die Definitionen das meinen, was behauptet wird – Anthropic räumt selbst ein, dies hätten «nur KI-Leser» beurteilt. Laut Paper sind zudem vier Beweisschritte nur in Lean, nicht auf Papier nachvollziehbar; die Formalisierung von OpenAI deckt laut Fachportalen nicht den Hauptsatz des Papers ab."
sources_json: '[{"name": "Heise: Anthropic und OpenAI mit fast zeitgleichen Beweisen für VP ≠ VNP", "url": "https://www.heise.de/news/Mathe-Wettlauf-Anthropic-und-OpenAI-mit-fast-zeitgleichen-Beweisen-fuer-VP-VNP-11536640.html"}, {"name": "Anthropic (Primärquelle): VP ≠ VNP over every field", "url": "https://raw.githubusercontent.com/anthropics/formal-math/main/vp-vnp/paper.pdf"}, {"name": "Sysnote: Proofs five hours apart, Lean coverage differs", "url": "https://sysnote.net/news/anthropic-and-openai-post-vp-vnp-proofs-five-hours-apart-only-anthropic-s-lean-c"}]'
---
## Hintergrund
VP ≠ VNP ist das algebraische Gegenstück zur berühmten Frage P ≠ NP, löst diese aber nicht. Es geht darum, ob bestimmte Polynome – etwa die Permanente einer Matrix – mit kleinen arithmetischen Schaltkreisen berechnet werden können. Laut eigener Darstellung erzielte OpenAI das Resultat bereits am 6. November; wann Anthropics Modell den Beweis fand, ist nicht bekannt. Die beiden Arbeiten nutzen unterschiedliche Methoden und beanspruchen unterschiedlich starke Schranken.

## Was jetzt?
Entscheidend ist die Prüfung durch Fachleute der Komplexitätstheorie. Die Veröffentlichungen folgen wenige Tage nach einem ebenfalls KI-gestützten Beweis der Riemannschen Vermutung durch einen Anthropic-Forscher.

## Faktencheck
Gesichert: Veröffentlichung beider Papers und die Lean-Formalisierungen. Behauptung: dass die Beweise korrekt sind – bisher nur maschinell, nicht durch Menschen bestätigt. Unklar: Priorität zwischen beiden Firmen.
