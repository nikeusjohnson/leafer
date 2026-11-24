import { clinics, clinicAliases } from "./src/data/clinics.ts";
const slugs = clinics.map((c) => c.slug).join("|");
const selected = (key: string, name: string) => ({
  type: "query" as const,
  key,
  value: "(?<" + name + ">" + slugs + ")",
});
const first = selected("a", "first"),
  second = selected("b", "second");
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
    {
      source: "/clinics/compare",
      has: [first, second],
      destination: "/pairs/:first/:second",
    },
    {
      source: "/clinics/compare",
      has: [first],
      destination: "/pairs/:first/_",
    },
    {
      source: "/clinics/compare",
      has: [second],
      destination: "/pairs/_/:second",
    },
  ],
  headers: ["/assets/:file*", "/share/:file*"].map((source) => ({
    source,
    headers: [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ],
  })),
};
