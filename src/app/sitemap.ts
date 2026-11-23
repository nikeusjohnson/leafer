import { siteUrl } from "@/data/site";
import type { MetadataRoute } from "next";
import { conditions } from "@/data/conditions";
import { clinics } from "@/data/clinics";
import { guides } from "@/data/guides";

const base = siteUrl.origin;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/how-it-works",
    "/eligibility",
    "/conditions",
    "/clinics",
    "/clinics/compare",
    "/guides",
    "/uk-law",
    "/faq",
    "/glossary",
    "/contact",
    "/about",
    "/privacy",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const dynamic = [
    ...conditions.map((c) => `/conditions/${c.slug}`),
    ...clinics.map((c) => `/clinics/${c.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamic];
}
