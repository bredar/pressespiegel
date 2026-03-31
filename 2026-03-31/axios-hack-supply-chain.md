---
id: 2026-03-31-axios-hack-supply-chain
title: "Axios-Bibliothek gehackt: Millionen Entwickler-Rechner gefährdet"
date: 2026-03-31
time: "17:00"
category: tech
icon: 💻
edition: evening
image: ""
kurz: "Die populäre JavaScript-HTTP-Bibliothek Axios wurde über ein kompromittiertes npm-Konto mit einem Remote Access Trojan verseucht. Betroffen sind alle Entwickler, die am 31. März 2026 zwischen 00:21 und 03:29 UTC ein npm install durchführten."
summary: "Am 31. März 2026 wurden zwei schadhafte Versionen der weit verbreiteten JavaScript-Bibliothek Axios (v1.14.1 und v0.30.4) auf npm veröffentlicht. Der Angreifer hatte das npm-Konto eines Hauptentwicklers übernommen und eine versteckte Abhängigkeit eingeschleust, die automatisch beim Installieren einen plattformübergreifenden Remote Access Trojan (RAT) auf dem Zielsystem installierte. Das Sicherheitsunternehmen StepSecurity erkannte den Angriff und meldete ihn; npm entfernte beide Versionen bis 03:29 UTC. Entwickler, die in diesem Zeitfenster einen frischen Install durchführten, müssen ihre Systeme und alle gespeicherten Zugangsdaten als kompromittiert betrachten."
gegenstimme: "Kritiker weisen darauf hin, dass npm als Plattform seit Jahren unter unzureichendem Schutz gegen Account-Übernahmen leidet. Die Tatsache, dass ein einzelnes kompromittiertes Maintainer-Konto 100 Millionen wöchentliche Downloads gefährden kann, zeigt die strukturelle Schwäche des npm-Ökosystems. Zudem löscht sich die Malware selbst, was forensische Nachweise erschwert – viele betroffene Entwickler werden nie erfahren, ob ihr System infiziert war."
sources_json: '[{"name":"StepSecurity Blog","url":"https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan"},{"name":"Snyk Advisory","url":"https://snyk.io/blog/axios-npm-package-compromised-supply-chain-attack-delivers-cross-platform/"},{"name":"Socket.dev Blog","url":"https://socket.dev/blog/axios-npm-package-compromised"},{"name":"Malwarebytes","url":"https://www.malwarebytes.com/blog/news/2026/03/axios-supply-chain-attack-chops-away-at-npm-trust"},{"name":"The Hacker News","url":"https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html"}]'
---
## Axios-Bibliothek gehackt: Millionen Entwickler-Rechner gefährdet

Axios gilt mit über 100 Millionen wöchentlichen Downloads als eine der meistgenutzten JavaScript-Bibliotheken weltweit. Am frühen Morgen des 31. März 2026 wurden zwei schadhafte Versionen – axios@1.14.1 und axios@0.30.4 – über ein kompromittiertes npm-Konto veröffentlicht. Der Angreifer hatte Zugang zum Account des Hauptentwicklers „jasonsaayman" erlangt und dessen E-Mail-Adresse auf eine Proton-Mail-Adresse unter seiner Kontrolle geändert.

### Technischer Ablauf des Angriffs

Der Angriff war sorgfältig vorbereitet: Bereits 18 Stunden vor der Veröffentlichung der schadhaften Axios-Versionen wurde eine täuschend harmlos wirkende Abhängigkeit namens `plain-crypto-js@4.2.0` auf npm hochgeladen – lediglich um einen kurzen Veröffentlichungsverlauf zu erzeugen und Sicherheitsscanner zu umgehen. Kurz danach folgte Version 4.2.1 mit der eigentlichen Schadfunktion.

Beide kompromittierten Axios-Releases enthielten diese neue Abhängigkeit in ihrer `package.json`. Beim Ausführen von `npm install` lud npm automatisch `plain-crypto-js@4.2.1` herunter und führte dessen `postinstall`-Skript aus. Dieses Skript, doppelt verschleiert mittels umgekehrter Base64-Kodierung und XOR-Verschlüsselung, kontaktierte einen Command-and-Control-Server unter `sfrclak[.]com:8000` und lud eine plattformspezifische zweite Nutzlast für macOS, Windows oder Linux herunter.

Nach der Ausführung löschte die Malware alle Spuren: Das Setup-Skript wurde entfernt, die `package.json` durch eine saubere Version ersetzt. Entwickler, die danach ihren `node_modules`-Ordner inspizieren, finden keine sichtbaren Hinweise auf eine Kompromittierung.

### Zeitachse

| Zeitpunkt (UTC) | Ereignis |
|---|---|
| 30.03., 05:57 | `plain-crypto-js@4.2.0` als harmlose Köder-Version veröffentlicht |
| 30.03., 23:59 | `plain-crypto-js@4.2.1` mit Schadfunktion veröffentlicht |
| 31.03., 00:21 | `axios@1.14.1` über kompromittiertes Konto veröffentlicht |
| 31.03., 01:00 | `axios@0.30.4` veröffentlicht (Legacy-Zweig, 39 Minuten später) |
| 31.03., ~03:15 | Beide Versionen von npm entfernt |

### Was ist zu tun?

Jede Entwicklungsumgebung oder CI/CD-Pipeline, die zwischen 00:21 und 03:29 UTC ein `npm install` mit einer dieser Versionen durchführte, muss als potenziell vollständig kompromittiert betrachtet werden. Empfohlene Massnahmen:

- **Lockfiles prüfen:** Enthält `package-lock.json` oder `yarn.lock` die Version 1.14.1 oder 0.30.4?
- **Secrets rotieren:** Cloud-Schlüssel, Deployment-Keys, npm-Tokens und alle anderen gespeicherten Zugangsdaten sofort ersetzen.
- **Systeme isolieren und untersuchen:** Betroffene Rechner sollten als kompromittiert eingestuft und forensisch untersucht werden.
- **Auf sichere Version wechseln:** Jede andere Version ausser 1.14.1 und 0.30.4 gilt als sicher. Die empfohlene aktuelle Version ist 1.14.0.

Der Snyk-Advisory-Code lautet SNYK-JS-AXIOS-15850650. StepSecurity hat zudem für den 1. April 2026 ein öffentliches Community-Webinar angekündigt, um den vollständigen Angriffsverlauf zu erläutern.

## Einordnung

Für Schweizer Entwicklerinnen und Entwickler sowie Unternehmen mit JavaScript-Projekten ist dieser Vorfall hochrelevant. Axios wird in unzähligen modernen Web- und Node.js-Applikationen eingesetzt – von Start-ups bis hin zu Grossunternehmen. Die Tatsache, dass die Malware keine sichtbaren Spuren hinterlässt, bedeutet: Wer betroffen ist und nichts unternimmt, bleibt dauerhaft gefährdet.

Besonders brisant ist der Angriff für Firmen, die automatisierte CI/CD-Pipelines ohne fixierte Dependency-Versionen betreiben. In der Schweiz gibt es keine behördliche Meldepflicht für solche Supply-Chain-Kompromittierungen, es sei denn, es handelt sich um Betreiber kritischer Infrastruktur. Das Nationale Zentrum für Cybersicherheit (NCSC) hat bisher keine offizielle Stellungnahme veröffentlicht.

Dieser Angriff reiht sich in eine Serie hochkarätiger npm-Supply-Chain-Attacken der letzten Jahre ein und unterstreicht die Notwendigkeit, Dependency-Management als Teil der Sicherheitsstrategie ernst zu nehmen – auch für kleinere Schweizer Softwareunternehmen.

---
**Quellen:**
- StepSecurity Blog: https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan
- Snyk Advisory: https://snyk.io/blog/axios-npm-package-compromised-supply-chain-attack-delivers-cross-platform/
- Socket.dev: https://socket.dev/blog/axios-npm-package-compromised
- Malwarebytes: https://www.malwarebytes.com/blog/news/2026/03/axios-supply-chain-attack-chops-away-at-npm-trust
- The Hacker News: https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html
