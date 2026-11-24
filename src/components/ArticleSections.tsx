
export type Source = { label: string; href: string };
export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  checklist?: string[];
  table?: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
  callout?: string;
  sources?: Source[];
};

export function sectionAnchor(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ArticleSections({ sections }: { sections: Section[] }) {
  return (
    <div className="max-w-3xl space-y-9">
      {sections.map((section, index) => (
        <section
          key={section.heading ?? index}
          id={section.heading ? sectionAnchor(section.heading) : undefined}
          className="scroll-mt-6"
        >
          {section.heading && (
            <h2 className="headline text-[26px] leading-tight md:text-[32px]">
              {section.heading}
            </h2>
          )}
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 max-w-prose2 text-[17px] leading-[1.7] text-ink-soft"
            >
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-4 max-w-prose2 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-ink-soft marker:text-leaf">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {section.table && (
            <table className="mt-5 w-full border-collapse text-left text-[15px] leading-relaxed md:text-[16px]">
              <caption className="pb-2 text-left font-semibold text-ink">
                {section.table.caption}
              </caption>
              <thead className="bg-leaf-tint">
                <tr>
                  {section.table.columns.map((column) => (
                    <th scope="col" key={column} className="px-2 py-3 sm:px-4">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map(([label, ...values]) => (
                  <tr key={label} className="border-b border-line">
                    <th scope="row" className="px-2 py-3 font-semibold sm:px-4">
                      {label}
                    </th>
                    {values.map((value, i) => (
                      <td key={i} className="px-2 py-3 sm:px-4">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {section.checklist && (
            <fieldset className="mt-4 space-y-2 rounded-2xl border border-line bg-white p-4">
              <legend className="sr-only">
                {section.heading ?? "Checklist"}
              </legend>
              {section.checklist.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded px-1 py-1.5 leading-relaxed text-ink-soft"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 accent-leaf-deep"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </fieldset>
          )}
          {section.callout && (
            <aside className="mt-5 rounded-2xl bg-leaf-tint px-6 py-5 leading-relaxed text-forest">
              {section.callout}
            </aside>
          )}
          {section.sources && (
            <ul
              aria-label="Related reading"
              className="mt-4 flex flex-wrap gap-x-6 gap-y-2"
            >
              {section.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    className="link-underline text-[15px] font-semibold"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
