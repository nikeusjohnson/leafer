# Leafer — leafer.co.uk

Plain-English, independent guidance on medical cannabis in the UK. No jargon, no sales patter, no clinic paying for a good review.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**. Every page is statically generated — no database, no server code, no tracking.

## Quick start

```bash
npm install
npm run dev     # local dev server
npm run build   # production build → all 31 pages prerendered
npm run start   # serve the production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** this repository.
3. Framework is auto-detected as Next.js — no settings to change. Deploy.
4. Point `leafer.co.uk` at the project under **Settings → Domains**.

Any static host (Cloudflare Pages, Netlify, GitHub Pages via `next export` config) works too — the site is fully static.

## Structure

```
src/
  app/                  # routes: /, /how-it-works, /eligibility, /uk-law, /faq,
                        # /about, /privacy, /conditions/*, /clinics/*, /guides/*
  components/           # Header, Footer, EligibilityChecker, FaqList, etc.
  data/                 # all content lives here — clinics.ts, conditions.ts,
                        # guides.ts, faqs.ts
```

Editing content is a data-file job: add an object to `src/data/clinics.ts` and its
review page, the comparison table, the homepage row and the sitemap all update
automatically.

## Performance

- Fully static (SSG) — 31 prerendered pages at build time
- ~103 kB shared JS, 188 B per page; fonts self-hosted via `next/font` (zero external requests)
- The only client-side JS of note is the eligibility checker and the mobile menu

## Independence & accuracy

Leafer is an information resource, not a medical provider, and nothing on the
site is medical advice. Clinic fees are published prices at last check — verify
with clinics directly, and always confirm clinic registration with the CQC.
