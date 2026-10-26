---
id: 2026-10-26-brotli-luecke-node-python-bun
title: "Kritische Brotli-Lücke betrifft weit mehr als Node.js"
date: 2026-10-26
time: "12:30"
category: tech
icon: 🔓
edition: midday
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/1/8/8/8/3/8/2026-10-26-Broccoli2Shell-Aufmacher-29fdc618ce9cd6b5.png?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Die vergangene Woche in Node.js entdeckte Lücke steckt in Googles Brotli-Bibliothek selbst. Betroffen sind auch Python, Bun und viele weitere Programme."
summary: "Die als «node2shell» bekannt gewordene Sicherheitslücke steckt im Brotli-Decoder von Google in den Versionen 1.0.3 bis 1.2.0 und betrifft deshalb zahlreiche Programme, darunter Python, Bun und Envoy. Angreifer können über präparierte Datenströme ohne Anmeldung Speicher auslesen, Abstürze auslösen oder Schadcode ausführen (CVE-2026-111497, Risiko «kritisch»). Korrigiert ist der Fehler in Brotli 1.0.10, 1.1.1 und 1.2.1."
gegenstimme: "Sicherheitsforscher betonen, dass nicht jede Installation tatsächlich angreifbar ist: Apache und Nginx dekodieren in der Standardkonfiguration kein Brotli. Ob die Lücke bereits aktiv ausgenutzt wird, ist nicht belegt. Gleichzeitig zeigt der Fall, wie schwer gebündelte Bibliotheken in fertigen Programmen und Containern zu finden sind."
sources_json: '[{"name": "heise online", "url": "https://www.heise.de/news/Brotli-Decoder-Luecke-nicht-nur-in-Node-js-sondern-auch-in-Bun-Python-und-mehr-11499975.html"}, {"name": "The Hacker News", "url": "https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html"}, {"name": "Bun Security Advisory (GitHub)", "url": "https://github.com/oven-sh/bun/security/advisories/GHSA-663w-cv8g-jj2p"}]'
---

## Hintergrund
Brotli ist ein weit verbreitetes Kompressionsverfahren, das etwa Webserver und Browser für HTTP nutzen. Zuerst wurde der Fehler in Node.js bekannt, dort sind die Versionen 26.12.1, 24.22.1 und 22.23.4 korrigiert. Für Python gibt es die Pakete «Brotli» 1.2.1 und «brotlicffi» 1.2.1.0. Betroffen ist auch Software, die Brotli über C-Bindings einbindet, etwa Java-, PHP-, Ruby- oder Go-Erweiterungen. Die Lücke hat inzwischen weitere Namen, «Broccoli2Shell» und «HTTP2Shell».

## Was jetzt?
Administratoren sollten Laufzeitumgebungen und Bibliotheken aktualisieren und Programme, die Brotli fest einbauen, neu bauen, etwa mit Bun erstellte Programme und Container-Images. Bun hat eine eigene Sicherheitswarnung veröffentlicht.

## Faktencheck
Betroffene Versionen und Patches sind durch heise, The Hacker News und die Sicherheitswarnung von Bun auf GitHub belegt. Die Liste weiterer betroffener Software stammt von der Sicherheitsfirma Aikido, die mit der Analyse auch ihre Produkte bewirbt. Berichte über aktive Angriffe haben wir nicht gefunden.
