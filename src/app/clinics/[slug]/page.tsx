import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import { clinics, getClinic } from "@/data/clinics";

export function generateStaticParams() {
  return clinics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getClinic(slug);
  if (!c) return {};
  return {
    title: `${c.name} review`,
    description: `Independent review of ${c.name}: fees, conditions treated, the process, and the drawbacks. ${c.summary}`,
  };
}

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getClinic(slug);
  if (!c) notFound();

  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        <Link href="/clinics" className="hover:text-ink">Clinics</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{c.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <Eyebrow label={c.tag} />
          <h1 className="headline mt-5 text-[38px] leading-[1.08] md:text-[50px]">
            {c.name} — an <em>independent</em> review
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
            {c.summary}
          </p>

          <div className="mt-12 space-y-12 border-t border-line pt-10">
            <section>
              <h2 className="headline text-[26px] md:text-[30px]">How it works</h2>
              <ol className="mt-5 space-y-4">
                {c.process.map((p, i) => (
                  <li key={i} className="flex max-w-prose2 gap-4">
                    <span className="eyebrow-num mt-0.5 shrink-0">{i + 1}</span>
                    <p className="text-[16px] leading-[1.7] text-ink-soft">{p}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="headline text-[26px] md:text-[30px]">Who it suits</h2>
              <ul className="mt-5 max-w-prose2 space-y-3">
                {c.suits.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-1 shrink-0">
                      <path d="M3 9.5l4 4 8-9" stroke="#2F7D4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="headline text-[26px] md:text-[30px]">
                The drawbacks — because <em>every</em> clinic has them
              </h2>
              <ul className="mt-5 max-w-prose2 space-y-3">
                {c.drawbacks.map((d, i) => (
                  <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-cream-deep/60 px-6 py-6">
              <h2 className="eyebrow">Our take</h2>
              <p className="mt-3 max-w-prose2 font-serif text-[19px] leading-[1.65] text-ink">
                {c.verdict}
              </p>
            </section>
          </div>
        </div>

        {/* Facts sidebar */}
        <aside className="lg:pt-2">
          <div className="card sticky top-24 p-6">
            <h2 className="eyebrow">At a glance</h2>
            <dl className="mt-5 divide-y divide-line">
              {[
                ["Initial consultation", c.initialFee],
                ["Follow-up", c.followUpFee],
                ["Typical monthly cost", c.monthlyCost],
                ["Format", c.format],
              ].map(([k, v]) => (
                <div key={k} className="py-3.5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{k}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-ink">{v}</dd>
                </div>
              ))}
              <div className="py-3.5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                  Commonly treats
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {c.conditions.map((cond) => (
                    <span key={cond} className="rounded-full bg-leaf-tint px-3 py-1 text-[13px] font-medium text-leaf-deep">
                      {cond}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <Link href="/eligibility" className="btn-primary mt-5 w-full">
              Check your eligibility
            </Link>
            <p className="mt-4 text-[12px] leading-relaxed text-ink-muted">
              Fees are the clinic&apos;s published prices at our last check and
              change often — confirm directly before registering.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
