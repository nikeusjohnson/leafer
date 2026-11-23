import type { Metadata } from "next";
import ConditionTile from "@/components/ConditionTile";
import { conditions } from "@/data/conditions";

export const metadata: Metadata = {
  title: "Condition guides",
  description:
    "Condition-specific guidance and questions to take to a clinician.",
};

export default function ConditionsIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Condition guides</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        Questions about your condition
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
        Explore guidance and prepare questions for your clinician. The options
        they discuss depend on your symptoms, history and previous treatment.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((c) => (
          <li key={c.slug}>
            <ConditionTile condition={c} />
          </li>
        ))}
      </ul>
    </section>
  );
}
