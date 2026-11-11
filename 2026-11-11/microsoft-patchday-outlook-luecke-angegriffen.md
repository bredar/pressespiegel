---
id: 2026-11-11-microsoft-patchday-outlook-luecke-angegriffen
title: "Microsoft schliesst rund 1100 Lücken – eine in Outlook wird bereits ausgenutzt"
date: 2026-11-11
time: "12:30"
category: tech
icon: 🛠️
edition: midday
kurz: "Am November-Patchday stopft Microsoft 1094 Sicherheitslücken. Eine Outlook-Schwachstelle verrät Angreifern Anmeldedaten und wird aktiv attackiert."
summary: "Microsoft hat am November-Patchday 1094 Sicherheitslücken in Windows, Office und weiteren Produkten geschlossen. Die Outlook-Lücke CVE-2026-124194 wird bereits aktiv ausgenutzt: Öffnet ein Opfer eine präparierte Datei, verbindet sich Outlook ohne Warnung mit einem Server des Angreifers und gibt den NTLMv2-Hash preis, mit dem sich Angreifer als das Opfer anmelden können. Betroffen sind Microsoft 365 Apps for Enterprise sowie Office LTSC 2021 und 2024."
gegenstimme: "Microsoft stuft die angegriffene Lücke nur als «mittel» ein (CVSS 6,5), weil das Opfer die Datei aktiv öffnen muss und die Vorschau sie nicht auslöst. Sicherheitsfachleute kritisieren seit Langem, dass die schiere Zahl von über 1000 Patches pro Monat Administratoren überfordert. Über Art und Umfang der beobachteten Angriffe macht Microsoft keine Angaben."
sources_json: '[{"name": "Heise", "url": "https://www.heise.de/news/Microsoft-Patchday-Attacken-auf-Outlook-beobachtet-11520196.html"}, {"name": "SecurityWeek", "url": "https://www.securityweek.com/exploited-outlook-zero-day-among-1094-flaws-patched-by-microsoft/"}]'
---
## Hintergrund
Von den Lücken entfallen 726 auf Windows und 174 auf Office, dazu kommen SQL Server, Entwicklerwerkzeuge, SharePoint und Azure. Mehrere Schwachstellen gelten als kritisch, etwa eine in der Windows-Suchkomponente, die ohne Anmeldung angreifbar ist. Bemerkenswert: Microsoft nennt als Entdecker der Outlook-Lücke unter anderem einen Forscher, der dafür das KI-Modell Claude von Anthropic einsetzte.

## Was jetzt?
Admins sollten die Updates rasch einspielen, insbesondere für Outlook. Wer NTLM im Netz noch nutzt, ist besonders exponiert.

## Faktencheck
Gesichert: Zahl der Lücken und Angaben zur Outlook-Schwachstelle laut Microsoft Security Update Guide, übereinstimmend berichtet von Heise und SecurityWeek. Unklar: wer die Angriffe ausführt und gegen wen.
