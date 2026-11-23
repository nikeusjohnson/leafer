import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import FaqList from "@/components/FaqList";
import ClinicCard from "@/components/ClinicCard";
import EligibilityChecker from "@/components/EligibilityChecker";
import { conditions } from "@/data/conditions";
import { clinics } from "@/data/clinics";
import { guides } from "@/data/guides";
import { faqs } from "@/data/faqs";

const ranked = [...clinics].sort((a, b) => b.score - a.score);

export default function Home() {
  return (
    <>
      {/* Hero — comparison-first, checker front and centre */}
      <section className="relative overflow-hidden border-b border-line bg-sage/50">
        {/* soft organic backdrop */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-leaf/10"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 200C100 200 20 190 6 96C60 96 100 130 100 200Z" opacity="0.7" />
          <path d="M100 160C100 160 178 150 194 60C140 60 100 96 100 160Z" />
        </svg>
        <div className="relative mx-auto grid max-w-site gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow label="Legal since 2018 · Independent · Free" />
            <h1 className="headline mt-6 text-[42px] leading-[1.05] md:text-[62px]">
              Compare UK medical cannabis clinics, <em>naturally</em>.
            </h1>
            <p className="mt-6 max-w-lg text-[18px] leading-[1.7] text-ink-soft">
              One free minute tells you whether you&apos;re likely to qualify —
              then compare every licensed clinic side by side, with honest
              reviews and no referral fees. We&apos;re not a clinic, and nobody
              pays to be listed.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `${clinics.length} licensed clinics compared — fees, drawbacks and all`,
                "Independent: no clinic pays for its place here",
                "Free eligibility check — no email, no sign-up",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
                    <circle cx="9" cy="9" r="9" fill="#1F6B2A" opacity="0.12" />
                    <path d="M5.5 9.5l2.5 2.5 4.5-5" stroke="#1F6B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div id="checker">
            <EligibilityChecker />
          </div>
        </div>
      </section>

      {/* Ranked comparison */}
      <section className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow num="01" label="Clinic comparison" />
            <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
              The clinics, <em>ranked</em> and reviewed
            </h2>
            <p className="mt-3 max-w-xl text-[16px] leading-[1.7] text-ink-soft">
              Scored on fees, availability, condition coverage and patient
              experience. Every review lists the drawbacks too.
            </p>
          </div>
          <Link href="/clinics" className="link-underline text-[15px] font-semibold">
            Full comparison table →
          </Link>
        </div>
        <div className="mt-10 space-y-4">
          {ranked.slice(0, 4).map((c, i) => (
            <ClinicCard key={c.slug} clinic={c} rank={i + 1} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/clinics" className="btn-secondary">
            See all {clinics.length} clinics compared
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="hairline-t bg-cream-deep/50">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <Eyebrow num="02" label="How it works" />
          <h2 className="headline mt-5 max-w-xl text-[34px] leading-tight md:text-[44px]">
            Three steps to a <em>legal</em> prescription
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Book a consultation",
                d: "Choose a licensed clinic and book a video appointment with a specialist. Initial consultations typically cost £79–£200.",
              },
              {
                n: "2",
                t: "Specialist assessment",
                d: "The doctor reviews your records. If two previous treatments haven't worked, a prescription can be issued the same day.",
              },
              {
                n: "3",
                t: "Dispensed and delivered",
                d: "A licensed pharmacy posts your medication in plain, secure packaging — usually within 2–5 working days.",
              },
            ].map((s) => (
              <div key={s.n} className="card p-6">
                <span className="eyebrow-num h-8 w-8 text-[13px]">{s.n}</span>
                <h3 className="mt-4 font-serif text-[20px] font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{s.d}</p>
              </div>
            ))}
          </ol>
          <Link href="/how-it-works" className="link-underline mt-7 inline-block text-[15px] font-semibold">
            The full process, step by step →
          </Link>
        </div>
      </section>

      {/* Conditions */}
      <section className="hairline-t">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow num="03" label="Qualifying conditions" />
              <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
                Who can be <em>prescribed</em> it?
              </h2>
            </div>
            <Link href="/conditions" className="link-underline text-[15px] font-semibold">
              All conditions →
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c) => (
              <li key={c.slug}>
                <Link href={`/conditions/${c.slug}`} className="card card-hover block h-full p-5">
                  <h3 className="font-serif text-[19px] font-semibold text-ink">{c.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{c.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Independence — dark voice section */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow label="Where we stand" dark />
              <h2 className="headline mt-5 text-[34px] leading-tight text-cream md:text-[44px]">
                Independent. <span className="italic text-[#C5E47D]">Genuinely.</span>
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.75] text-cream/80">
              <p>
                A lot of comparison sites in this space are quietly run by
                clinics, or take a fee for every patient they send along. You
                deserve to know who&apos;s talking.
              </p>
              <p>
                Leafer isn&apos;t a clinic, a pharmacy, or a referrer. No clinic
                pays to appear here, scores aren&apos;t for sale, and if a
                clinic has drawbacks, they&apos;re on its review page. Our only
                agenda is that you walk in informed.
              </p>
              <Link href="/about" className="btn-secondary-dark mt-2">
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow num="04" label="Patient guides" />
            <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
              The questions everyone <em>actually</em> asks
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-ink-soft">
              Costs, driving, travel, what happens in the room — written for
              patients, not lawyers.
            </p>
            <Link href="/guides" className="link-underline mt-6 inline-block text-[15px] font-semibold">
              All guides →
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <div>
                    <p className="eyebrow">{g.kicker}</p>
                    <h3 className="mt-1.5 font-serif text-[20px] font-semibold text-ink transition-colors duration-fast group-hover:text-leaf-deep">
                      {g.title}
                    </h3>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                    {g.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="hairline-t bg-cream-deep/50">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow num="05" label="Quick answers" />
            <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
              The short <em>version</em>
            </h2>
            <div className="mt-10">
              <FaqList faqs={faqs.slice(0, 5)} />
            </div>
            <Link href="/faq" className="link-underline mt-8 inline-block text-[15px] font-semibold">
              All {faqs.length} questions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
