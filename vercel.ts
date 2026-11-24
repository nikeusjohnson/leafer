import { clinics, clinicAliases } from "./src/data/clinics.ts";

const slugs = clinics.map((c) => c.slug);
function comparison(a: string, b: string) {
  const has = Object.entries({ a, b })
    .filter(([, value]) => value)
    .map(([key, value]) => ({ type: "query" as const, key, value }));
  return {
    source: "/clinics/compare",
    has,
    destination: "/pairs/" + (a || "_") + "/" + (b || "_"),
  };
}

export const config = {
  framework: null,
  buildCommand: "npm run build",
  outputDirectory: "_site",
  cleanUrls: true,
  trailingSlash: false,
  redirects: Object.entries(clinicAliases).map(([old, current]) => ({
    source: "/clinics/" + old,
    destination: "/clinics/" + current,
    permanent: true,
  })),
  rewrites: [
    ...slugs.flatMap((a) => slugs.map((b) => comparison(a, b))),
    ...slugs.flatMap((slug) => [comparison(slug, ""), comparison("", slug)]),
  ],
  headers: ["/assets/:file*", "/share/:file*"].map((source) => ({
    source,
    headers: [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ],
  })),
};
