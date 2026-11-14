# Alpha-1 Studio

> The hub for everything we build.

`alpha1studio.vercel.app` is the canonical index for the studio: four top projects, every verified live surface, the public repository index, and an About me section. One page, one data object, zero third-party requests on load.

## Live site

https://alpha1studio.vercel.app

## Top projects

| Project | What it is | Where it ships |
| --- | --- | --- |
| BLACKBOX | Offline Android security hub: AES-256 secrets manager, journal and 2FA authenticator. MIT, 100% on-device, zero cloud. | [F-Droid](https://f-droid.org/packages/com.blackbox.app/) · [source](https://github.com/alpha-1-design/BLACKBOX) |
| GIA | Private on-device AI workspace with 21+ providers, wake word and agentic tools. Calls only the model API you configure. | [Live](https://alpha-1-design.github.io/gia-app/) · [source](https://github.com/alpha-1-design/gia-app) |
| GIA Cowork | Linux desktop counterpart to GIA. Real terminal, real filesystem, no sandbox. | [Live](https://gia-cowork.vercel.app) · [source](https://github.com/alpha-1-design/gia-cowork) |
| Terra-Core | Real-time global monitoring console: ADS-B, weather, AQI, NWS alerts, space weather and radar. | [Live](https://terra-core-nu.vercel.app) · [source](https://github.com/alpha-1-design/Terra-Core) |

Also maintained: [Privacy Toolkit](https://privacy-toolkit-ten.vercel.app) (13 browser-based security tools), [Universal Toolbox](https://universal-toolbox.vercel.app) (700+ tools across 50+ categories), and [Alpha-1 Design](https://alpha-1design.vercel.app).

Only BLACKBOX ships through a store. It is the sole F-Droid release in the estate, published as `com.blackbox.app`. The official F-Droid badge and logo are cached locally in `assets/`.

## What is in this repository

- `index.html` — the entire hub. Inline CSS and JS, one `DATA` object, no build step.
- `assets/` — local WebP imagery, the portrait, and the cached F-Droid artwork.
- `icon*.svg`, `favicon*`, `og.*`, `wordmark*` — the `A / 1` v4 mark family.
- `manifest.webmanifest`, `sitemap.xml`, `robots.txt` — PWA and Search Console support.
- `sw.js` — a retire-and-unregister worker. The previous site was cache-first with a stale `/index.html` fallback; this clears old caches and unregisters itself so returning visitors get the current page. The new hub registers no service worker.

No package manager, no dependencies, no framework, no analytics, no accounts.

## Data provenance

The public index comes from a 39-repository audit (16 public / 23 private) using the GitHub CLI and HTTP probes of every declared homepage URL. Generated arrays are rebuilt by `build_hub.py` and `build_site_data.py` in the build workspace — edit the generator, not the generated block. Private repository names never appear on the public page.

Sam Atlas and Symphonia are not part of Alpha-1 Studio and are intentionally absent. `samuelmensah.dev` is not a live domain and appears in no link.

## Built by

Samuel Mensah · Kumasi, Ghana · alphariansamuel@gmail.com
https://github.com/alpha-1-design

© 2026 Alpha-1 Studio.
