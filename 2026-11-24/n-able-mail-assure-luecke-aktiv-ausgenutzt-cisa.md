---
id: 2026-11-24-n-able-mail-assure-luecke-aktiv-ausgenutzt-cisa
title: "Aktiv ausgenutzte Lücken in N-able Mail Assure und Monai Label"
date: 2026-11-24
time: "12:20"
category: tech
icon: 🔐
edition: midday
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/2/0/7/0/0/9/shutterstock_1124819546_jpg-09b0a814a5d4851d.jpg?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Die US-Cybersicherheitsbehörde CISA warnt vor Angriffen auf einen E-Mail-Filterdienst für IT-Dienstleister und eine medizinische KI-Software."
summary: "Die US-Behörde CISA hat am 23. November zwei Sicherheitslücken in ihren Katalog aktiv ausgenutzter Schwachstellen aufgenommen: eine Server-Side-Request-Forgery-Lücke (CVE-2026-134624) im E-Mail-Filterdienst N-able Mail Assure (SpamExperts) und eine Path-Traversal-Lücke (CVE-2026-133968) in der medizinischen KI-Bildanalyse-Software Monai Label. Für beide gibt es Updates."
gegenstimme: "N-able betont, Mailzustellung und Spamfilter hätten während des Vorfalls durchgehend funktioniert, der gehostete Dienst sei gepatcht. Offen bleibt, ob die Lücke tatsächlich das Einfallstor der Angreifer war – das hat N-able bisher nicht gesagt."
sources_json: '[{"name": "CISA: CISA Adds Two Known Exploited Vulnerabilities to Catalog", "url": "https://www.cisa.gov/news-events/alerts/2026/11/23/cisa-adds-two-known-exploited-vulnerabilities-catalog"}, {"name": "The Hacker News: N-able Discloses Critical Mail Assure Vulnerability", "url": "https://thehackernews.com/2026/11/n-able-discloses-critical-mail-assure.html"}, {"name": "heise: Cyberattacken auf N-able Mail Assure und Monai Label", "url": "https://www.heise.de/news/Cyberattacken-auf-N-able-Mail-Assure-und-Monai-Label-11535820.html"}]'
---
## Hintergrund
N-able hatte die Mail-Assure-Lücke nach eigenen Angaben bei der Untersuchung eines Einbruchs in seine gehostete Cloud von Mail Assure und SpamExperts entdeckt. Der Dienst filtert E-Mails für Managed Service Provider, also IT-Dienstleister, die wiederum viele Firmenkunden betreuen. Über die Lücke konnten Nutzer mit hohen API-Rechten beim LDAP-Verbindungstest den Server dazu bringen, Verbindungen zu frei wählbaren internen Systemen aufzubauen. Betroffen sind Versionen vor 20261121.1943. Dashboard und Schnittstellen waren seit vergangenem Montag gestört und wurden am späten Samstag wiederhergestellt.

## Was jetzt?
US-Bundesbehörden müssen die Lücken nach CISA-Vorgaben priorisiert schliessen. Betreiber eigener Installationen sollten laut heise spätestens jetzt aktualisieren.

## Faktencheck
Gesichert: Aufnahme in den KEV-Katalog wegen belegter Ausnutzung (CISA), technische Details und Patch (N-able via The Hacker News, heise). Unklar: Wer hinter den Angriffen steckt und wie viele Kunden betroffen sind.
