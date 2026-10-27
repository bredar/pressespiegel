---
id: 2026-10-27-php2shell-angriffe-bestaetigt
title: "PHP-Lücke «php2shell»: Erste erfolgreiche Angriffe"
date: 2026-10-27
time: "12:30"
category: tech
icon: 🛡️
edition: midday
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/1/8/9/4/4/1/2026-10-27-php2shell-Aufmacher-e7472540eda12833.png?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Die US-Behörde CISA bestätigt aktive Angriffe auf die kritischen PHP-Lücken «php2shell». Allein in Deutschland melden sich noch über 4 Millionen Dienste mit anfälligen Versionen."
summary: "Die US-Cybersicherheitsbehörde CISA hat die beiden kritischen PHP-Schwachstellen CVE-2026-109618 und CVE-2026-109619, bekannt als «php2shell», am Montag in ihren Katalog aktiv ausgenutzter Lücken aufgenommen. Ein Sicherheitsforscher dokumentierte am Wochenende erstmals ausgeführten Schadcode auf Honeypots mit PHP 8.4.26. Die Lücken erlauben Angreifern ohne Anmeldung, Code auf ungepatchten Servern auszuführen."
gegenstimme: "Die Zahl von über 4 Millionen verwundbaren Diensten ist laut dem Scanner-Betreiber Censys selbst nur ein Indiz, weil viele Linux-Distributionen Patches in ältere Versionsnummern zurückportieren. Die Angriffe gelten zudem als technisch anspruchsvoll, und lange blieben Millionen Versuche erfolglos. Für die Schweiz liegen keine eigenen Zahlen vor."
sources_json: '[{"name": "Heise", "url": "https://www.heise.de/news/php2shell-Erfolgreiche-Angriffe-bestaetigt-noch-viele-Instanzen-ungepatcht-11501167.html"}, {"name": "Bleepingcomputer", "url": "https://www.bleepingcomputer.com/news/security/cisa-confirms-php2shell-vulnerabilities-now-exploited-in-attacks/"}]'
---
## Hintergrund
Das PHP-Team veröffentlichte die Updates am 21. Oktober, nachdem Details und unbrauchbare Proof-of-Concept-Exploits schon vorher durchgesickert waren. Amazon beobachtete Angriffsversuche bereits vier Tage vor den Patches. PHP läuft auf rund 70 Prozent aller Websites. Zusätzlich gibt es seit Freitag eine dritte Lücke (CVE-2026-115560) ohne Patch, die nur bei ungewöhnlichen Konfigurationen ausnutzbar sein soll.

## Was jetzt?
US-Bundesbehörden müssen bis Donnerstag patchen. Betreiber sollten auf PHP 8.5.12, 8.4.27, 8.3.36 oder 8.2.35 aktualisieren, öffentlich erreichbare Systeme zuerst, und Server auf verdächtige Kindprozesse von PHP-Workern prüfen.

## Faktencheck
Gesichert: KEV-Eintrag der CISA und erste erfolgreiche Ausnutzung (Heise, Bleepingcomputer). Unklar: wie viele reale Systeme bereits kompromittiert sind; bisher sind nur Honeypots dokumentiert.
