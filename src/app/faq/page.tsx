import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Patient questions",
  description:
    "Answers on fees, clinic registration and specialist appointments, with sources for further reading.",
};
export default function FaqPage() {
  return (
    <section className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Patient questions</p>
        <h1 className="headline mt-4 text-[40px] leading-[1.05] md:text-[56px]">
          Frequently asked questions
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
          Find answers about clinic fees, registration and what happens before
          an appointment.
        </p>
        <div className="mt-9">
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
