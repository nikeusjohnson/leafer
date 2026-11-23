import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import FaqList from "@/components/FaqList";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Patient FAQ",
  description:
    "Straight answers to the questions UK patients ask most about medical cannabis — legality, costs, driving, travel, and the process.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Eyebrow label="Patient FAQ" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[56px]">
          Straight <em>answers</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.7] text-ink-soft">
          The {faqs.length} questions patients ask most. If yours isn&apos;t
          here, the guides probably cover it — and if it&apos;s about your own
          treatment, that one&apos;s for a specialist.
        </p>
        <div className="mt-12">
          <FaqList faqs={faqs} />
        </div>
        <div className="mt-14 rounded-3xl bg-leaf-tint px-6 py-10 text-center md:py-12">
          <h2 className="headline text-[26px] md:text-[32px]">
            Want the <em>next</em> step?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Check whether you&apos;re likely to qualify — it takes about a minute.
          </p>
          <Link href="/eligibility" className="btn-primary mt-7">
            Check eligibility — free
          </Link>
        </div>
      </div>
    </section>
  );
}
