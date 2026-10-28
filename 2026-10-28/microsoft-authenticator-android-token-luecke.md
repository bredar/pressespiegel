---
id: 2026-10-28-microsoft-authenticator-android-token-luecke
title: "Microsoft Authenticator: Fremde Apps konnten Firmen-Zugangstoken abgreifen"
date: 2026-10-28
time: "17:30"
category: tech
icon: 🔐
edition: evening
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/1/9/0/5/4/5/2026-05-18-MS-Authenticator-Sicherheit-Problem-703f67bfee2b6f64.png?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Eine Lücke im Microsoft Authenticator für Android liess Apps ohne Berechtigungen Tokens für Mail, Dateien und Kalender abgreifen; Version 6.2606.4246 behebt sie."
summary: "Forscher der Firma Enclave haben gezeigt, dass eine Android-App ohne jede Berechtigung sich gegenüber dem Microsoft Authenticator als Teams ausgeben und Zugangstoken des angemeldeten Firmenkontos erhalten konnte. In Tests gab das vollen Zugriff auf Postfach, Dateien und Kalender. Microsoft hat die Lücke CVE-2026-80097 (CVSS 8,6) im September geschlossen."
gegenstimme: "Microsoft stuft das Risiko als hoch, aber nicht kritisch ein, verlangt laut eigener Beschreibung eine Freigabe durch das Opfer und kennt keine Ausnutzung. Enclave widerspricht: Nötig sei nur ein angemeldetes Arbeitskonto gewesen, keine Nutzerinteraktion."
sources_json: '[{"name": "heise online", "url": "https://www.heise.de/news/Microsoft-Authenticator-Boesartige-Apps-konnten-Zugangstoken-abgreifen-11503334.html"}, {"name": "Enclave", "url": "https://enclave.ai/blog/authmask-we-made-microsoft-authenticator-hand-over-tokens"}]'
---

## Hintergrund
Der Authenticator dient auf Android als Broker für die Anmeldung bei Microsoft-Diensten. Die Prüfung der aufrufenden App verglich nur die mitgelieferte Redirect-URI mit der Signatur der App, die der Aufrufer zu sein behauptete. Da die echte Teams-App auf dem Gerät installiert ist, konnte die bösartige App die passende URI selbst berechnen. Die tatsächliche Identität des Aufrufers wurde nie geprüft.

## Was jetzt?
Wer den Authenticator auf Android nutzt, sollte prüfen, ob mindestens Version 6.2606.4246 installiert ist. IT-Abteilungen sollten bei Verdacht auf schädliche Apps unbekannte Passkeys und Anmeldemethoden in Entra ID überprüfen.

## Faktencheck
Lücke, CVE-Nummer und Patch sind durch Microsoft und die Forscher **gesichert**. Ob eine Nutzerfreigabe nötig war, ist **umstritten**: Microsoft und Enclave widersprechen sich. Hinweise auf Angriffe in freier Wildbahn gibt es **nicht**.
