---
id: 2026-04-04-rowhammer-nvidia-gpu-sicherheit
title: "Neue Rowhammer-Angriffe ermöglichen vollständige Kontrolle über Nvidia-GPU-Maschinen"
date: 2026-04-04
time: "06:00"
category: tech
icon: 🔓
edition: morning
image: "https://cdn.arstechnica.net/wp-content/uploads/2023/07/exploit-vulnerability-security-768x432.jpg"
kurz: "Drei unabhängige Forschungsteams haben neue Rowhammer-Angriffe auf Nvidia-GPUs entdeckt, die vollständige Systemkompromittierung ermöglichen – auch in Cloud-Umgebungen."
summary: "Sicherheitsforscher haben drei neue Rowhammer-Angriffsmethoden vorgestellt – GDDRHammer, GeForge und GPUBreach – die GDDR-Grafikspeicher manipulieren und über mehrere Stufen vollständige Root-Kontrolle über den Host-Rechner ermöglichen. Besonders beunruhigend: GPUBreach funktioniert auch bei aktiviertem IOMMU-Schutz, der bisher als wirksame Schutzmassnahme galt. Cloud-Umgebungen, in denen teure GPUs unter mehreren Nutzern geteilt werden, sind potenziell besonders exponiert."
gegenstimme: "Nvidia hat bisher nicht offiziell auf die Forschungsergebnisse reagiert. Sicherheitsexperten betonen, dass Rowhammer-Angriffe in der Praxis schwierig durchzuführen sind und in der Regel lokalen oder Cloud-Zugang zum Zielsystem erfordern. Dennoch sei das Muster besorgniserregend: Rowhammer-Resistenz auf CPU-Seite schützt nicht, wenn der Angriff via GPU erfolgt – alle bisherigen Schutzmechanismen müssen neu bewertet werden."
sources_json: '[{"name":"Ars Technica – New Rowhammer attacks give complete control of machines running Nvidia GPUs","url":"https://arstechnica.com/security/2026/04/new-rowhammer-attacks-give-complete-control-of-machines-running-nvidia-gpus/"}]'
---

## GPU-Sicherheitslücken: Rowhammer trifft den Grafikkartenspeicher

Seit mehr als einem Jahrzehnt ist Rowhammer als grundlegendes Hardware-Sicherheitsproblem bekannt: Wer bestimmte Zeilen im DRAM-Hauptspeicher schnell und wiederholt liest, erzeugt elektrische Störungen, die Bits in benachbarten Speicherzeilen umkippen lassen – von 0 auf 1 und umgekehrt. Diese scheinbar minimalen Änderungen können in der Praxis dazu genutzt werden, Sicherheitsgrenzen zu überwinden, Privilegien zu eskalieren oder vollständige Kontrolle über ein System zu erlangen.

Was bisher hauptsächlich auf CPU-nahen DRAM-Speicher beschränkt war, betrifft nun auch Hochleistungs-Grafikkarten. Zwei unabhängige Forschungsteams – und ein drittes, das am Folgetag seine Ergebnisse veröffentlichte – haben am Donnerstag und Freitag neue Angriffsmethoden gegen Nvidia-GPUs der Ampere-Generation vorgestellt.

**GDDRHammer** (kurz für «Graphics DDR» und «Greatly Disturbing DRAM Rows») greift die RTX 6000 an und erreicht im Durchschnitt 129 Bit-Flips pro Speicherbank – ein 64-facher Anstieg gegenüber früheren Experimenten. Indem die Forscher die GPU-Seitentabellen manipulieren, erhalten sie Lese- und Schreibzugriff auf den gesamten GPU-Speicher und können darüber weiter auf den CPU-Hauptspeicher des Host-Systems zugreifen. Das Resultat: vollständige Systemkompromittierung.

**GeForge** verfolgt einen ähnlichen Ansatz, nutzt aber andere Hammermuster und Zielobjekte in den Seitentabellen. Auch GeForge gelangt auf diesem Weg zu vollständigem Host-Systemzugriff.

**GPUBreach** ist die beunruhigendste Variante: Im Gegensatz zu den beiden anderen Angriffen funktioniert GPUBreach auch dann, wenn IOMMU aktiviert ist – eine Schutzmassnahme, die normalerweise verhindert, dass Peripheriegeräte direkt auf Hauptspeicher-Bereiche des Betriebssystems zugreifen. GPUBreach korumpiert GPU-Seitentabellen, erlangt damit beliebigen Lese-/Schreibzugriff auf GPU-Speicher, und nutzt neu entdeckte Speichersicherheitsfehler im Nvidia-Treiber, um darüber Root-Zugriff auf den Host zu erhalten.

Besondere Brisanz erhält das Thema durch den Kontext: Hochleistungs-GPUs kosten typischerweise ab 8.000 Dollar und werden in Cloud-Rechenzentren häufig von Dutzenden Nutzern gleichzeitig genutzt. Ein bösartiger Nutzer in einer Shared-GPU-Umgebung könnte theoretisch die Daten aller anderen Nutzer auf demselben Host gefährden.

## Einordnung

Die Forschungsergebnisse zeigen, dass Rowhammer-Schutz nicht mehr allein auf der CPU-Seite gedacht werden darf. Wer DRAM-Schutz nur für den Hauptspeicher implementiert, schafft eine blinde Flanke, wenn der Angriff über den GPU-Speicher erfolgt. Für Cloud-Anbieter wie AWS, Google Cloud oder Azure, die GPU-Instanzen als Shared Resource anbieten, ergibt sich Handlungsbedarf – auch wenn die praktische Ausnutzbarkeit im normalen Betrieb noch Schranken hat. Nvidia ist gefordert, Treiber-Updates und Empfehlungen zu BIOS-Einstellungen (IOMMU-Aktivierung als Mindestmassnahme) bereitzustellen.

---
**Quellen:**
- [Ars Technica – New Rowhammer attacks give complete control of machines running Nvidia GPUs](https://arstechnica.com/security/2026/04/new-rowhammer-attacks-give-complete-control-of-machines-running-nvidia-gpus/)
