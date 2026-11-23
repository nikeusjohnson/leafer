import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
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

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {guides.map((g, i) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="group grid gap-3 py-7 transition-colors duration-fast md:grid-cols-[60px_1fr_auto] md:items-baseline"
            >
              <span className="eyebrow-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{g.kicker}</p>
                <h2 className="mt-1.5 font-serif text-[24px] font-semibold tracking-[-0.01em] text-ink transition-colors duration-fast group-hover:text-leaf-deep">
                  {g.title}
                </h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                  {g.description}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                {g.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
