---
id: 2026-10-29-npm-wurm-testmetest-42-repos
title: "npm-Wurm «testmetest»: 42 GitHub-Repositories mit Schadcode präpariert"
date: 2026-10-29
time: "12:30"
category: tech
icon: 🪱
edition: midday
kurz: "Angreifer haben 42 Repositories von 11 legitimen Eigentümern mit versteckten Hooks versehen, die beim Öffnen in KI-Coding-Tools oder VS Code Schadcode ausführen können."
summary: "Sicherheitsforscher von JFrog haben 42 GitHub-Repositories von 11 legitimen Eigentümern gefunden, die im Rahmen der npm-Wurm-Kampagne «testmetest» mit Schadcode präpariert wurden. Versteckte Ausführungshooks können Code starten, wenn Entwickler ein Projekt in Claude Code, Gemini, Cursor oder VS Code öffnen. Die Schaddatei `.github/init.js` ist mit rund 13 MB so gross, dass GitHubs Codesuche sie nicht indexiert."
gegenstimme: "Ein Teil der Forscher wertet die Kampagne noch als öffentlichen Testlauf mit begrenztem Schaden. Andere warnen, dass gerade die Kombination aus Wurm, angehängtem Datenlöscher und der Ausführung durch KI-Assistenten ein neues Risiko schafft, das Plattformen bisher unterschätzen."
sources_json: '[{"name": "JFrog Security Research", "url": "https://research.jfrog.com/post/beyond-testmetest-42-hijacked-github-repos/"}, {"name": "Heise", "url": "https://www.heise.de/news/Angreifer-kapern-42-GitHub-Repositories-fuer-npm-Wurm-Kampagne-testmetest-11503164.html"}, {"name": "The Register", "url": "https://www.theregister.com/security/2026/10/26/worm-armed-42-github-repos-by-hiding-a-payload-too-big-to-fail/5305570"}]'
---

## Hintergrund
Die Angreifer nutzen aus, dass KI-Coding-Agenten und Editoren Projektkonfigurationen automatisch ausführen. Laut The Register und Rafter enthält die Kampagne zudem eine Wiper-Komponente, die Daten zerstören kann. Betroffene Pakete sind in der OSV-Datenbank als Schadsoftware erfasst.

## Was jetzt?
Entwickler sollten Lockfiles auf testmetest-Pakete, `.napi_cache`, `net-health-checker` und `pkg-runtime` prüfen, die Persistenz entfernen, bevor GitHub-Tokens widerrufen werden, und alle erreichbaren Zugangsdaten erneuern.

## Faktencheck
Die Zahl von 42 Repositories und die Technik sind von JFrog dokumentiert und von Heise und The Register nachvollzogen: **gesichert**. Wer hinter der Kampagne steht, ist **unklar**.
