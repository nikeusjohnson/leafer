import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "The jargon, translated — THC, CBD, CBPM, Schedule 2, titration and the rest, in plain English.",
};

const terms: [string, string][] = [
  ["CBPM", "Cannabis-based product for medicinal use — the legal term for what gets prescribed in the UK. If a document says CBPM, it means medical cannabis."],
  ["CBD", "Cannabidiol. A non-intoxicating compound found in cannabis. Legal in shop-bought supplements in trace-THC form; prescribed in much higher, pharmaceutical-grade doses as medicine."],
  ["THC", "Tetrahydrocannabinol. The compound responsible for the 'high' — and for much of the therapeutic effect on pain, nausea and sleep. Prescribed in controlled, measured doses."],
  ["Schedule 2", "The category of UK drug law that medical cannabis sits in: controlled, but prescribable by specialists. Recreational cannabis remains in the non-prescribable category."],
  ["GMC Specialist Register", "The General Medical Council's list of doctors qualified as specialists. Only doctors on this register can prescribe medical cannabis — your GP cannot."],
  ["CQC", "The Care Quality Commission — the regulator for clinics in England. A legitimate clinic will be CQC-registered (or registered with the equivalent body in Scotland, Wales or Northern Ireland). Check before you register."],
  ["Titration", "Starting on a low dose and adjusting gradually until symptoms are controlled with minimal side effects. Why your first prescription is rarely your long-term dose."],
  ["Flower", "Dried cannabis prescribed for vaporisation. Fast-acting, shorter-lasting. Never smoked — smoking prescribed cannabis remains illegal."],
  ["Oil", "Cannabis extract in a carrier oil, taken under the tongue with a measured dropper. Slow to start (30 minutes to 2 hours), long-lasting, precisely dosed."],
  ["Vaporiser", "A device that heats flower enough to release cannabinoids without burning. Required for prescribed flower; smoking defeats the point and the law."],
  ["Terpene", "Aromatic compounds in cannabis that shape each product's character. Patients report different terpene profiles suit different symptoms — the science is still catching up."],
  ["Tolerance", "When the same dose gradually does less. Common with long-term THC use and manageable — see our guide to tolerance and treatment breaks."],
  ["Medical defence", "The legal protection for drivers taking prescribed medicine as directed. It's argued in court after a positive test — it doesn't stop you being tested at the roadside."],
  ["UK Medical Cannabis Registry", "A research database run by Sapphire Medical Clinics tracking real-world patient outcomes. Much of what we know about UK treatment comes from it."],
  ["Summary care record", "Your GP-held medical summary. Clinics need it (with your consent) to confirm your diagnosis and treatment history before prescribing."],
];

export default function Glossary() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <Eyebrow label="Glossary" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[56px]">
          The jargon, <em>translated</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
          Every term you&apos;ll bump into while researching medical cannabis in
          the UK, in plain English. No Latin required.
        </p>
      </div>

      <dl className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {terms.map(([term, def]) => (
          <div key={term} className="grid gap-2 py-5 md:grid-cols-[180px_1fr] md:gap-6">
            <dt className="font-serif text-[19px] font-semibold text-ink">{term}</dt>
            <dd className="text-[15px] leading-[1.7] text-ink-soft">{def}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
        Something still unclear? The <Link href="/faq" className="link-underline">patient FAQ</Link> covers
        the common questions, and the <Link href="/guides" className="link-underline">guides</Link> go deeper.
      </p>
    </section>
  );
}
