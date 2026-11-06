---
id: 2026-11-06-google-codemender-agenten
title: "Google Cloud schärft Sicherheitsgrenzen für KI-Agenten CodeMender"
date: 2026-11-06
time: "17:15"
category: tech
icon: 🛡️
edition: evening
kurz: "Sandbox für Exploit-Tests, Human-in-the-Loop, Auth Manager allgemein verfügbar; Preview bleibt."
summary: "Google Cloud hat am Security Summit neue Kontrollen für den KI-Sicherheitsagenten CodeMender vorgestellt: Schwachstellenprüfung und Exploit-Simulation laufen in Sandbox oder isolierter VM, lokale Schreibzugriffe und Befehle brauchen menschliche Freigabe. Scans können auf Ordner, ganzes Repository oder nur geänderte Dateien begrenzt werden. Auth Manager für Agenten-Identitäten ist allgemein verfügbar; CodeMender bleibt in der Preview."
gegenstimme: "Sicherheitsforscher begrüssen Isolation und Freigaben, warnen aber, dass autonome Patch-Agenten bei Fehlern selbst neue Risiken erzeugen können. Google betont Human Oversight; unabhängige Audits der Patch-Qualität stehen aus."
sources_json: '[{"name": "Google Cloud", "url": "https://cloud.google.com/blog/products/identity-security/helping-you-build-and-defend-at-machine-speed-in-the-agentic-era"}, {"name": "Help Net Security", "url": "https://www.helpnetsecurity.com/2026/11/05/google-cloud-ai-agents-security-controls/"}]'
---
## Hintergrund
CodeMender soll Schwachstellen finden, Ausnutzbarkeit prüfen und getestete Patches erzeugen. Thales berichtet in einer Evaluation von über 95 Prozent weniger Zeit für die Entdeckung – bei menschlicher Validierung. Google koppelt die Agenten-Sicherheit mit Wiz, VPC Service Controls, Model Armor und Cloud-NGFW-Malware-Sandbox. Das Programm «Scan for Good» half laut Google im ersten Monat über 50 Organisationen der öffentlichen Hand und kritischen Infrastruktur.

## Was jetzt?
Unternehmen in der Preview können Isolation und Scan-Modi nutzen; Auth Manager steht produktiv bereit. Ob CodeMender den Preview-Status verlässt, ist offen. Für Nutzer heisst das: mehr Kontrolle über Agenten-Rechte, aber weiterhin Preview-Risiken.

## Faktencheck
Gesichert: Feature-Liste und GA/Preview-Status laut Google-Cloud-Blog vom 4. November und Help Net Security. Die 95-Prozent-Angabe ist eine Thales-Kundeneinschätzung, keine unabhängige Benchmark-Studie.
