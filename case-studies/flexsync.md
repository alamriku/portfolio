# FlexSync — portable case study

One source of truth for the FlexSync write-up. Paste the relevant block into
Work at a Startup, Lemon.io, Toptal, LinkedIn, or a résumé. Facts here match the
`/flexsync` page on the portfolio — keep them in sync if you edit one.

**Ground-truth facts (don't drift from these):**
- Solo-built end to end (architecture, Laravel backend, React frontend, shipping).
- Public app, published on the Shopify App Store (listing: "Flex Stock Sync"), with 5★ reviews. *(Not claiming "Built for Shopify" certification — only claim that if/when the badge is granted.)*
- App Store listing: https://apps.shopify.com/flex-stock-sync
- 400+ merchants in production.
- ~4M requests a month handled (webhooks + user traffic).
- 60% sync-latency reduction via buffered webhook processing.
- Stack: Laravel 12, React 18, TypeScript, MySQL, Redis, Shopify GraphQL Admin API + Bulk Operations, Google Sheets API, Apps Script.
- Case study page: https://kazi-badrul.pages.dev/flexsync

---

## 1. One-liner (headline / title field)

> Solo-built a public Shopify app that keeps a merchant's catalog in real-time two-way sync with Google Sheets — 400+ merchants, 4M+ requests/month, on a serialized bulk-operation queue.

---

## 2. Short version (~60 words — Work at a Startup "one-line pitch", LinkedIn headline sub, résumé bullet cluster)

FlexSync is a public Shopify app I built solo, end to end. It keeps a store's
products, variants, and inventory in continuous two-way sync with Google Sheets —
merchants bulk-edit in the spreadsheet they already use, and every change flows
back to Shopify without the two systems drifting. 400+ merchants, 4M+ requests a
month, 60% lower sync latency after moving to buffered webhook processing.

---

## 3. Medium version (~150 words — Work at a Startup / Lemon.io / Toptal "about the project")

FlexSync is a public Shopify App Store app that keeps a merchant's catalog in
continuous two-way sync with Google Sheets. Merchants live in spreadsheets —
pricing rules, supplier feeds, seasonal bulk edits — but Shopify has no reliable
live bridge to one. FlexSync is that bridge: export products, variants, and
inventory into a sheet, edit them there (live formulas included), and push every
change back to Shopify automatically, with neither side overwriting the other.

I built it solo — architecture, Laravel backend, React frontend, Shopify and
Google integrations, and the production operations. The hard parts are invisible:
a serialized per-shop bulk-operation queue that survives Shopify's cost-based rate
limits, buffered webhook processing that cut sync latency 60%, and change-origin
tracking that stops the two systems from echoing edits back and forth. It runs at
400+ merchants and 4M+ requests a month on modest infrastructure.

---

## 4. Long version (Work at a Startup profile body / portfolio description)

**FlexSync — bidirectional Shopify ↔ Google Sheets sync**
Public Shopify app · sole engineer · 2023–present

**The problem.** Store operators run their catalog in Google Sheets — pricing
formulas, wholesale stock feeds, seasonal bulk edits — but Shopify only offers a
one-record-at-a-time admin and a lossy CSV round trip. There was no dependable
*live* two-way bridge, so edits collided and data drifted.

**What I built.** A Laravel + React public app that installs on a store, connects
a Google Sheet, and keeps the two in agreement continuously. Merchants work
entirely in the spreadsheet; FlexSync owns the messy middle. It even supports
formula sync — write `=cost*1.4` in a price cell and FlexSync evaluates it and
writes the result to Shopify.

**The engineering.**
- **Serialized bulk-operation queue** (Laravel + Redis) so writes batch into
  Shopify Bulk Operations, one job per store in flight, backing off around a
  cost-based, aggressively throttled API instead of hammering it.
- **Buffered, webhook-driven updates** — bursts of store changes are coalesced
  instead of processed one by one, which cut sync latency **60%**.
- **Drift/echo prevention** — change-origin tracking and version stamping so the
  engine drops its own echoes and the two systems converge instead of oscillating.
- **Scale** — MySQL index optimization on the hot paths and a per-shop serialized
  queue let it hold **4M+ requests a month** across 400+ stores on modest infra.

**Results.** 400+ merchants in production, 4M+ requests/month, 60% lower latency,
formula sync shipped on merchant request, and 5★ App Store reviews that call out
the support as much as the product.

**Why it matters.** It's a distributed-systems problem — idempotency, rate limits,
async job orchestration, conflict resolution, convergence — wearing a
spreadsheet's clothes, and I owned all of it solo, in production, under real
constraints.

Stack: Laravel 12 · React 18 · TypeScript · MySQL · Redis · Shopify GraphQL Admin
API + Bulk Operations · Google Sheets API · Apps Script.

---

## 5. Platform notes

**Work at a Startup (YC / workatastartup.com)** — Use §4 as the project body and
§1 as the headline. YC founders screen for ownership + shipping under constraint,
so lead with "solo-built, public app, 400+ merchants." Filter roles for
international-remote explicitly — visa/timezone filters kill most matches before a
human reads anything, so treat this as a low-cost parallel channel. Laravel +
Shopify is a narrow stack in their pool: fewer matches, less competition inside them.

**Lemon.io / Toptal** — Contracting lane, not employment. Use §3. Emphasize the
independent, end-to-end delivery and the production scale (a client wants "can ship
alone and keep it running"). Skip the equity/ownership framing that plays on YC.

**LinkedIn / résumé** — Use §2 as a project entry, or the §1 one-liner as a bullet.
