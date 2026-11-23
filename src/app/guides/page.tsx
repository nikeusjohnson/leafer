import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import GuideTile from "@/components/GuideTile";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Patient guides",
  description:
    "Practical, plain-English guides for UK medical cannabis patients: costs, consultations, driving, travel, and choosing between flower and oil.",
};

export default function GuidesIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <Eyebrow label="Patient guides" />
      <h1 className="headline mt-5 max-w-3xl text-[40px] leading-[1.08] md:text-[56px]">
        Guides written for <em>patients</em>, not lawyers
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
        The practical stuff: what it costs, what happens in the room, and the
        rules around driving and travel. Clear answers, honest caveats.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <GuideTile guide={g} />
          </li>
        ))}
      </ul>
    </section>
  );
}
