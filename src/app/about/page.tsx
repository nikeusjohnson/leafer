import type { Metadata } from "next";
import ArticleSections from "@/components/ArticleSections";
import { references } from "@/data/guides";

export const metadata: Metadata = {
  title: "About Leafer",
  description:
    "How Leafer compares UK private clinic fees and links them to registration records.",
};

export default function About() {
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">About Leafer</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        A clearer view of clinic costs
      </h1>
      <p className="mt-5 max-w-2xl text-[19px] leading-relaxed text-ink-soft">
        Clinic fees can look similar until you ask what each price covers.
        Leafer brings together published fees and public registration records so
        you can ask better questions before booking.
      </p>
      <div className="mt-10 border-t border-line pt-9">
        <ArticleSections
          sections={[
            {
              heading: "Where the figures come from",
              paragraphs: [
                "Clinic profiles link to the provider’s own fee information. A charge can buy an initial appointment, continuing membership or a particular service. Check the named plan and the terms that apply to you.",
              ],
              sources: [references.fees],
            },
            {
              heading: "What a registration tells you",
              paragraphs: [
                "The regulator’s record identifies the service responsible for care. Check the service name, location, provider and inspection date. Registration and the suitability of a treatment for an individual are separate questions.",
              ],
              sources: [
                {
                  label: "How to check a clinic",
                  href: "/guides/checking-a-clinic",
                },
              ],
            },
            {
              heading: "How Leafer works",
              paragraphs: [
                "Leafer is independent. Clinics do not pay a listing or referral fee. Clinical decisions and bookings are handled by your healthcare provider. If a fee or link has changed, send us the source page so we can check it.",
              ],
              sources: [{ label: "Contact Leafer", href: "/contact" }],
            },
          ]}
        />
      </div>
    </article>
  );
}
