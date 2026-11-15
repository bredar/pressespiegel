---
id: 2026-11-15-check-point-php2shell-root-luecke-wiper
title: "Check-Point-Firewalls: Angreifer kombinieren Lücken, Wiper löscht Daten"
date: 2026-11-15
time: "17:15"
category: tech
icon: 🛡️
edition: evening
kurz: "Angreifer brachen über PHP2Shell und eine Root-Lücke in ungepatchte Check-Point-Gateways ein; in einem Fall zerstörten sie Daten auf einem ESXi-Host."
summary: "Zwischen Ende Oktober und Anfang November haben Angreifer ungepatchte Check-Point-Gateways über die kritischen PHP2Shell-Lücken im Mobile-Access-Portal geknackt und sich danach über eine Lücke im Betriebssystem Gaia (CVE-2026-123039) Root-Rechte verschafft. In mindestens einem Fall setzten sie auf einem VMware-ESXi-Host den Wiper «destroy_v6» ein, der Daten überschreibt und löscht. Betroffen sind die Versionen R81 bis R82.20; Check Point rät zum November-Jumbo-Hotfix."
gegenstimme: "Check Point betont, Spark-Firewalls und Smart-1 Cloud seien nicht betroffen und die Fixes seien verfügbar; die Zahl kompromittierter Systeme ist mit «einigen Dutzend» in einer Region begrenzt. Sicherheitsforscher weisen allerdings darauf hin, dass für die nicht mehr unterstützten Versionen R81 und R81.10 kein Patch kommt und ein Update bereits eingenistete Hintertüren nicht entfernt."
sources_json: '[{"name": "Check Point (Advisory)", "url": "https://blog.checkpoint.com/security/security-advisory-active-exploitation-of-php2shell-and-local-privilege-escalation/"}, {"name": "Heise", "url": "https://www.heise.de/news/Angreifer-verketteten-PHP2Shell-mit-Root-Luecke-auf-Check-Point-Gateways-11525531.html"}, {"name": "SecurityWeek", "url": "https://www.securityweek.com/php2shell-exploited-in-destructive-check-point-gateway-attacks/"}]'
---
## Hintergrund
Die erste Angriffswelle startete am 30. Oktober und richtete sich gegen Organisationen in Israel; ab dem 2. November registrierte Check Point Scans in mehreren Ländern. Eine hinterlassene, politisch gefärbte Notiz lehnt Lösegeldverhandlungen ab, es ging offenbar um Zerstörung. Die US-Behörde CISA führt die Gaia-Lücke inzwischen als aktiv ausgenutzt.

## Was jetzt?
Admins sollten den November-Jumbo-Hotfix einspielen; wer nur den PHP2Shell-Fix vom 23. Oktober installiert hat, ist gegen die Root-Lücke nicht geschützt. Zudem sollten Systeme anhand der veröffentlichten Indicators of Compromise auf Webshells geprüft werden.

## Faktencheck
Gesichert: technische Details aus dem Advisory von Check Point, übereinstimmend bei Heise und SecurityWeek. Unklar: die Urheberschaft. Die Hintertüren ähneln einem Framework, das ESET der China zugeordneten Gruppe UNC5221 zuschreibt; Check Point schliesst eine falsche Fährte ausdrücklich nicht aus.
