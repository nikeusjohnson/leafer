import type { PageMeta } from "@/page-meta";
import EligibilityChecker from "@/components/EligibilityChecker";

export const metadata: PageMeta = {
  title: "Eligibility checklist",
  description:
    "Get ready to discuss eligibility with a UK clinic. Consider your history, records and questions before booking.",
};

export default function Eligibility() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Before you book</p>
        <h1 className="headline mt-4 text-[40px] leading-[1.04] md:text-[56px]">
          Eligibility checklist
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-ink-soft">
          Answer three questions about your location, diagnosis and treatment
          history. Get practical next steps for discussing eligibility with a
          clinician.
        </p>
      </div>
      <div id="eligibility-tool" className="mt-10">
        <EligibilityChecker />
      </div>
      <p className="mx-auto mt-6 max-w-xl text-center text-[14px] text-ink-muted">
        Your answers stay in this browser session.
      </p>
    </section>
  );
}
