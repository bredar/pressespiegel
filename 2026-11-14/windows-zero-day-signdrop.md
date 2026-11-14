---
id: 2026-11-14-windows-zero-day-signdrop
title: "Windows-Zero-Day «SignDrop»: Normale Nutzer können Systemrechte erlangen"
date: 2026-11-14
time: "06:45"
category: tech
icon: 🪟
edition: morning
image: "https://www.securityweek.com/wp-content/uploads/2026/11/Nightmare-Eclipse.webp"
kurz: "Ein mit Microsoft zerstrittener Forscher veröffentlicht erneut ungepatchte Exploit-Details. Betroffen ist das Windows-Logsystem CLFS in Kombination mit Defender."
summary: "Der Sicherheitsforscher Abdelhamid Naceri alias «Nightmare Eclipse» hat am Dienstag einen Exploit namens SignDrop veröffentlicht, mit dem ein lokaler Benutzer auf manchen Windows-Versionen volle Systemrechte erlangen kann. Er missbraucht das Common Log File System (CLFS) und lässt Windows Defender eine präparierte Datei öffnen. Ein Patch oder eine CVE-Nummer von Microsoft lag laut Berichten bis Freitag nicht vor."
gegenstimme: "Naceri begründet seine Veröffentlichungen ohne Vorwarnung mit seinem Streit mit Microsoft über den Umgang mit gemeldeten Lücken. Verteidiger verantwortungsvoller Offenlegung kritisieren, dass so Angreifer einen Vorsprung erhalten, bevor ein Patch existiert. Relativierend: Die Lücke ist nur lokal ausnutzbar, Angreifer brauchen also bereits Zugang zum Rechner, und Angriffe in freier Wildbahn sind bisher nicht bekannt."
sources_json: '[{"name": "Ars Technica", "url": "https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/"}, {"name": "SecurityWeek", "url": "https://www.securityweek.com/nightmare-eclipse-drops-windows-zero-day-exploit-signdrop/"}, {"name": "BleepingComputer", "url": "https://www.bleepingcomputer.com/news/security/new-windows-signdrop-zero-day-gives-hackers-system-privileges/"}, {"name": "The Hacker News", "url": "https://thehackernews.com/2026/11/new-signdrop-zero-day-exploit-turns.html"}]'
---
## Hintergrund
Ironischerweise steckt die Lücke in einer Schutzmassnahme: Microsoft hatte im Oktober 2025 eine Authentifizierung für CLFS-Logdateien eingeführt, um frühere Angriffe zu verhindern. Fehlt die zugehörige Signaturdatei, erstellt CLFS sie mit den Rechten von Defender. Über manipulierte symbolische Links kann ein Angreifer diese Dateierstellung für eine Rechteausweitung missbrauchen. CLFS ist seit Jahren ein beliebtes Ziel, weil es komplexe Logdateien im Kernel verarbeitet.

## Was jetzt?
Betroffen sind laut The Hacker News Systeme, in denen die CLFS-Authentifizierung im Modus 0 oder 1 läuft. Administratoren sollten auf einen Notfall-Patch oder den nächsten Patch-Day achten.

## Faktencheck
Gesichert: Veröffentlichung und Funktionsweise laut Ars Technica, SecurityWeek und BleepingComputer übereinstimmend. Eine Stellungnahme von Microsoft war in den gesichteten Berichten nicht enthalten. Genaue Liste der betroffenen Windows-Versionen: unklar.
