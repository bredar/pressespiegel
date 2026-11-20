---
id: 2026-11-20-ruby-kritische-luecken-codeausfuehrung-update
title: "Kritische Lücken in Ruby: Auch Rails, GitHub und GitLab betroffen"
date: 2026-11-20
time: "17:15"
category: tech
icon: 🛡️
edition: evening
kurz: "Sieben Sicherheitslücken in Ruby erlauben teils Codeausführung aus der Ferne, Exploits existieren. Updates sind verfügbar."
summary: "Das Ruby-Projekt hat am 18. November sieben Sicherheitslücken in der Verarbeitung von Zeichenketten und regulären Ausdrücken geschlossen; sechs davon können laut den Hinweisen Codeausführung im Ruby-Prozess erlauben, über Webanwendungen auch aus der Ferne. Für mehrere gibt es Demonstrations-Exploits. Die Entwickler raten dringend zum Update auf Ruby 4.0.10, 3.4.13 oder 3.3.14."
gegenstimme: "Die Einstufung «kritisch» ist umstritten: Der CVE-Eintrag bewertet die bereits nummerierte Lücke als lokal ausnutzbar und deutlich zurückhaltender als GitHub. Ob eine Anwendung aus der Ferne angreifbar ist, hängt davon ab, ob sie fremde Eingaben an die betroffenen Funktionen weitergibt."
sources_json: '[{"name": "heise online", "url": "https://www.heise.de/news/Kritisch-eingestufte-Luecken-in-Ruby-auch-Rails-GitHub-und-GitLab-betroffen-11532469.html"}, {"name": "Ruby-Projekt (Mitteilung)", "url": "https://www.ruby-lang.org/en/news/"}]'
---
## Hintergrund
Betroffen sind laut heise auch Anwendungen auf Basis von Ruby on Rails sowie Plattformen wie GitHub und GitLab, die Ruby einsetzen. Schon im Oktober hatte das Ruby-Projekt Fehler in der Regex-Engine Onigmo behoben, über die GitLab-Server angreifbar waren. Vier der neuen Lücken meldeten Stephan Lipp (Ada Logics) und das KI-Unternehmen Anthropic; am Fix für einen Ein-Byte-Überlauf war laut Commit ein Anthropic-Modell als Co-Autor beteiligt. Das zeigt, wie stark KI-Werkzeuge inzwischen bei der Suche nach Schwachstellen mitwirken.

## Was jetzt?
Betreiber von Ruby- und Rails-Anwendungen sollten sofort aktualisieren, auch eingebettete Ruby-Versionen in Containern und Paketen. Die CVE-Nummern fehlten bei Veröffentlichung noch weitgehend.

## Faktencheck
Gesichert: Lücken und Updates (Mitteilung des Ruby-Projekts, heise). Die Schwere ist uneinheitlich bewertet: Für die einzige bereits nummerierte Lücke nennt der CVE-Eintrag einen CVSS-Wert von 7,4 (hoch) mit lokalem Angriffsvektor, das GitHub-Advisory stuft sie deutlich höher ein. Aktive Angriffe sind nicht gemeldet.
