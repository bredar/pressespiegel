---
id: 2026-10-28-uefi-luecke-edk2-pxe
title: "Kritische UEFI-Lücke betrifft die meisten Server weltweit"
date: 2026-10-28
time: "12:30"
category: tech
icon: 💻
edition: midday
kurz: "Eine 16 Jahre alte Lücke im Firmware-Baukasten EDK II erlaubt Code vor dem Betriebssystemstart; ein stabiles Update fehlt noch."
summary: "Im quelloffenen Firmware-Baukasten TianoCore EDK II, auf dem fast alle UEFI-Firmwares von Servern beruhen, steckt eine kritische Lücke mit Schweregrad 9,5 von 10. Präparierte ICMP-Fehlermeldungen beim Netzwerkstart per PXE können Code ausführen, bevor Schutzmechanismen wie Secure Boot greifen. Die Korrektur ist im Quellcode, aber noch in keiner stabilen Version."
gegenstimme: "Angreifbar sind nur Systeme, die per PXE übers Netz starten und dabei manipulierte ICMP-Pakete empfangen können, was in gut getrennten Rechenzentren selten ist. Ein eingeschleuster Code überlebt zudem keinen Neustart."
sources_json: '[{"name": "Ars Technica", "url": "https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/"}, {"name": "Severity Daily", "url": "https://severitydaily.com/edk2-cve-2026-97631-9-5-pxe-icmp-pre-boot-rce-merged-october-15-no-stable-tag-not-patched-currently/"}, {"name": "OpenCVE", "url": "https://app.opencve.io/cve/CVE-2026-97631"}]'
---

## Hintergrund
Die Lücke CVE-2026-97631 wurde von Alex Matrosov (Anthropic) und Dan Holmes (Google) gefunden. Die koordinierte Veröffentlichung war für Januar geplant, doch ein öffentlicher Pull Request des Hardwareherstellers AMI machte die Details vorzeitig bekannt. Betroffen sind auch die grossen Firmware-Anbieter AMI, Insyde und Phoenix sowie Microsofts gehärteter Ableger Project Mu.

## Was jetzt?
Die Korrektur wurde am 15. Oktober in den Hauptzweig übernommen. Bis die Hersteller Firmware-Updates ausliefern, raten Fachleute, PXE abzuschalten, wo es nicht gebraucht wird, und Bereitstellungsnetze abzuschotten.

## Faktencheck
Die Lücke ist in der CVE-Datenbank eingetragen und von Fachmedien übereinstimmend beschrieben: **gesichert**. Bekannte Angriffe in freier Wildbahn sind bisher **nicht belegt**.
