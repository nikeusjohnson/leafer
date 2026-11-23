import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import EligibilityChecker from "@/components/EligibilityChecker";

export const metadata: Metadata = {
  title: "Eligibility checker",
  description:
    "A free, one-minute checker to see whether you're likely to qualify for a UK medical cannabis consultation. No sign-up, no email required.",
};

export default function Eligibility() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <Eyebrow label="Free · One minute · No sign-up" />
        </div>
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[52px]">
          Do you <em>qualify?</em>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.7] text-ink-soft">
          Three quick questions. We don&apos;t store your answers, we
          don&apos;t want your email, and the result is guidance — not a
          medical decision.
        </p>
      </div>
      <div className="mt-12">
        <EligibilityChecker />
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-ink-muted">
        This checker is a rough guide based on the criteria UK clinics commonly
        apply. Only a GMC-registered specialist can decide whether
        cannabis-based medicine is appropriate for you.
      </p>
    </section>
  );
}
