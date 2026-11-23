import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import ConditionTile from "@/components/ConditionTile";
import { conditions } from "@/data/conditions";

export const metadata: Metadata = {
  title: "Qualifying conditions",
  description:
    "The conditions UK specialists commonly prescribe medical cannabis for — chronic pain, PTSD, anxiety, epilepsy, MS, fibromyalgia, insomnia and more.",
};

export default function ConditionsIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <Eyebrow label="Conditions" />
      <h1 className="headline mt-5 max-w-3xl text-[40px] leading-[1.08] md:text-[56px]">
        Conditions UK clinics <em>prescribe</em> for
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
        There&apos;s no fixed legal list — a specialist decides case by case.
        But two things are always true: you need a genuine diagnosis, and at
        least two conventional treatments that haven&apos;t worked well enough.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {conditions.map((c) => (
          <li key={c.slug}>
            <ConditionTile condition={c} />
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl text-[14px] leading-relaxed text-ink-muted">
        Don&apos;t see your condition? It may still be considered — cancer-related
        symptoms, Tourette syndrome, OCD and others are also assessed. The best
        next step is our <Link href="/eligibility" className="link-underline">eligibility checker</Link>.
      </p>
    </section>
  );
}
