export type Faq = { q: string; a: string };

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex items-center justify-between gap-4 text-left">
            <span className="text-[17px] font-semibold text-ink">{f.q}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="faq-chevron shrink-0 transition-transform duration-fast"
            >
              <path
                d="M4 6.5l5 5 5-5"
                stroke="#0057D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>
          <p className="mt-3 max-w-prose2 text-[16px] leading-[1.7] text-ink-soft">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
