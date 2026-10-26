---
id: 2026-10-25-php2shell-sicherheitsluecken
title: "php2shell: Kritische Lücken in sämtlichen PHP-Versionen"
date: 2026-10-25
time: "19:53"
category: tech
icon: 💻
edition: evening
kurz: "Zwei Schwachstellen mit CVSS 9.2 erlauben Codeausführung aus der Ferne ohne Anmeldung. Patches gibt es seit dem 21. Oktober, Angriffsversuche werden gemeldet."
summary: "Die Lücken CVE-2026-109618 und CVE-2026-109619 betreffen laut heise sämtliche PHP-Versionen der letzten 20 Jahre. Fixes sind in PHP 8.5.12, 8.4.27, 8.3.36 und 8.2.35 enthalten. Laut BSI ist eine erfolgreiche Ausnutzung in der Breite bisher nicht bekannt. Datadog zitiert AWS mit Angriffsversuchen schon ab dem 17. Oktober."
gegenstimme: "Calif, Datadog und BSI nennen Konfigurationsänderungen nur eine teilweise, vorübergehende Abhilfe. Heise weist darauf hin, dass die Ausnutzung bestimmte Vorbedingungen hat und mitunter mehrere Tausend Anfragen braucht. Das BSI erwartete eine breite Ausnutzung, hat aber bisher keine bestätigten erfolgreichen Kompromittierungen in der regulierten Wirtschaft oder der Bundesverwaltung gemeldet. Der Alarm ist also begründet, das Ausmass tatsächlicher Schäden ist offen."
sources_json: '[{"name":"heise online (Handlungsanleitung)","url":"https://www.heise.de/news/php2shell-Luecke-Was-jetzt-zu-tun-ist-11497046.html"},{"name":"heise online (Details)","url":"https://www.heise.de/news/php2shell-Kritische-Sicherheitsluecken-erlauben-Codeeinschleusung-in-PHP-11492938.html"},{"name":"BSI","url":"https://www.bsi.bund.de/SharedDocs/Cybersicherheitswarnungen/DE/2026/2026-297981-1032.pdf?__blob=publicationFile&v=3"},{"name":"Datadog Security Labs","url":"https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/"},{"name":"Calif","url":"https://calif.io/php2shell/"}]'
---

## Was bekannt ist

Beide Lücken haben laut heise und BSI einen CVSS-Wert von 9.2. Eine Anmeldung ist nicht nötig. Die Entdecker von Calif zeigten laut heise Codeausführung per php2shell auf einem Laravel-Server nach 38 Sekunden und bestätigten nach eigenen Angaben Remote-Codeausführung ohne Anmeldung unter anderem für WordPress, Drupal, Joomla, Nextcloud und Laravel. Das PHP-Projekt veröffentlichte die Patches am 21. Oktober um 14:00 UTC (16:00 Uhr MESZ). Betroffen sind laut Datadog und BSI Apache mit mod_php, PHP-FPM, php-cgi, FrankenPHP und LiteSpeed.

## Stand der Angriffe

Datadog zitiert AWS mit Ausnutzungsversuchen seit dem 17. Oktober, vier Tage vor der Veröffentlichung. Heise nennt unter Berufung auf Reuters «Millionen Angriffsversuche» laut Cloudflare. Das BSI schreibt, ihm sei keine erfolgreiche Ausnutzung in der Breite bekannt. Debian, Ubuntu, Fedora, Red Hat und SUSE liefern aktualisierte Pakete, Docker-Images brauchen neue Versionen.

## Einordnung

Gesichert: Schweregrad, betroffene Versionen und Patches (BSI, heise, Datadog, Calif übereinstimmend). Unklar: das tatsächliche Ausmass erfolgreicher Angriffe, hier gehen nur Versuche aus den Quellen hervor. Die Zahl «Millionen» stammt aus zweiter Hand (heise zitiert Reuters, dieses Cloudflare) und wurde nicht im Original geprüft. Das BSI bezeichnete frühe Meldungen über Angriffe in sozialen Medien zunächst als nicht verifizierbar, Datadog nennt AWS als Quelle der frühen Versuche.
