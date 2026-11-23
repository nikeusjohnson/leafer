import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "About Leafer",
  description:
    "Who we are, why we built Leafer, and how we keep the information independent and honest.",
};

export default function About() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <Eyebrow label="About us" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[56px]">
          Why Leafer <em>exists</em>
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[20px] leading-[1.65] text-ink-soft">
          Because finding out whether medical cannabis might help you
          shouldn&apos;t require a law degree, a Reddit deep-dive, or a leap of
          faith in a company that profits from your answer.
        </p>
      </div>

      <div className="mt-14 grid gap-10 border-t border-line pt-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <h2 className="headline text-[28px] leading-tight md:text-[34px]">
          The problem we kept <em>seeing</em>
        </h2>
        <div className="space-y-5 text-[16px] leading-[1.75] text-ink-soft">
          <p>
            Medical cannabis has been legal in the UK since 2018, yet most
            eligible patients have no idea. Those who do find out face a maze:
            clinic websites that all claim to be the best, comparison sites
            quietly run by the clinics they rank first, and official guidance
            written for clinicians rather than patients.
          </p>
          <p>
            Meanwhile tens of thousands of people — many of whom would qualify
            today — either don&apos;t know the legal route exists or assume
            it&apos;s not for the likes of them.
          </p>
          <p>
            Leafer is the site we wished existed: plain-English, independent,
            and honest about the drawbacks as well as the benefits.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-forest px-6 py-12 text-cream md:rounded-3xl md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <h2 className="headline text-[28px] leading-tight text-cream md:text-[34px]">
            How we keep it <span className="italic text-[#8FBF9B]">honest</span>
          </h2>
          <ul className="space-y-4 text-[16px] leading-[1.75] text-cream/80">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FBF9B]" />
              <span>No clinic or pharmacy pays to be listed, ranked, or reviewed on this site.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FBF9B]" />
              <span>We take no referral fees. When you leave here for a clinic, we earn nothing from it.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FBF9B]" />
              <span>Every review includes drawbacks, because every clinic has them.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FBF9B]" />
              <span>We say &quot;the evidence is mixed&quot; when the evidence is mixed — including about cannabis itself.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <h2 className="headline text-[28px] leading-tight md:text-[34px]">
          What we&apos;re <em>not</em>
        </h2>
        <div className="space-y-5 text-[16px] leading-[1.75] text-ink-soft">
          <p>
            We&apos;re not doctors, and nothing here is medical advice. We
            can&apos;t tell you whether medical cannabis is right for you —
            only a GMC-registered specialist who&apos;s seen your records can
            do that.
          </p>
          <p>
            We&apos;re not campaigners either. Legal access exists; our job is
            to help you understand and use it, not to lobby about what the law
            should be.
          </p>
          <p>
            Spot something wrong or out of date? Fees change and clinics come
            and go — we&apos;d genuinely rather be corrected. The eligibility
            checker and clinic pages are reviewed regularly.
          </p>
          <Link href="/clinics" className="btn-secondary mt-2">
            Browse the clinic reviews
          </Link>
        </div>
      </div>
    </article>
  );
}
