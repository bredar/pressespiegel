---
id: 2026-11-10-chrome-zero-day-xml
title: "Chrome: Google stopft bereits ausgenutzte Sicherheitslücke"
date: 2026-11-10
time: "12:30"
category: tech
icon: 🛡️
edition: midday
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/1/9/8/1/0/3/2026-03-14-Chrome_SIcherheitsluecke-75e9a08263c241ca.png?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Google schliesst mit Chrome 157 neun Lücken, eine davon wird bereits aktiv angegriffen; es ist die achte solche Lücke in diesem Jahr."
summary: "Google hat am Montag Chrome-Updates auf Version 157.0.8103.50/.51 (Windows, macOS) und 157.0.8103.50 (Linux) veröffentlicht. Sie schliessen neun Lücken, darunter CVE-2026-125350, einen Use-after-free-Fehler in der XML-Verarbeitung, für den laut Google ein Exploit im Umlauf ist. Präparierte Webseiten können über solche Fehler Schadcode ausführen."
gegenstimme: "Google nennt weder Angreifer noch Ziele, die Gefahr für normale Nutzer lässt sich daher schwer einschätzen. Sicherheitsfachleute weisen zudem darauf hin, dass Updates schrittweise über Tage oder Wochen verteilt werden und erst nach einem Neustart des Browsers wirken; Nutzer anderer Chromium-Browser bleiben bis zu deren Update verwundbar."
sources_json: '[{"name": "Google Chrome Releases", "url": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_018223192.html"}, {"name": "heise", "url": "https://www.heise.de/news/Chrome-Update-stopft-attackiertes-Sicherheitsleck-11518215.html"}, {"name": "SecurityWeek", "url": "https://www.securityweek.com/chrome-update-patches-exploited-xml-zero-day-eighth-this-year/"}, {"name": "BleepingComputer", "url": "https://www.bleepingcomputer.com/news/security/google-patches-eighth-chrome-zero-day-exploited-in-attacks-this-year/"}]'
---
## Hintergrund
Die Lücke wurde am 6. November anonym gemeldet. Laut CyberInsider weist der zugehörige Chromium-Patch auf die Bibliothek libxslt hin, die XML-Dokumente umwandelt. Neben der angegriffenen Lücke behebt das Update sechs weitere hochriskante und zwei mittelschwere Fehler, unter anderem in V8, WebGL und der GPU-Komponente. Für die Extended-Stable-Version ist Chrome 156.0.8078.96 vorgesehen.

## Was jetzt?
Nutzer sollten über «Hilfe» und «Über Google Chrome» aktualisieren und den Browser neu starten. Microsoft arbeitet laut heise an einem Fix für Edge, auch Brave, Opera und Vivaldi dürften nachziehen.

## Faktencheck
Versionen, Lückenliste und der Hinweis auf einen Exploit stammen direkt aus Googles Release-Notes: **gesichert**. Die Einordnung als achte ausgenutzte Chrome-Lücke 2026 stammt von SecurityWeek und BleepingComputer. Umfang und Ziel der Angriffe sind **unklar**.
