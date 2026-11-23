import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import FaqList from "@/components/FaqList";
import { conditions } from "@/data/conditions";
import { clinics } from "@/data/clinics";
import { guides } from "@/data/guides";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-site px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <Eyebrow label="Legal since November 2018 · Independent &amp; free" />
        <h1 className="headline mt-6 max-w-3xl text-[44px] leading-[1.05] md:text-[68px]">
          Medical cannabis in the UK, <em>explained</em> in plain English.
        </h1>
        <p className="mt-6 max-w-xl text-[18px] leading-[1.7] text-ink-soft">
          Who qualifies, what it costs, which clinics are worth your time — and
          how the whole thing actually works. We&apos;re not a clinic, we
          don&apos;t sell anything, and nobody pays to be listed here.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/eligibility" className="btn-primary">
            Check your eligibility — free
          </Link>
          <Link href="/clinics" className="btn-secondary">
            Compare UK clinics
          </Link>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          {[
            ["80k+", "UK patients prescribed"],
            ["20+", "licensed clinics"],
            ["2018", "legal since"],
            ["£79", "lowest first consult"],
          ].map(([stat, label]) => (
            <div key={stat} className="border-t border-line pt-4">
              <dt className="sr-only">{label}</dt>
              <dd className="font-serif text-[30px] font-semibold text-ink">
                {stat}
              </dd>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How it works */}
      <section className="hairline-t">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
          <Eyebrow num="01" label="How it works" />
          <div className="mt-5 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <h2 className="headline text-[34px] leading-tight md:text-[44px]">
                Three steps to a <em>legal</em> prescription
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-ink-soft">
                It&apos;s more straightforward than most people expect. From
                first enquiry to first delivery is usually under two weeks.
              </p>
              <Link
                href="/how-it-works"
                className="link-underline mt-6 inline-block text-[15px] font-semibold"
              >
                Read the full process →
              </Link>
            </div>
            <ol className="space-y-0 divide-y divide-line border-y border-line">
              {[
                {
                  n: "1",
                  t: "Book a consultation",
                  d: "Choose a licensed clinic and book a video appointment with a specialist. Initial consultations typically cost £79–£200.",
                },
                {
                  n: "2",
                  t: "Specialist assessment",
                  d: "The doctor reviews your history and records. If two previous treatments haven't worked and your condition qualifies, a prescription can be issued the same day.",
                },
                {
                  n: "3",
                  t: "Dispensed and delivered",
                  d: "A licensed pharmacy dispenses your medication and posts it to your home in plain, secure packaging — usually within 2–5 days.",
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-5 py-6">
                  <span className="eyebrow-num mt-0.5">{s.n}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink">{s.t}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="hairline-t bg-cream-deep/50">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow num="02" label="Qualifying conditions" />
              <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
                Who can be <em>prescribed</em> medical cannabis?
              </h2>
            </div>
            <Link
              href="/conditions"
              className="link-underline text-[15px] font-semibold"
            >
              All conditions →
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/conditions/${c.slug}`}
                  className="card card-hover block h-full p-5"
                >
                  <h3 className="font-serif text-[19px] font-semibold text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    {c.short}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-ink-muted">
            This isn&apos;t an exhaustive list — specialists decide case by case.
            What&apos;s always required: a genuine diagnosis, and at least two
            conventional treatments that haven&apos;t worked well enough.
          </p>
        </div>
      </section>

      {/* Independence — dark voice section */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow label="Where we stand" dark />
              <h2 className="headline mt-5 text-[34px] leading-tight text-cream md:text-[44px]">
                Independent. <span className="italic text-[#8FBF9B]">Genuinely.</span>
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.75] text-cream/80">
              <p>
                A lot of sites in this space are quietly run by clinics, or take
                a fee for every patient they send along. Nothing wrong with
                earning a living — but you deserve to know who&apos;s talking.
              </p>
              <p>
                Leafer isn&apos;t a clinic, a pharmacy, or a referrer. No clinic
                pays to appear here, rankings aren&apos;t for sale, and if a
                clinic has drawbacks, we say so on its review page. Our only
                agenda is that you walk in informed.
              </p>
              <Link href="/about" className="btn-secondary-dark mt-2">
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics preview */}
      <section className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow num="03" label="Clinic comparison" />
            <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
              The clinics, <em>side by side</em>
            </h2>
          </div>
          <Link href="/clinics" className="link-underline text-[15px] font-semibold">
            Full comparison →
          </Link>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-cream-tint shadow-soft">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                <th className="px-5 py-4 font-medium">Clinic</th>
                <th className="px-5 py-4 font-medium">Initial consult</th>
                <th className="px-5 py-4 font-medium">Format</th>
                <th className="px-5 py-4 font-medium">Known for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {clinics.slice(0, 5).map((c) => (
                <tr key={c.slug} className="transition-colors duration-fast hover:bg-cream-deep/40">
                  <td className="px-5 py-4">
                    <Link
                      href={`/clinics/${c.slug}`}
                      className="font-semibold text-ink underline decoration-leaf/40 underline-offset-4 hover:decoration-leaf"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-ink-soft">{c.initialFee}</td>
                  <td className="px-5 py-4 text-ink-soft">{c.format}</td>
                  <td className="px-5 py-4 text-ink-muted">{c.tag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[13px] text-ink-muted">
          Fees are the clinics&apos; own published prices at our last check —
          always confirm directly, as pricing changes often.
        </p>
      </section>

      {/* Guides */}
      <section className="hairline-t">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
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
              <Link
                href="/guides"
                className="link-underline mt-6 inline-block text-[15px] font-semibold"
              >
                All guides →
              </Link>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-5 transition-colors duration-fast"
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
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="hairline-t bg-cream-deep/50">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Eyebrow num="05" label="Quick answers" />
            <h2 className="headline mt-5 text-[34px] leading-tight md:text-[44px]">
              The short <em>version</em>
            </h2>
            <div className="mt-10">
              <FaqList faqs={faqs.slice(0, 5)} />
            </div>
            <Link
              href="/faq"
              className="link-underline mt-8 inline-block text-[15px] font-semibold"
            >
              All {faqs.length} questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-3xl bg-leaf-tint px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="headline mx-auto max-w-2xl text-[32px] leading-tight md:text-[42px]">
            Not sure where you <em>stand</em>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.7] text-ink-soft">
            Our eligibility checker takes about a minute, asks three questions,
            and doesn&apos;t want your email address.
          </p>
          <Link href="/eligibility" className="btn-primary mt-8">
            Check eligibility — free
          </Link>
        </div>
      </section>
    </>
  );
}
