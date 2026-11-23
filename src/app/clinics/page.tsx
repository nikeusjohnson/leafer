import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { clinics } from "@/data/clinics";

export const metadata: Metadata = {
  title: "Compare UK medical cannabis clinics",
  description:
    "Independent reviews of licensed UK medical cannabis clinics — fees, conditions treated, who each suits, and the drawbacks nobody mentions.",
};

export default function ClinicsIndex() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <Eyebrow label="Clinic comparison" />
      <h1 className="headline mt-5 max-w-3xl text-[40px] leading-[1.08] md:text-[56px]">
        UK clinics, reviewed <em>honestly</em>
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
        Every clinic below is licensed to prescribe cannabis-based medicines in
        the UK. Fees are their own published prices at our last check — they
        change often, so always confirm directly. No clinic pays to be here.
      </p>

      {/* Comparison table */}
      <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-cream-tint shadow-soft">
        <table className="w-full min-w-[680px] text-left text-[15px]">
          <thead>
            <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
              <th className="px-5 py-4 font-medium">Clinic</th>
              <th className="px-5 py-4 font-medium">Initial consult</th>
              <th className="px-5 py-4 font-medium">Follow-up</th>
              <th className="px-5 py-4 font-medium">Format</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {clinics.map((c) => (
              <tr key={c.slug} className="transition-colors duration-fast hover:bg-cream-deep/40">
                <td className="px-5 py-4">
                  <Link
                    href={`/clinics/${c.slug}`}
                    className="font-semibold text-ink underline decoration-leaf/40 underline-offset-4 hover:decoration-leaf"
                  >
                    {c.name}
                  </Link>
                  <span className="block text-[13px] text-ink-muted">{c.tag}</span>
                </td>
                <td className="px-5 py-4 text-ink-soft">{c.initialFee}</td>
                <td className="px-5 py-4 text-ink-soft">{c.followUpFee}</td>
                <td className="px-5 py-4 text-ink-muted">{c.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Review cards */}
      <h2 className="headline mt-16 text-[30px] md:text-[36px]">
        The full <em>reviews</em>
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clinics.map((c) => (
          <li key={c.slug}>
            <Link href={`/clinics/${c.slug}`} className="card card-hover flex h-full flex-col p-6">
              <p className="eyebrow">{c.tag}</p>
              <h3 className="mt-2 font-serif text-[21px] font-semibold text-ink">
                {c.name}
              </h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">
                {c.summary}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                <span className="text-[14px] font-semibold text-ink">{c.initialFee}</span>
                <span className="text-[14px] font-semibold text-leaf-deep">Read review →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl rounded-2xl border border-line bg-amberTint px-5 py-4 text-[14px] leading-relaxed text-amber">
        A note on independence: we have no commercial relationship with any
        clinic listed. Before registering with any clinic, verify its
        registration with the Care Quality Commission (CQC) or the relevant
        regulator in Scotland, Wales or Northern Ireland.
      </p>
    </section>
  );
}
