# Leafer

A UK medical cannabis clinic comparison site built with Next.js 15, TypeScript and Tailwind CSS.

## Run locally

```sh
npm ci
npm run dev
```

Use `npm run build` for the production build and `npm start` to serve it.

## Updating clinic information

The directory in `src/data/clinics.ts` supplies the cards, fee table, clinic profiles, homepage examples and sitemap. Listings start in alphabetical order. Patients can also sort by the published starting fee. Leafer does not assign clinic scores or editorial rankings.

For each clinic, record the provider’s published fee schedule, what the starting fee covers, ongoing charges, the name on the relevant regulator’s register, and the register URL. Update the checked date after reviewing the entries. Keep medicines separate from clinic fees. Preserve renamed services with a redirect and use a status page for a withdrawn listing.

Patient guides, condition pages and FAQs live under `src/data`. Bespoke illustrations are in `public/images`. Each patient guide uses its own transparent WebP at `public/images/guides/<guide-slug>.webp`. DM Sans is bundled with its licence in `src/app/fonts`.
