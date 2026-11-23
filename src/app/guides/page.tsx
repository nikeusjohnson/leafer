import type { Metadata } from "next";
import GuideTile from "@/components/GuideTile";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Patient guides",
  description:
    "Practical guides to UK clinic costs, records, consultations, driving and travel.",
};
const featured = ["costs", "talking-to-your-gp", "first-consultation"];
const ordered = [
  ...featured.flatMap((slug) => guides.filter((guide) => guide.slug === slug)),
  ...guides.filter((guide) => !featured.includes(guide.slug)),
];

export default function GuidesIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Patient guides</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        Before you book a clinic
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
        Work out what a fee covers, find the right records and prepare for a
        conversation with your specialist.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((g) => (
          <li key={g.slug}>
            <GuideTile guide={g} />
          </li>
        ))}
      </ul>
    </section>
  );
}
