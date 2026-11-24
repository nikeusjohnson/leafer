import type { Condition } from "@/data/conditions";

export default function ConditionTile({ condition }: { condition: Condition }) {
  return (
    <a
      href={`/conditions/${condition.slug}`}
      className="group block h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-soft"
    >
      <h2 className="headline text-[22px] leading-tight group-hover:underline">
        {condition.name}
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
        {condition.short}
      </p>
    </a>
  );
}
