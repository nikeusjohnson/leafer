import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How clinic assessments work",
  description:
    "From checking fees and registration to discussing your options with a specialist.",
};

const steps = [
  {
    title: "Check the clinic",
    body: "Find the current regulator entry for the service, read its registration details and ask whether its specialists assess your condition.",
    href: "/guides/checking-a-clinic",
    label: "How to check a clinic",
  },
  {
    title: "Get a written quote",
    body: "Separate your first appointment from ongoing reviews, prescription fees, delivery and medicine. Ask what happens to the assessment fee if the clinician recommends another treatment.",
    href: "/clinics",
    label: "Compare clinic fees",
  },
  {
    title: "Gather the right records",
    body: "Ask which documents the clinician needs. Some clinics request them with your permission, while others ask you to provide copies through a secure channel.",
    href: "/guides/talking-to-your-gp",
    label: "Find your medical records",
  },
  {
    title: "Discuss treatment options",
    body: "The clinician reviews your history, previous treatments and current medicines. Ask what they recommend, what evidence supports it and how they would monitor benefits and side effects.",
    href: "/guides/first-consultation",
    label: "Prepare for your appointment",
  },
  {
    title: "Agree what happens next",
    body: "If medicine is prescribed, confirm how the pharmacy will supply it, when it is due and who to call with questions. If another approach is recommended, ask for a written summary to share with your usual healthcare team.",
    href: "/guides/tolerance-breaks",
    label: "Prepare for a review",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">How it works</p>
      <h1 className="headline mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        From enquiry to assessment
      </h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
        The questions to ask at each stage of a private clinic assessment.
      </p>
      <ol className="mt-10 max-w-4xl divide-y divide-line border-y border-line">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[2.6rem_1fr] gap-3 py-7 md:gap-6"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-tint font-bold text-forest"
            >
              {index + 1}
            </span>
            <div>
              <h2 className="headline text-[25px]">{step.title}</h2>
              <p className="mt-2 max-w-prose2 leading-relaxed text-ink-soft">
                {step.body}
              </p>
              <Link
                className="link-underline mt-3 inline-block font-semibold"
                href={step.href}
              >
                {step.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
