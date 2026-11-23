import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import ArticleSections from "@/components/ArticleSections";
import { conditions, getCondition } from "@/data/conditions";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return {};
  const inline = /^[A-Z\s]+$/.test(c.name) ? c.name : c.name.charAt(0).toLowerCase() + c.name.slice(1);
  return {
    title: `Medical cannabis for ${inline}`,
    description: c.short + " What the evidence says, what clinics look for, and the questions worth asking.",
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) notFound();

  // Keep acronyms (PTSD, MS) intact; sentence-case everything else
  const inlineName = /^[A-Z\s]+$/.test(c.name)
    ? c.name
    : c.name.charAt(0).toLowerCase() + c.name.slice(1);

  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        <Link href="/conditions" className="hover:text-ink">Conditions</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{c.name}</span>
      </nav>

      <div className="mt-8 max-w-3xl">
        <Eyebrow
          label={c.commonlyPrescribed ? "Commonly prescribed" : "Prescribed in specific cases"}
        />
        <h1 className="headline mt-5 text-[38px] leading-[1.08] md:text-[52px]">
          Medical cannabis and <em>{inlineName}</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
          {c.intro}
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-12">
        <ArticleSections sections={c.sections} />
      </div>

      <div className="mt-16 rounded-3xl bg-leaf-tint px-6 py-10 md:px-10">
        <h2 className="headline text-[26px] md:text-[30px]">
          Think this might be <em>you?</em>
        </h2>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          The eligibility checker takes a minute. If you&apos;re likely to
          qualify, we&apos;ll point you at the clinics worth comparing.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/eligibility" className="btn-primary">Check eligibility</Link>
          <Link href="/clinics" className="btn-secondary">Compare clinics</Link>
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-ink-muted">
        This page is general information, not medical advice. Treatment
        decisions belong to you and a GMC-registered specialist.
      </p>
    </article>
  );
}
