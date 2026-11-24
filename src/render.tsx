import { renderToString } from "preact-render-to-string";
import type { ComponentChildren } from "preact";
import Layout, { type Assets } from "@/app/layout";
import type { PageMeta } from "@/page-meta";
import { clinicAliases, clinics } from "@/data/clinics";
import { siteUrl } from "@/data/site";
import { shareCard } from "@/share";
import Home from "@/app/page";
import NotFound from "@/app/not-found";
import * as About from "@/app/about/page";
import * as Clinics from "@/app/clinics/page";
import * as Compare from "@/app/clinics/compare/page";
import * as Clinic from "@/app/clinics/[slug]/page";
import * as Conditions from "@/app/conditions/page";
import * as Condition from "@/app/conditions/[slug]/page";
import * as Contact from "@/app/contact/page";
import * as Eligibility from "@/app/eligibility/page";
import * as Faq from "@/app/faq/page";
import * as Glossary from "@/app/glossary/page";
import * as Guides from "@/app/guides/page";
import * as Guide from "@/app/guides/[slug]/page";
import * as How from "@/app/how-it-works/page";
import * as Privacy from "@/app/privacy/page";
import * as Law from "@/app/uk-law/page";

type Route = {
  pathname: string;
  meta: PageMeta;
  content: () => ComponentChildren;
};
const routes = new Map<string, Route>();
function add(
  output: string,
  meta: PageMeta,
  content: Route["content"],
  pathname = output,
) {
  routes.set(output, { pathname, meta, content });
}
add("/", {}, Home);
const pages = {
  "/about": About,
  "/clinics": Clinics,
  "/conditions": Conditions,
  "/contact": Contact,
  "/eligibility": Eligibility,
  "/faq": Faq,
  "/glossary": Glossary,
  "/guides": Guides,
  "/how-it-works": How,
  "/privacy": Privacy,
  "/uk-law": Law,
};
for (const [url, page] of Object.entries(pages))
  add(url, page.metadata, page.default);
for (const [section, page] of Object.entries({
  clinics: Clinic,
  conditions: Condition,
  guides: Guide,
})) {
  for (const params of page.slugs()) {
    add("/" + section + "/" + params.slug, page.pageMeta({ params }), () =>
      page.default({ params }),
    );
  }
}
add("/404", { title: "Page not found", robots: { index: false } }, NotFound);
const compare = "/clinics/compare";
add(compare, Compare.metadata, () => <Compare.default />);
const choices = ["", ...clinics.map((c) => c.slug)];
for (const a of choices)
  for (const b of choices) {
    if (!a && !b) continue;
    add(
      "/pairs/" + (a || "_") + "/" + (b || "_"),
      { ...Compare.metadata, robots: { index: false } },
      () => <Compare.default query={{ a, b }} />,
      compare,
    );
  }
export const paths = [...routes.keys()];
export const cards = paths.map(
  (path) => [path, shareCard(path, routes.get(path)!.meta)] as const,
);
export const aliases = Object.fromEntries(
  Object.entries(clinicAliases).map(([a, b]) => [
    "/clinics/" + a,
    "/clinics/" + b,
  ]),
);
export function comparePath(query: URLSearchParams) {
  const valid = (key: string) =>
    choices.includes(query.get(key) || "") ? query.get(key) || "_" : "_";
  const a = valid("a"),
    b = valid("b");
  return a === "_" && b === "_" ? compare : "/pairs/" + a + "/" + b;
}
export function render(
  path: string,
  assets: Assets,
  images: Map<string, string>,
) {
  const route = routes.get(path)!;
  const card = shareCard(path, route.meta);
  const [, , a, b] = path.split("/");
  const selected =
    path.startsWith("/pairs/") && a !== "_" && b !== "_" && a !== b;
  const sharePath = selected
    ? route.pathname + "?" + new URLSearchParams({ a, b })
    : route.pathname;
  const meta = card.names
    ? {
        ...route.meta,
        description:
          "Compare " +
          card.names.join(" and ") +
          " side by side, including starting fees, follow-up charges and registration.",
      }
    : route.meta;
  return (
    "<!doctype html>" +
    renderToString(
      <Layout
        pathname={route.pathname}
        meta={meta}
        assets={assets}
        share={{
          path: sharePath,
          title: selected ? card.title + " | Leafer" : undefined,
          image: images.get(path)!,
          alt: card.label + " — " + card.title,
          pair: selected,
        }}
      >
        {route.content()}
      </Layout>,
    )
  );
}
export const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  [...routes.values()]
    .filter((r) => r.meta.robots?.index !== false)
    .map(
      (r) => "<url><loc>" + new URL(r.pathname, siteUrl).href + "</loc></url>",
    )
    .join("") +
  "</urlset>";
export const robots =
  "User-agent: *\nAllow: /\nSitemap: " +
  new URL("/sitemap.xml", siteUrl).href +
  "\n";
