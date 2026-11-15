---
id: 2026-11-15-n-central-zero-day-krypto-miner
title: "N-able N-central: Neue Zero-Day-Lücke aktiv ausgenutzt"
date: 2026-11-15
time: "12:15"
category: tech
icon: 🛡️
edition: midday
kurz: "Angreifer installieren über die Lücke «4EverAble2Shell» Krypto-Miner auf Fernwartungsservern, auch auf solchen mit dem neusten Patch."
summary: "Angreifer nutzen eine neue Zero-Day-Lücke in der Fernwartungsplattform N-central von N-able aus, um auf Servern Root-Rechte zu erlangen und Monero-Miner zu installieren. Sicherheitsfirmen zählten mindestens 21 kompromittierte Produktivserver, 19 davon mit dem erst am 10. November veröffentlichten Hotfix 2. Ausnutzbar ist die Lücke, wenn die Legacy-API aktiviert ist."
gegenstimme: "N-able erklärte in seinem Advisory vom 12. November, keine Anzeichen für Kompromittierungen über die neuen Lücken zu sehen, und betont, dass die Legacy-API standardmässig deaktiviert ist. Kritisch sehen lässt sich auch das Vorgehen des Forschers: Er veröffentlichte funktionsfähige Exploits ohne Vorwarnung, die ersten Angriffe folgten binnen Stunden. Der Forscher Sean Bales hält dagegen, N-able habe gemeldete Lücken jahrelang zu langsam behoben."
sources_json: '[{"name": "BleepingComputer", "url": "https://www.bleepingcomputer.com/news/security/new-n-able-4everable2shell-zero-day-exploited-hours-after-poc-released/"}, {"name": "Tenable", "url": "https://www.tenable.com/blog/able2shell-frequently-asked-questions-for-reported-n-able-n-central-zero-day-vulnerabilities"}, {"name": "Heise", "url": "https://www.heise.de/news/Warten-auf-Sicherheitspatch-Krypto-Miner-Attacken-auf-N-central-beobachtet-11525491.html"}]'
---
## Hintergrund
N-central wird von IT-Dienstleistern genutzt, um die Geräte ihrer Kunden zu verwalten. Ein Einbruch dort kann deshalb Zugang zu vielen Kundennetzen öffnen. Der Forscher Bales hatte zuvor über 30 mutmassliche Lücken veröffentlicht; N-able nahm daraufhin gehostete Umgebungen vom Netz. Die neue Angriffskette kombiniert eine Apache-Axis-Lücke (CVE-2026-90436) mit einer Rechteausweitung. Betroffene Server standen unter anderem in den USA, Deutschland, Frankreich und Grossbritannien.

## Was jetzt?
N-able schränkt Funktionen ein und hat die Intune-Integration deaktiviert. Betreiber sollen die Legacy-API abschalten und nach den bekannten Spuren suchen (Dienst «xvd.service», Dateien unter /tmp/.xvd). Wer betroffen ist, muss den Server als vollständig kompromittiert behandeln.

## Faktencheck
Gesichert: aktive Ausnutzung, beobachtet von zwei Sicherheitsfirmen (Previdian, Huntback) und berichtet von BleepingComputer, Tenable und Heise. Bisher ist nur Krypto-Mining belegt; ob Angreifer auch Kundennetze angegriffen haben, ist offen.
