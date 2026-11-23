import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The step-by-step process of getting a legal medical cannabis prescription in the UK — from first enquiry to home delivery.",
};

const steps = [
  {
    n: "1",
    title: "Check you're likely to qualify",
    body: "Before spending a penny, make sure the basics apply: you're a UK resident, you have a diagnosed condition that specialists prescribe for, and you've tried at least two conventional treatments without enough relief. Our free eligibility checker covers this in about a minute.",
    link: { href: "/eligibility", label: "Try the eligibility checker" },
  },
  {
    n: "2",
    title: "Choose a clinic and register",
    body: "There are 20 or so licensed clinics in the UK, and they differ more than you'd think — on price, specialist expertise, and how they treat patients. Register online with the one that suits you. You'll give consent for the clinic to access your medical records, usually from your GP.",
    link: { href: "/clinics", label: "Compare UK clinics" },
  },
  {
    n: "3",
    title: "Have your consultation",
    body: "A 20–45 minute video appointment with a GMC-registered specialist. They'll go through your history, confirm your diagnosis, and discuss whether cannabis-based medicine is appropriate. If it is, they explain the options and start you on a low dose. If it isn't, an honest clinic will tell you.",
    link: { href: "/guides/first-consultation", label: "What to expect on the day" },
  },
  {
    n: "4",
    title: "Prescription approved",
    body: "Prescriptions are confirmed by the clinic's multidisciplinary team — a legal requirement, and a useful safety check. The prescription then goes to a licensed pharmacy. This stage usually takes a day or two.",
  },
  {
    n: "5",
    title: "Dispensed and delivered",
    body: "The pharmacy dispenses your medication and posts it to your home in plain, secure packaging. Delivery is normally within 2–5 working days of the prescription being approved. Oils come with a measured dropper; flower comes with clear instructions to vaporise, never smoke.",
  },
  {
    n: "6",
    title: "Follow-ups and adjustments",
    body: "You'll have a follow-up within about a month, then less often once you're stable. This is where dosing gets fine-tuned — most people don't land on the right product and dose on day one, and that's normal. Your clinic also writes to your GP to keep your records complete.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-14 pt-14 md:px-8 md:pt-20">
        <Eyebrow label="The process, start to finish" />
        <h1 className="headline mt-5 max-w-3xl text-[40px] leading-[1.08] md:text-[56px]">
          How getting a prescription <em>actually</em> works
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
          Six steps, usually under two weeks from first enquiry to first
          delivery. No mystery, no middlemen — here&apos;s the whole thing.
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <ol className="divide-y divide-line border-y border-line">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-4 py-8 md:grid-cols-[80px_1fr]">
              <span className="eyebrow-num mt-1 h-8 w-8 text-[13px]">{s.n}</span>
              <div className="max-w-prose2">
                <h2 className="font-serif text-[24px] font-semibold tracking-[-0.01em] text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.75] text-ink-soft">
                  {s.body}
                </p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="link-underline mt-4 inline-block text-[15px] font-semibold"
                  >
                    {s.link.label} →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-3xl bg-leaf-tint px-6 py-10 text-center md:py-12">
          <h2 className="headline text-[28px] md:text-[34px]">
            Ready when you <em>are</em>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The checker is free, takes a minute, and asks for nothing personal.
          </p>
          <Link href="/eligibility" className="btn-primary mt-7">
            Check eligibility
          </Link>
        </div>
      </section>
    </>
  );
}
