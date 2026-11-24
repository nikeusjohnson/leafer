import type { PageMeta } from "@/page-meta";
import { getClinic } from "@/data/clinics";
import { getGuide } from "@/data/guides";
import { getCondition } from "@/data/conditions";

export function shareCard(path: string, meta: PageMeta) {
  const [, section, slug, second] = path.split("/");
  const guide = section === "guides" && getGuide(slug);
  const clinic = section === "clinics" && getClinic(slug);
  const condition = section === "conditions" && getCondition(slug);
  const pair = section === "pairs" ? [getClinic(slug), getClinic(second)] : [];
  if (pair[0] && pair[1] && pair[0] !== pair[1]) {
    const [a, b] = [pair[0], pair[1]].sort((a, b) =>
      a.name.localeCompare(b.name, "en-GB"),
    );
    return {
      title: a.name + " & " + b.name,
      label: "Clinic comparison",
      note: "Starting fees, follow-ups and ongoing costs",
      image: "sections/choosing-care",
      tone: "mint",
      names: [a.name, b.name],
    };
  }
  if (guide)
    return {
      title: guide.title,
      label: "Patient guide",
      note: guide.kicker + "  ·  " + guide.readTime,
      image: "guides/" + slug,
      tone: "mint",
    };
  if (clinic)
    return {
      title: clinic.name,
      label: "Clinic fees & registration",
      note: clinic.initialFee + "  ·  " + clinic.initialFeeLabel,
      image: "sections/clinic-directory",
      tone: "peach",
    };
  if (condition)
    return {
      title: condition.name,
      label: "Condition guide",
      note: condition.short,
      image: "sections/appointment-prep",
      tone: "lilac",
    };
  const topics: Record<string, [string, string, string]> = {
    "/": [
      "UK clinic directory",
      "Medical cannabis clinics, compared.",
      "home/hero",
    ],
    "/eligibility": ["Getting started", "Check eligibility", "home/checklist"],
    "/clinics": [
      "UK clinic directory",
      "Compare UK clinics",
      "sections/clinic-directory",
    ],
    "/guides": [
      "Patient guides",
      "Your guide to UK clinic care",
      "sections/ongoing-care",
    ],
    "/clinics/compare": [
      "Clinic comparison",
      "Compare two clinics",
      "sections/choosing-care",
    ],
    "/uk-law": ["UK law", "Medical cannabis and UK law", "guides/driving"],
    "/conditions": [
      "Condition guides",
      "Preparing to discuss your condition",
      "sections/appointment-prep",
    ],
    "/how-it-works": [
      "Getting started",
      "How clinic comparisons work",
      "home/consultation",
    ],
  };
  const [label, title, image] =
    topics[path] ||
    (section === "pairs"
      ? topics["/clinics/compare"]
      : [
          "Leafer",
          meta.title || "UK clinic comparisons",
          "sections/ongoing-care",
        ]);
  return {
    title,
    label,
    image,
    tone: section === "eligibility" ? "peach" : "mint",
    note: meta.description || "Compare published clinic fees and registration",
  };
}
export type ShareCard = ReturnType<typeof shareCard>;
