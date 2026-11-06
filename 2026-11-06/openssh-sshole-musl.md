---
id: 2026-11-06-openssh-sshole-musl
title: "OpenSSH-Lücke «*sshole»: Login ohne Passwort auf musl-Systemen"
date: 2026-11-06
time: "12:15"
category: tech
icon: 🐧
edition: midday
kurz: "Lange Passworteingabe knackt Konten ohne Passwort-Hash; Alpine und OpenWrt betroffen; Patch 10.6p2."
summary: "Sicherheitsforscher Özgün Kültekin hat die Lücke «*sshole» veröffentlicht: Auf Linux-Systemen mit musl-Libc und OpenSSH ohne PAM kann eine Passworteingabe von 257–1024 Zeichen Konten übernehmen, deren Shadow-Eintrag «*» ist. Betroffen sind unter anderem Alpine Linux, OpenWrt, Buildroot und Yocto. OpenSSH 10.6p2 patcht das Problem; Angreifer scannen laut Forschern bereits aktiv."
gegenstimme: "Debian, Ubuntu und Fedora in Standardkonfiguration sind laut Berichten nicht betroffen, weil sie PAM und glibc nutzen. Kritiker sehen das als Warnung vor exotischen Minimal-Setups in Cloud- und IoT-Images; OpenSSH betont, die Ursache liege eher in musl als in sshd."
sources_json: '[{"name": "Golem", "url": "https://www.golem.de/news/fehler-bei-passwortpruefung-angreifer-koennen-ueber-openssh-linux-konten-kapern-2611-214928.html"}, {"name": "Heise", "url": "https://www.heise.de/news/OpenSSH-und-Alpine-Linux-warnt-vor-nischigem-aber-gravierendem-Bug-11513105.html"}]'
---
## Hintergrund
Voraussetzungen: musl statt glibc, PAM aus, Passwort-Auth an, mindestens zwei aktive Konten – eines mit «*» statt Hash, eines mit echtem SHA256/SHA512-Hash als Salt-Quelle. Musls Crypt liefert bei zu langem Passwort «*», was mit dem Shadow-Eintrag übereinstimmt. Bei Alpine kann auch Root betroffen sein, wenn Root-Login per SSH erlaubt ist; AWS-/Azure-Alpine-Images gelten laut Entdecker als riskant.

## Was jetzt?
Sofort auf OpenSSH 10.6p2 aktualisieren und sshd neu starten, sonst `PasswordAuthentication no`. Alpine hat Updates und Hinweise auf Kompromittierung veröffentlicht. Kevin Beaumont berichtet von Scans mit anschliessendem Kryptomining.

## Faktencheck
Gesichert: technische Bedingungen, Patch und Alpine-Warnung laut Golem und Heise. Aktive Ausnutzung für Mining stützt sich auf Forscherberichte; das Ausmass ist nicht flächendeckend quantifiziert.
