import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import ArticleSections from "@/components/ArticleSections";

export const metadata: Metadata = {
  title: "UK medical cannabis law",
  description:
    "What the law actually says about medical cannabis in the UK — the 2018 change, Schedule 2 status, and where recreational use stands.",
};

export default function UkLaw() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <Eyebrow label="UK law" />
        <h1 className="headline mt-5 text-[40px] leading-[1.08] md:text-[56px]">
          What the law <em>actually</em> says
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[20px] leading-[1.65] text-ink-soft">
          Medical cannabis has been legal in the UK since November 2018. But the
          gap between &quot;legal&quot; and &quot;available&quot; is where most of
          the confusion lives — so here&apos;s the position, without the
          legalese.
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-12">
        <ArticleSections
          sections={[
            {
              heading: "The 2018 change",
              paragraphs: [
                "On 1 November 2018, cannabis-based products for medicinal use (CBPMs) were moved to Schedule 2 of the Misuse of Drugs Regulations 2001. That change — prompted by the high-profile cases of children with severe epilepsy — made it legal for specialist doctors to prescribe them.",
                "Two things matter in that sentence. First: only specialists on the GMC Specialist Register can prescribe — your GP cannot. Second: it changed nothing about recreational cannabis, which remains a Class B drug.",
              ],
            },
            {
              heading: "What Schedule 2 means in practice",
              bullets: [
                "Possession is legal only with a valid prescription, and the medicine must stay in its original pharmacy packaging",
                "Prescriptions must come from a GMC-registered specialist, confirmed by a multidisciplinary team",
                "Supply is through licensed pharmacies only — there is no legal dispensary or 'cannabis club' route in the UK",
                "Growing your own remains illegal, prescription or not",
              ],
            },
            {
              heading: "NHS versus private",
              paragraphs: [
                "The 2018 change made prescribing legal, but NICE guidance keeps NHS prescribing extremely narrow — in practice, a handful of severe epilepsy cases. Everyone else goes private. It's an uncomfortable two-tier reality, but it's the current one, and pretending otherwise helps nobody.",
                "Private prescribing is fully legal and well established: tens of thousands of UK patients now hold valid prescriptions through licensed clinics.",
              ],
              callout:
                "A prescription makes possession legal. It does not make smoking your medicine legal (vaporisation only), does not override drug-driving law, and does not travel abroad with you. See our driving and travel guides.",
            },
            {
              heading: "And recreational cannabis?",
              paragraphs: [
                "Still illegal. Possession can bring up to five years in prison, supply up to fourteen. In practice, first-time possession often draws a warning or penalty notice — but a criminal record is entirely possible, and 'I use it medically' is no defence without a prescription.",
                "If you're currently self-medicating, the legal route is more accessible than most people assume: a consultation costs from £79, and you don't need your GP's permission to start the process.",
              ],
            },
          ]}
        />
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-leaf-tint px-6 py-10 md:px-10">
        <div>
          <h2 className="headline text-[24px] md:text-[28px]">
            Wondering if you&apos;d <em>qualify?</em>
          </h2>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Three questions, one minute, no email address.
          </p>
        </div>
        <Link href="/eligibility" className="btn-primary">Check eligibility — free</Link>
      </div>
    </article>
  );
}
