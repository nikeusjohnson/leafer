# Leafer

A UK medical cannabis clinic comparison site built with Eleventy, TypeScript/JSX and Tailwind CSS.

## Run locally

```sh
npm ci
npm run dev
```

Use Node 22.18 or later. Run `npm run typecheck` and `npm run build` to produce the static site in `_site/`. Eleventy renders the TSX templates at build time. The clinic directory and eligibility questionnaire hydrate separately with Preact. The menu and clinic picker use small native browser scripts.

Vercel serves extensionless URLs and selects prebuilt comparison tables from the two clinic query parameters. The Eleventy development server mirrors those rules. When the clinic data changes, the comparison pages, redirects and sitemap follow it.

Social images are generated from each page’s data, the supplied logo, the site illustrations and a build-only cut of the licensed DM Sans font. Their filenames include the content hash. The icon generator derives the Apple, Android and legacy browser assets from the same leaf as the SVG favicon. Font licensing is in `src/app/fonts/OFL.txt`.

## Updating clinic information

The directory in `src/data/clinics.ts` supplies the cards, fee table, clinic profiles, homepage examples and sitemap. Listings start in alphabetical order. Patients can also sort by the published starting fee. Leafer does not assign clinic scores or editorial rankings.

For each clinic, record the provider’s published fee schedule, what the starting fee covers, ongoing charges, the name on the relevant regulator’s register, and the register URL. Update the checked date after reviewing the entries. Keep medicines separate from clinic fees. Preserve renamed services with a redirect and use a status page for a withdrawn listing.

Patient guides, condition pages and FAQs live under `src/data`. Bespoke illustrations are in `public/images`. Each patient guide uses its own transparent WebP at `public/images/guides/<guide-slug>.webp`. DM Sans is bundled with its licence in `src/app/fonts`.
