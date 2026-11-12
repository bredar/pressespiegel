---
id: 2026-11-12-apache-http2-kritische-luecke
title: "Kritische Lücke im Webserver Apache: Update auf 2.4.71 nötig"
date: 2026-11-12
time: "17:30"
category: tech
icon: 🛡️
edition: evening
kurz: "Eine Schwachstelle im HTTP/2-Modul von Apache könnte Angreifern ohne Anmeldung das Einschleusen von Code ermöglichen."
summary: "Die Apache Software Foundation hat mit Version 2.4.71 eine kritische Lücke (CVE-2026-119618) im HTTP/2-Modul mod_http2 ihres Webservers geschlossen. Betroffen sind die Versionen 2.4.55 bis 2.4.70, sofern HTTP/2 aktiviert ist; Angreifer könnten ohne Anmeldung Speicher korrumpieren und im schlimmsten Fall Code ausführen. Red Hat bewertet die Lücke mit CVSS 9,8."
gegenstimme: "Sicherheitsforscher wie Kevin Beaumont halten einen funktionierenden Exploit wegen Schutzmechanismen wie ASLR für schwierig. Laut Wiz gab es bei Veröffentlichung keinen Exploit und keine bekannten Angriffe; ein öffentlicher Proof of Concept zeigt nur Abstürze, keine Codeausführung. Server, die nur HTTP/1.1 sprechen, sind nicht betroffen."
sources_json: '[{"name": "heise online", "url": "https://www.heise.de/news/Kritische-Sicherheitsluecke-in-Apache2-ermoeglicht-Codeeinschleusung-11523150.html"}, {"name": "SecurityWeek", "url": "https://www.securityweek.com/apache-patches-critical-http-server-rce-found-by-anthropic-google/"}]'
---
## Hintergrund
Die Lücke ist eine Race Condition in der Funktion assign_headers(). Gemeldet haben sie unabhängig voneinander Anthropics OSS-Scanner (26. Oktober) und zwei Forscher von Google Cloud Vulnerability Research (3. November). Laut Wiz laufen in 64 Prozent der untersuchten Cloud-Umgebungen betroffene Apache-Versionen, in 51 Prozent öffentlich erreichbar; die Konfiguration ist dabei nicht berücksichtigt. Version 2.4.71 behebt zudem zwei weitere Fehler (CVE-2026-106023, CVE-2026-109163). Apache hatte bereits im Mai kritische Lücken im selben Modul geschlossen.

## Was jetzt?
Betreiber sollten auf 2.4.71 oder die Pakete ihrer Distribution aktualisieren. Wer das nicht sofort kann, deaktiviert HTTP/2 vorübergehend (Protocols http/1.1). WordPress-Updates helfen nicht, weil der Fehler im Webserver steckt.

## Faktencheck
Gesichert: Lücke, betroffene Versionen und Patch (heise, SecurityWeek). Widersprüchlich: Red Hat verweist auf öffentliche Forschung mit einem zuverlässigen Exploit, nennt sie aber nicht; andere Fachleute halten die Ausnutzung für schwierig.
