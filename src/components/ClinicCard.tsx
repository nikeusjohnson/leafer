import Link from "next/link";
import type { Clinic } from "@/data/clinics";

export default function ClinicCard({
  clinic,
  rank,
}: {
  clinic: Clinic;
  rank: number;
}) {
  return (
    <article className="card card-hover overflow-hidden">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-8 md:p-7">
        {/* Rank + identity */}
        <div className="flex items-start gap-4 md:w-64 md:shrink-0">
          <span className="eyebrow-num mt-1 h-8 w-8 text-[13px]">{rank}</span>
          <div>
            <h3 className="font-serif text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink">
              <Link
                href={`/clinics/${clinic.slug}`}
                className="underline decoration-leaf/0 underline-offset-4 transition-colors duration-fast hover:decoration-leaf"
              >
                {clinic.name}
              </Link>
            </h3>
            <p className="mt-1 text-[13px] text-ink-muted">{clinic.tag}</p>
            <span className="mt-3 inline-block rounded-full bg-sage px-3 py-1 text-[12px] font-semibold text-forest">
              Best for: {clinic.bestFor}
            </span>
          </div>
        </div>

        {/* Facts */}
        <dl className="grid flex-1 grid-cols-3 gap-4 border-y border-line py-4 md:border-x md:border-y-0 md:px-8 md:py-0">
          {[
            ["First consult", clinic.initialFee],
            ["Follow-up", clinic.followUpFee],
            ["Format", clinic.format.replace(", UK-wide", "")],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                {k}
              </dt>
              <dd className="mt-1 text-[14px] font-semibold leading-snug text-ink">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        {/* Score + CTA */}
        <div className="flex items-center gap-5 md:w-52 md:shrink-0 md:flex-col md:items-end md:gap-3">
          <div className="text-left md:text-right">
            <p className="font-serif text-[34px] font-semibold leading-none text-leaf-deep">
              {clinic.score.toFixed(1)}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
              Leafer score
            </p>
          </div>
          <Link
            href={`/clinics/${clinic.slug}`}
            className="btn-primary !rounded-xl px-5 py-2.5 text-[14px]"
          >
            Full review
          </Link>
        </div>
      </div>

      {/* Tick strip */}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line bg-sage/40 px-6 py-3.5 md:px-7">
        {clinic.suits.slice(0, 3).map((s, i) => (
          <li key={i} className="flex items-center gap-2 text-[13px] text-ink-soft">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M2.5 7.5l3 3 6-7" stroke="#1F5C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
