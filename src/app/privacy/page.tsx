import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Leafer handles your data — which is to say, as little as possible.",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <Eyebrow label="Legal" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[52px]">
          Privacy, in <em>plain English</em>
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[20px] leading-[1.65] text-ink-soft">
          The short version: this site collects almost nothing about you, and
          what little it does, it doesn&apos;t sell.
        </p>
      </div>

      <div className="mt-14 max-w-prose2 space-y-10 border-t border-line pt-12">
        {[
          {
            h: "What we collect",
            p: "This website itself has no accounts, no contact forms and no email sign-ups. The eligibility checker runs entirely in your browser — your answers never leave your device. Standard, privacy-respecting analytics may record anonymised page visits (which pages are read, roughly where in the UK visitors are) so we know what's useful. That's it.",
          },
          {
            h: "Cookies",
            p: "We don't use advertising or tracking cookies. Any analytics in use are configured to avoid identifying you. Your browser can block cookies entirely and the site will work exactly the same.",
          },
          {
            h: "What we never do",
            p: "We don't sell, rent or share personal data. We don't run advertising. We don't build profiles of visitors. If that ever changes, this page will say so plainly before it happens.",
          },
          {
            h: "Your rights",
            p: "Under UK GDPR you have the right to access, correct or delete personal data held about you. Given how little this site collects, there's likely nothing to delete — but if you believe otherwise, you're entitled to ask, and to complain to the Information Commissioner's Office (ICO) if you're unhappy with the response.",
          },
          {
            h: "Changes",
            p: "If this policy changes, the new version replaces this one on this page. Material changes will be flagged at the top of the page rather than buried.",
          },
        ].map((s) => (
          <section key={s.h}>
            <h2 className="headline text-[24px] md:text-[28px]">{s.h}</h2>
            <p className="mt-3 text-[16px] leading-[1.75] text-ink-soft">{s.p}</p>
          </section>
        ))}
        <p className="text-[13px] text-ink-muted">Last updated: November 2026</p>
      </div>
    </article>
  );
}
