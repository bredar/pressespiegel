---
id: 2026-11-18-java4shell-sicherheitsluecke-openjdk
title: "«Java4Shell»: Kritische Lücke in Java, Oracle liefert Patches"
date: 2026-11-18
time: "06:10"
category: tech
icon: ☕
edition: morning
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/2/0/3/3/0/3/java-c66fe0ed81784717.jpg?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Eine Speicherlücke im Base64-Decoder von Java erlaubt unter Umständen Codeausführung aus der Ferne. Admins sollten die Updates vom 17. November einspielen."
summary: "Oracle und das OpenJDK-Projekt haben am Dienstag zehn Java-Lücken geschlossen, darunter CVE-2026-114938, genannt «Java4Shell». Der Fehler im hardwarebeschleunigten Base64-Decoder kann laut Entdecker Calif Angreifern ohne Anmeldung Codeausführung erlauben; betroffen sind OpenJDK 17.0.6 und neuer sowie die Versionen 21, 25 und 27. Oracle bewertet die Lücke mit CVSS 8.1, Calif mit 9.2."
gegenstimme: "Die Gefahr ist begrenzter, als der Name nahelegt: Laut Calif ist nur Java auf x86-64-Prozessoren mit AVX-512-VBMI betroffen (etwa neuere Intel-Xeon und AMD ab Zen 4), ARM-Systeme nicht. Oracle stuft die Angriffskomplexität als hoch ein, und eine Ausnutzung setzt voraus, dass eine Anwendung ungeprüfte Daten an die betroffenen Funktionen weitergibt. Ausnutzung in freier Wildbahn war bis Dienstag nicht bekannt."
sources_json: '[{"name": "OpenJDK Vulnerability Advisory", "url": "https://openjdk.org/groups/vulnerability/advisories/2026-11-17"}, {"name": "heise online", "url": "https://www.heise.de/news/Java4Shell-Gefaehrlicher-Bug-in-Java-11528499.html"}, {"name": "Tenable", "url": "https://www.tenable.com/blog/java4shell-cve-2026-114938-frequently-asked-questions-about-openjdk-rce-vulnerability"}]'
---
## Hintergrund
Calif will in Tests Codeausführung ohne Login bei verbreiteter Software wie Atlassian Jira und Jenkins erreicht haben, hält die anwendungsspezifischen Exploits aber vorerst zurück; ein Proof of Concept, der den Fehler auslöst, ist veröffentlicht. Betroffen sind auch auf OpenJDK basierende Distributionen wie Amazon Corretto, Eclipse Temurin, Microsoft Build of OpenJDK, Azul Zulu und Red Hat OpenJDK. Der Fix ist Teil von Oracles monatlichem Sicherheitsupdate mit über 650 Patches über die ganze Produktpalette.

## Was jetzt?
Updates einspielen, aus dem Internet erreichbare Systeme zuerst. Wer nicht sofort patchen kann, kann laut Calif die betroffene Beschleunigung mit der Option -XX:-UseBASE64Intrinsics abschalten. Die Distributoren liefern Updates nach eigenem Zeitplan.

## Faktencheck
Gesichert: CVE-Nummer, betroffene Versionen und Patches (OpenJDK-Advisory, Oracle, heise, Tenable). Teilweise belegt: die Angriffswege auf Jira und Jenkins, sie stammen bisher nur von Calif.
