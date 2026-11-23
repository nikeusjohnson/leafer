import type { Metadata } from "next";
import ArticleSections from "@/components/ArticleSections";
import { references } from "@/data/guides";

export const metadata: Metadata = {
  title: "UK medical cannabis law",
  description:
    "Specialist prescribing, evidence of a prescription and the rules on driving and travel.",
};

export default function UkLaw() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">UK law</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        Medical cannabis and the law
      </h1>
      <p className="mt-5 max-w-2xl text-[19px] leading-relaxed text-ink-soft">
        UK law provides a route to prescribed cannabis-based medicines. There
        are separate rules for possession, driving and taking a medicine across
        a border.
      </p>
      <div className="mt-10 border-t border-line pt-9">
        <ArticleSections
          sections={[
            {
              heading: "Who can prescribe?",
              paragraphs: [
                "Changes in 2018 allowed certain cannabis-based medicines to be prescribed under controlled conditions. For an unlicensed cannabis-based medicinal product, treatment must be initiated by a doctor on the GMC Specialist Register. The clinical decision takes account of your circumstances and other treatment options.",
              ],
              sources: [
                references.law,
                {
                  label: "Northern Ireland guidance",
                  href: "https://www.nidirect.gov.uk/articles/medicinal-cannabis",
                },
              ],
            },
            {
              heading: "What evidence should I carry?",
              paragraphs: [
                "The NHS advises keeping medicine in its original, labelled packaging, along with a copy of your prescription and any letter from the prescriber. You may need identification matching the label. A prescription is personal to the patient. Recreational possession remains illegal.",
              ],
              sources: [references.nhs],
            },
            {
              heading: "What about driving and travel?",
              paragraphs: [
                "Driving while impaired by a medicine is illegal. For an overseas trip, check with the destination and transit countries before taking controlled medicines across their borders.",
              ],
              sources: [references.driving, references.travel],
            },
          ]}
        />
      </div>
    </article>
  );
}
