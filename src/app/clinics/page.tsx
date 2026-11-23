import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import ClinicBrowser from "@/components/ClinicBrowser";
import { clinics } from "@/data/clinics";

export const metadata: Metadata = {
  title: "Compare UK medical cannabis clinics",
  description:
    "Independent, ranked comparison of licensed UK medical cannabis clinics — fees, conditions treated, who each suits, and the drawbacks nobody mentions.",
};

const ranked = [...clinics].sort((a, b) => b.score - a.score);

export default function ClinicsIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <Eyebrow label="Clinic comparison" />
      <h1 className="headline mt-5 max-w-3xl text-[40px] leading-[1.08] md:text-[56px]">
        {clinics.length} clinics, compared <em>side by side</em>
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
        Every clinic here is licensed to prescribe cannabis-based medicines in
        the UK. Scores weigh fees, availability, condition coverage and patient
        experience — and every review includes the drawbacks. No clinic pays
        for its place.
      </p>

      {/* Ranked result cards with sort & filter */}
      <div className="mt-12">
        <ClinicBrowser clinics={clinics} />
      </div>

      {/* Full comparison table */}
      <h2 className="headline mt-16 text-[30px] md:text-[36px]">
        The numbers, <em>side by side</em>
      </h2>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-cream-tint shadow-soft">
        <table className="w-full min-w-[720px] text-left text-[15px]">
          <thead>
            <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
              <th className="px-5 py-4 font-medium">Clinic</th>
              <th className="px-5 py-4 font-medium">Leafer score</th>
              <th className="px-5 py-4 font-medium">Initial consult</th>
              <th className="px-5 py-4 font-medium">Follow-up</th>
              <th className="px-5 py-4 font-medium">Typical monthly</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ranked.map((c) => (
              <tr key={c.slug} className="transition-colors duration-fast hover:bg-sage/30">
                <td className="px-5 py-4">
                  <Link
                    href={`/clinics/${c.slug}`}
                    className="font-semibold text-ink underline decoration-leaf/40 underline-offset-4 hover:decoration-leaf"
                  >
                    {c.name}
                  </Link>
                </td>
                <td className="px-5 py-4 font-serif text-[18px] font-semibold text-leaf-deep">
                  {c.score.toFixed(1)}
                </td>
                <td className="px-5 py-4 text-ink-soft">{c.initialFee}</td>
                <td className="px-5 py-4 text-ink-soft">{c.followUpFee}</td>
                <td className="px-5 py-4 text-ink-muted">{c.monthlyCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-ink-muted">
        Fees are the clinics&apos; own published prices at our last check —
        they change often, so always confirm directly. Scores are our editorial
        judgement, not a scientific measure.
      </p>

      <p className="mt-6 max-w-2xl rounded-2xl border border-line bg-amberTint px-5 py-4 text-[14px] leading-relaxed text-amber">
        Before registering with any clinic, verify its registration with the
        Care Quality Commission (CQC) or the relevant regulator in Scotland,
        Wales or Northern Ireland.
      </p>
    </section>
  );
}
