# LumiBelle Beauty — BizWeb KH E-Commerce Level 1 Sales Demo

**Public demonstration only — not a production website.** All store names, products, prices, orders and contact details are fictional. Product images are AI-generated samples. Nothing is sold, sent or paid here.

This demo illustrates BizWeb KH's **E-Commerce Level 1 — Basic Catalog + Admin ($500)** package: catalog, categories, search/filter, product pages, multi-product order with quantities and subtotal, Telegram/Messenger order hand-off, a simple admin, and Khmer/English support.

## What is real, simulated, or missing
| Status | Items |
|---|---|
| Working in the demo | Catalog/categories/search/filter, product pages, cart with quantities, subtotal and order summary, Khmer/English switch, responsive layout |
| Simulated | Telegram/Messenger ordering (**demo mode copies the summary; nothing is sent**); admin screens (**browser-local, not shown on the public shop**); Advanced demo pages (checkout, payment, confirmation, orders/payments) with a deliberately non-scannable "KHQR" illustration |
| Missing (needed for production) | Real database + backend, admin login, image upload/storage, storefront reading live data, real Telegram/Facebook configuration, bulk product import, Khmer proofreading, SEO/legal pages, real-device testing |
| Excluded from the $500 package | Customer accounts, real KHQR/online payment, automatic payment verification |

See the in-site page `scope/index.html` for the full matrix.

## Run locally
Static HTML/CSS/JS, no build step: `python3 -m http.server` and open `http://localhost:8000/`. All asset paths are relative, so it also works under a GitHub Pages project path.

## Telegram / Messenger
`js/config.js` holds the (empty) demo contacts. With `demoMode: true` or no username, buttons only copy the order summary. A live shop would set `telegramUsername`/`facebookPage` and `demoMode:false`, opening `https://t.me/<username>?text=<summary>` (prefill documented by Telegram) or copying the summary and opening `https://m.me/<page>` (Messenger prefill is not relied on).

Fonts: Noto Sans Khmer, Inter, Playfair Display (SIL OFL, self-hosted, see `fonts/LICENSE-NotoSansKhmer-OFL.txt`).
