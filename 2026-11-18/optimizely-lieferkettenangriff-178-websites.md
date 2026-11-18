---
id: 2026-11-18-optimizely-lieferkettenangriff-178-websites
title: "Lieferkettenangriff über Optimizely: Schadcode auf 178 Websites von Ikea bis Air France"
date: 2026-11-18
time: "12:10"
category: tech
icon: 🛡️
edition: midday
image: "https://image.20min.ch/2026/11/18/74b42b1e-fa88-4651-884d-afc8eea9d96e.jpg?auto=format%2Ccompress%2Cenhance&fit=max&w=1200&h=1200&rect=0%2C0%2C6000%2C4000&s=daaa43328f1530f30e329a339d9d24f7"
kurz: "Angreifer haben über eine Lücke beim Webdienstleister Optimizely Schad-JavaScript in 178 Websites eingeschleust, um Kartendaten und Kryptowährungen zu stehlen."
summary: "Unbekannte haben über eine Schwachstelle beim US-Dienstleister Optimizely manipulierten JavaScript-Code in die Websites von 178 Organisationen eingeschleust, darunter laut Berichten Ikea, CNN, BBC und Air France. Der Code versuchte, Kreditkartendaten aus Formularen auszulesen, Krypto-Adressen auszutauschen und ältere Apple-Geräte mit Schadsoftware zu infizieren. Optimizely bestätigte den Vorfall: Die Lücke sei blockiert, der Code entfernt und die Kunden informiert."
gegenstimme: "Optimizely betont, der Vorfall sei am selben Tag eingedämmt worden; wie viele Nutzer tatsächlich Daten verloren haben, ist unbekannt und könnte gering sein. Der Fall zeigt aber ein strukturelles Risiko solcher Lieferkettenangriffe: Wer fremde Skripte in seine Website einbindet, macht den Dienstleister zum Einfallstor; unklar ist zudem noch, wie die Angreifer Zugang zu Optimizely erhielten."
sources_json: '[{"name": "Optimizely (Sicherheitsbericht)", "url": "https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf"}, {"name": "Der Spiegel", "url": "https://www.spiegel.de/netzwelt/web/ikea-cnn-air-france-hacker-versteckten-schadsoftware-in-populaeren-websites-a-04279686-267b-48af-ad84-fa3ba4558e02"}, {"name": "20 Minuten", "url": "https://www.20min.ch/story/cyberangriff-fast-200-websites-von-bbc-ueber-ikea-bis-air-france-angegriffen-103669436"}]'
---
## Hintergrund
Laut dem Sicherheitsbericht von Optimizely nutzten die Angreifer eine Lücke im Anmeldeprozess des Produkts Web Experimentation, um sich als Administratoren auszugeben. Entdeckt wurde der Vorfall am 16. November. Der Sicherheitsforscher Scott Helme und sein Team identifizierten die betroffenen Organisationen. Optimizely hat nach eigenen Angaben über 10'000 Geschäftskunden; seine Skripte dienen etwa dazu, Websites für einzelne Nutzergruppen anzupassen.

## Was jetzt?
Wer in den letzten Tagen auf betroffenen Seiten Kartendaten eingegeben hat, sollte Abrechnungen prüfen; Nutzer älterer iPhones und iPads sollten Updates installieren.

## Faktencheck
Gesichert: Angriff, Zahl 178 und Ziele (Optimizely-Sicherheitsbericht, Spiegel/Bleeping Computer, 20 Minuten/Cybernews). Unklar: Täter und Zahl der tatsächlich Geschädigten; die Liste der betroffenen Firmen stammt von Forschern, nicht von Optimizely.
