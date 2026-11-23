import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Spotted an error, a fee that's changed, or a clinic we've missed? Here's how to reach Leafer.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <Eyebrow label="Contact" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[56px]">
          Say <em>hello</em>
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[20px] leading-[1.65] text-ink-soft">
          We&apos;re a small independent team. We read everything, and
          corrections genuinely make the site better.
        </p>
      </div>

      <div className="mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <div className="card p-7">
          <h2 className="font-serif text-[22px] font-semibold text-ink">
            Corrections and updates
          </h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">
            Fee changed? Clinic closed? Something out of date or plain wrong?
            Email us and we&apos;ll fix it — these are the messages we act on
            fastest.
          </p>
          <a
            href="mailto:corrections@leafer.co.uk"
            className="link-underline mt-4 inline-block text-[15px] font-semibold"
          >
            corrections@leafer.co.uk
          </a>
        </div>

        <div className="card p-7">
          <h2 className="font-serif text-[22px] font-semibold text-ink">
            Everything else
          </h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">
            Feedback, suggestions, or clinics you think we should review. One
            caveat: we can&apos;t give medical advice or recommend whether
            treatment is right for you — that&apos;s a conversation for a
            specialist.
          </p>
          <a
            href="mailto:hello@leafer.co.uk"
            className="link-underline mt-4 inline-block text-[15px] font-semibold"
          >
            hello@leafer.co.uk
          </a>
        </div>
      </div>

      <div className="mt-10 max-w-4xl rounded-2xl border border-line bg-amberTint px-6 py-5">
        <p className="text-[14px] leading-relaxed text-amber">
          If you&apos;re a current patient with a question about your
          medication, dosing or side effects, please contact your clinic&apos;s
          clinical team directly — or NHS 111 in an urgent situation. We&apos;re
          an information site and can&apos;t advise on individual treatment.
        </p>
      </div>

      <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
        Not sure where to start? The <Link href="/eligibility" className="link-underline">eligibility checker</Link> takes
        a minute, and the <Link href="/clinics" className="link-underline">clinic comparison</Link> shows
        who&apos;s who.
      </p>
    </section>
  );
}
