---
id: 2026-11-26-1password-kundendaten-gestohlen-github-konto
title: "1Password: Angreifer erbeuten Kundendaten über gekapertes Github-Konto"
date: 2026-11-26
time: "06:20"
category: tech
icon: 🔑
edition: morning
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/2/0/8/3/4/4/shutterstock_2839481119-eb3763d22c93a997.jpg?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Die Passwort-Tresore blieben laut Hersteller sicher, doch Namen, E-Mail-Adressen und Kontodaten sind abgeflossen – ideal für Phishing."
summary: "Beim Passwortmanager 1Password haben Angreifer Kundendaten erbeutet, darunter Namen, E-Mail-Adressen, Kontonummern, öffentliche Schlüssel und teils Identifizierungs-Token. Einfallstor war das Firmen-Github-Konto eines Mitarbeiters, über das die Täter Schadcode in Backend-Systeme einschleusten; der Hersteller Agilebits bemerkte den Vorfall am 19. November."
gegenstimme: "1Password betont, die Tresore und die darin gespeicherten Passwörter seien nicht betroffen, und ruft nicht zu Passwortänderungen auf. Heise hält dagegen, die Kombination aus echten Konto- und Identitätsdaten mache Phishing-Mails im Namen von 1Password besonders glaubwürdig. Wie viele Kunden betroffen sind, sagt das Unternehmen nicht."
sources_json: '[{"name": "Heise: 1Password – Kundendaten entfleucht", "url": "https://www.heise.de/news/1Password-Kundendaten-entfleucht-11538455.html"}, {"name": "The Verge: 1Password breach leaked customer names and emails, but not passwords", "url": "https://www.theverge.com/tech/1042409/1password-data-breach-leak"}]'
---
## Hintergrund
Die Täter griffen nicht die Datenbank direkt an, sondern veränderten über den Quellcode Backend-Dienste so, dass diese Kundendaten an sie auslieferten – eine Form des Lieferkettenangriffs. Laut The Verge betrafen die erbeuteten Token bestimmte per E-Mail verschickte Einladungs- oder Wiederherstellungslinks. Diese sollen allein keinen Zugriff auf Konten ermöglichen; die kleine Zahl betroffener Kunden wird direkt informiert. Wann die Malware eingeschleust wurde, teilt Agilebits nicht mit.

## Was jetzt?
Kunden sollten Mails, Anrufe oder Links, die angeblich von 1Password stammen, besonders kritisch prüfen und nie das Master-Passwort oder den Secret Key herausgeben. Für Unternehmen zeigt der Fall, wie heikel Entwickler-Konten bei Code-Plattformen sind.

## Faktencheck
Gesichert: Ablauf und Datenkategorien laut Mitteilung des Herstellers, übereinstimmend von Heise und The Verge wiedergegeben. Unklar: Zahl der Betroffenen und Zeitpunkt des Eindringens. Dass die Tresore sicher sind, ist eine Angabe des Herstellers, die unabhängig nicht geprüft ist.
