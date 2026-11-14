---
id: 2026-11-14-github-wfx-loot-secret-stealer
title: "GitHub: Angreifer kapern 4800 Konten und stehlen Cloud-Zugänge aus Tausenden Repositories"
date: 2026-11-14
time: "06:45"
category: tech
icon: 🔓
edition: morning
image: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/5/2/0/1/3/8/6/shutterstock_1569354004-42eff2fc6e8e8a4b.jpg?func=bound&height=1200&org_if_sml=1&q=85&width=1200"
kurz: "Die Kampagne «wfx-loot» schleust über gestohlene Token Schadcode in GitHub-Workflows ein. In über 1800 Fällen wurden Secrets abgegriffen."
summary: "Unbekannte Angreifer nutzen seit dem 10. November gestohlene Zugriffstoken, um über 4837 übernommene GitHub-Konten Schadcode in 61'764 Repositories einzuschleusen. Laut der Sicherheitsfirma Aikido lief der Code in mindestens 1835 Fällen und griff Secrets aus GitHub Actions sowie Cloud-Zugangsdaten ab. Wo Workflows Zugriff auf AWS oder Azure haben, richtet er laut Heise Hintertüren in den Cloud-Konten ein."
gegenstimme: "Die Angreifer nutzen offenbar keine Lücke in GitHub selbst, sondern missbrauchen Schreibrechte gestohlener Token. Ein Teil davon stammt laut Fly.io aus öffentlich erreichbaren .git/config-Dateien, also aus Konfigurationsfehlern der Betroffenen. Offen ist, ob GitHub die missbrauchten Token schneller hätte erkennen und sperren können; eine Stellungnahme von GitHub lag laut Heise zunächst nicht vor."
sources_json: '[{"name": "Heise", "url": "https://www.heise.de/news/Gestohlene-Token-Secret-Stealer-in-Tausenden-GitHub-Repositories-11524706.html"}, {"name": "BleepingComputer", "url": "https://www.bleepingcomputer.com/news/security/hackers-compromise-4-800-github-accounts-to-steal-cloud-credentials/"}, {"name": "Aikido", "url": "https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories"}]'
---
## Hintergrund
Die Angreifer öffnen zuerst einen Test-Pull-Request, um Schreibrechte zu prüfen, und schleusen dann einen Workflow ein, der Secrets ausliest. Über Mitwirkenden- und Organisationsrechte treffen sie auch Repositories, die den gekaperten Konten nicht gehören. Laut BleepingComputer gehören zu den betroffenen Konten solche von Fortune-100-Firmen, der US-Beschaffungsbehörde GSA, der französischen Regierung, Nextcloud und WebdriverIO. Rund 50 Konten haben laut Aikido Veröffentlichungsrechte auf Paketplattformen wie npm, PyPI oder crates.

## Was jetzt?
Heise warnt, dass das Austauschen der Secrets nicht reicht: Betroffene müssen auch in AWS und Azure nach eingerichteten Hintertüren suchen. Aikido nennt typische Spuren, etwa einen Pull Request «docs: dependency audit notes» oder einen Branch «wfx-docs».

## Faktencheck
Gesichert: Kampagne und Grössenordnung laut Aikido, bestätigt von Heise und BleepingComputer; SafeDep fand Schadcode in über 8000 öffentlichen Repositories. Die Zahlen stammen von Sicherheitsfirmen, die auch eigene Produkte verkaufen. Wer hinter der Kampagne steckt, ist unbekannt.
