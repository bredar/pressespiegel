---
id: 2026-11-15-microsoft-365-ausfall-phishing-kampagne
title: "Nach Microsoft-365-Ausfall: Phishing mit gefälschten Störungsmeldungen"
date: 2026-11-15
time: "17:15"
category: tech
icon: 🎣
edition: evening
kurz: "Kriminelle verschicken gefälschte Microsoft-365-Störungsmeldungen mit der echten Vorfallnummer EX1550543 und drohen mit Löschung angeblich zurückgehaltener Mails."
summary: "Microsofts Threat-Intelligence-Team warnt vor einer Phishing-Kampagne, die den Microsoft-365-Ausfall dieser Woche ausnutzt. Die Mails geben sich als Statusmeldungen aus, nennen die echte Exchange-Online-Vorfallnummer EX1550543 und behaupten, während des Ausfalls zurückgehaltene Nachrichten würden binnen 24 Stunden gelöscht, falls man sie nicht per Klick wiederherstelle."
gegenstimme: "Microsoft selbst konnte bisher weder das Abgreifen von Zugangsdaten noch die Auslieferung von Schadsoftware bestätigen; das Ausmass ist also noch unklar, und die bekannten Fälle betreffen US-Organisationen. Zudem lenkt die Warnung vom eigentlichen Problem ab: Erst der mehrtägige Ausfall selbst machte solche Köder glaubwürdig."
sources_json: '[{"name": "Heise", "url": "https://www.heise.de/news/Phishing-Kampagne-nutzt-Microsoft-Cloud-Ausfall-11525471.html"}, {"name": "iTnews", "url": "https://www.itnews.com.au/news/phishers-quick-to-exploit-extended-m365-outage-630347"}]'
---
## Hintergrund
Die Betreffzeilen folgen dem Muster «Outage – [sechsstelliger Code]», die Absendernamen tragen organisationsspezifische Präfixe. Genutzt werden die Domains moments-notice[.]com, planetmaison[.]com und newbooker[.]com; die Links laufen über SendGrid-Tracking auf reallifeaccounting[.]com weiter.

## Was jetzt?
Laut Microsoft blockiert Defender die Domains bereits. Admins sollten Safe-Links-Richtlinien prüfen und Störungen nur im Microsoft 365 Admin Center nachsehen, nicht über Links in E-Mails.

## Faktencheck
Gesichert: Existenz der Kampagne und Indikatoren laut Microsoft, übereinstimmend bei Heise und iTnews. Unbestätigt: dass tatsächlich Zugangsdaten gestohlen wurden. Ob auch Schweizer Organisationen Ziel waren, ist nicht bekannt.
