import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
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

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((c) => (
          <li key={c.slug}>
            <Link href={`/conditions/${c.slug}`} className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-serif text-[21px] font-semibold text-ink">
                  {c.name}
                </h2>
                {c.commonlyPrescribed && (
                  <span className="shrink-0 rounded-full bg-leaf-tint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-leaf-deep">
                    Common
                  </span>
                )}
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                {c.short}
              </p>
              <span className="mt-4 text-[14px] font-semibold text-leaf-deep">
                Read the guide →
              </span>
            </Link>
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
