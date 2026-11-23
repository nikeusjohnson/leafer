import type { Faq } from "@/components/FaqList";
import { references } from "@/data/guides";

export const faqs: Faq[] = [
  {
    q: "What does the clinic price cover?",
    a: "Check which service the figure buys. An assessment, a repeat prescription and a month of membership are different charges. Medicine and delivery may be charged separately. Each clinic profile links to its published terms.",
    source: references.fees,
  },
  {
    q: "How do I check a clinic is registered?",
    a: "Match the service name and address to its current entry on the relevant healthcare regulator’s website. You can look up a named specialist separately on the GMC register.",
    source: {
      label: "Guide to checking registration",
      href: "/guides/checking-a-clinic",
    },
  },
  {
    q: "Can I get medical cannabis on the NHS?",
    a: "In England, the NHS describes limited use for some rare epilepsies, muscle spasticity in multiple sclerosis, and chemotherapy-related nausea or vomiting. A specialist considers the specific medicine, previous treatments and individual circumstances.",
    source: references.nhs,
  },
  {
    q: "Does paying for a consultation guarantee a prescription?",
    a: "The fee pays for an assessment. The clinician reviews your records and other options before deciding whether treatment is appropriate. Check the clinic’s refund policy before booking.",
    source: references.nice,
  },
  {
    q: "What should I prepare before an appointment?",
    a: "Ask which medical records the clinic needs and how to send them securely. Have your current medicine list, previous treatment history and questions ready.",
    source: {
      label: "Preparing for a first appointment",
      href: "/guides/first-consultation",
    },
  },
  {
    q: "Is prescribed medical cannabis legal?",
    a: "There is a legal route for specialist prescribing of certain cannabis-based products. Keep your labelled packaging, a copy of your prescription and any letter from your doctor to help demonstrate the medicine was prescribed to you.",
    source: references.nhs,
  },
  {
    q: "Will my GP be told?",
    a: "Ask the clinic which records it needs, what it plans to share with your GP and who is responsible for ongoing reviews. You can ask for a copy of the appointment summary.",
    source: {
      label: "Getting the right medical records",
      href: "/guides/talking-to-your-gp",
    },
  },
  {
    q: "Can I drive while taking a prescription?",
    a: "Driving while impaired is illegal. Ask your prescriber or pharmacist about your medicine and check the law for the UK nation in which you drive.",
    source: references.driving,
  },
  {
    q: "Can I travel overseas with my medicine?",
    a: "Contact the embassy of each destination and transit country before travelling. Each jurisdiction sets its own rules on controlled medicines. A clinic letter may be just one part of the paperwork.",
    source: references.travel,
  },
  {
    q: "How is shop-bought CBD different?",
    a: "Some CBD products are sold as food supplements, and their contents and effects can vary. Tell your pharmacist or prescriber about these products so they can check for interactions.",
    source: references.nhs,
  },
  {
    q: "Does Leafer provide medical appointments?",
    a: "Leafer is an independent information and comparison website. Book appointments directly with the clinic and discuss personal treatment decisions with your clinician.",
    source: { label: "About Leafer", href: "/about" },
  },
];
