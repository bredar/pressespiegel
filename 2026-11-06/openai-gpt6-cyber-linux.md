---
id: 2026-11-06-openai-gpt6-cyber-linux
title: "OpenAI: GPT-6 Cyber findet 948 Linux-Rechteausweitungen und 81 Firefox-Lücken"
date: 2026-11-06
time: "06:30"
category: tech
icon: 🛡️
edition: morning
kurz: "Neues Cybersecurity-Modell mit «Critical»-Einstufung; Zugang nur für geprüfte Daybreak-Red-Kunden."
summary: "OpenAI hat GPT-6 Cyber vorgestellt, ein auf Schwachstellensuche und Exploit-Validierung trainiertes Modell. Es entwickelte laut OpenAI 948 funktionierende lokale Rechteausweitungs-Exploits im Linux-Kernel und fand 81 zuvor unbekannte High-Severity-Lücken in Firefox. Die Firma stuft das Modell im Preparedness Framework als «Critical» ein und beschränkt den Zugang auf genehmigte Daybreak-Red-Kunden."
gegenstimme: "Sicherheitsforscher begrüssen die Defensiv-Nutzung, warnen aber vor Missbrauch und vor der Senkung der Hürde für Zero-Day-Angriffe. OpenAI betont Alignment-Tests (99,93 Prozent Scope-Einhaltung ohne Prompt, 100 Prozent mit Prompt) und zusätzliche Sperren für kritische Infrastruktur."
sources_json: '[{"name": "OpenAI", "url": "https://openai.com/index/introducing-gpt-6-cyber"}, {"name": "Heise", "url": "https://www.heise.de/news/OpenAIs-fuer-Cybersecurity-verbessertes-KI-Modell-GPT-6-Cyber-haelt-sich-an-Regeln-11514280.html"}, {"name": "Axios", "url": "https://www.axios.com/2026/11/05/openai-linux-cyber-model"}]'
---
## Hintergrund
Auf dem Benchmark ExploitGym erreicht GPT-6 Cyber laut OpenAI 48,5 Prozent, gegenüber 32,1 Prozent bei GPT-5.6 Cyber. Mozilla habe bereits Fixes für viele Firefox-Funde ausgerollt. Cisco, CrowdStrike und andere Security-Firmen setzen das Modell laut OpenAI-Statements ein. Parallel berichtet OpenAI von 1'724 reproduzierten Linux-Schwachstellen und der Offenlegung von 304 kritischen Funden an Maintainer.

## Was jetzt?
Zugang soll schrittweise auf alle Daybreak-Red-Kunden ausgeweitet werden. Für kritische Infrastruktur gibt es ein eigenes Zugangsmodell. Offen bleibt, wie schnell Angreifer vergleichbare Offensivfähigkeiten aus Open- oder Underground-Modellen nachbauen.

## Faktencheck
Gesichert: Produktankündigung, Benchmark-Zahlen und Linux/Firefox-Zahlen laut OpenAI, bestätigt in der Berichterstattung von Heise und Axios. Unabhängig nachgezählt wurden die 948 Exploits von Aussenstehenden nicht; die «Critical»-Einstufung ist OpenAIs eigene Klassifikation.
