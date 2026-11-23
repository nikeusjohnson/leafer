export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

export default function ArticleSections({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-10">
      {sections.map((s, i) => (
        <section key={i}>
          {s.heading && (
            <h2 className="headline text-[26px] leading-snug md:text-[30px]">
              {s.heading}
            </h2>
          )}
          {s.paragraphs?.map((p, j) => (
            <p
              key={j}
              className="mt-4 max-w-prose2 text-[17px] leading-[1.75] text-ink-soft"
            >
              {p}
            </p>
          ))}
          {s.bullets && (
            <ul className="mt-5 max-w-prose2 space-y-3">
              {s.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  >
                    <path
                      d="M3 9.5l4 4 8-9"
                      stroke="#0057D9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {s.callout && (
            <aside className="mt-6 max-w-prose2 rounded-2xl border border-line bg-amberTint px-5 py-4">
              <p className="text-[15px] leading-relaxed text-amber">{s.callout}</p>
            </aside>
          )}
        </section>
      ))}
    </div>
  );
}
