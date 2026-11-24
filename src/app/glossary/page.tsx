import type { PageMeta } from "@/page-meta";

export const metadata: PageMeta = {
  title: "Glossary",
  description:
    "Definitions of the terms used to describe clinic fees, registration and prescription services.",
};

const terms: [string, string][] = [
  [
    "Assessment fee",
    "The price for a clinician to review your history and discuss treatment options. Ask what happens to this fee if treatment is unsuitable.",
  ],
  [
    "Follow-up",
    "An appointment to review the effects of treatment, discuss any problems and agree the next steps.",
  ],
  [
    "Repeat prescription fee",
    "A charge for issuing another prescription. Check the pharmacy price for supplying the medicine separately.",
  ],
  [
    "Subscription",
    "A regular payment for specified services. Check the minimum term and which appointments, prescriptions or deliveries it covers.",
  ],
  [
    "CBD",
    "Cannabidiol, a substance found in cannabis. CBD can affect other medicines, so tell your pharmacist or clinician about any products you use.",
  ],
  [
    "THC",
    "Tetrahydrocannabinol, a substance in cannabis that can cause intoxication. The clinician or pharmacist can explain the risks of a prescribed product.",
  ],
  [
    "CBPM",
    "Cannabis-based product for medicinal use. This term appears in UK medicines legislation and guidance.",
  ],
  [
    "GMC Specialist Register",
    "The General Medical Council’s record of doctors recognised as specialists. You can check a doctor by name or GMC number.",
  ],
  [
    "CQC",
    "The Care Quality Commission regulates health and adult social care services in England. Other UK nations have their own healthcare regulators.",
  ],
  [
    "Titration",
    "Adjusting the dose under clinical direction while monitoring its effects.",
  ],
  [
    "Dispensing label",
    "The label the pharmacy attaches to your medicine. It identifies the patient and gives the instructions for that prescription.",
  ],
  [
    "Summary Care Record",
    "An electronic record in England containing key information from a GP record, such as current medicines and allergies. A clinic may ask for extra letters or treatment history.",
  ],
];

export default function Glossary() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Glossary</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        Clinic fees and medical terms
      </h1>
      <dl className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
        {terms.map(([term, definition]) => (
          <div className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr]" key={term}>
            <dt className="font-bold text-ink">{term}</dt>
            <dd className="leading-relaxed text-ink-soft">{definition}</dd>
          </div>
        ))}
      </dl>
      <a href="/guides" className="btn-secondary mt-10">
        Browse patient guides
      </a>
    </article>
  );
}
