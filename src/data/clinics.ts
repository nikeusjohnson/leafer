export type Clinic = {
  slug: string;
  name: string;
  tag: string;
  score: number;
  bestFor: string;
  summary: string;
  initialFee: string;
  followUpFee: string;
  monthlyCost: string;
  format: string;
  conditions: string[];
  suits: string[];
  drawbacks: string[];
  process: string[];
  verdict: string;
};

export const clinics: Clinic[] = [
  {
    slug: "lyphe",
    name: "Lyphe Clinic",
    tag: "One of the most established",
    score: 8.8,
    bestFor: "A safe all-round choice",
    summary:
      "One of the UK's longest-running medical cannabis clinics, with nationwide video consultations and a broad network of GMC-registered specialists.",
    initialFee: "From £99",
    followUpFee: "Around £50–£75",
    monthlyCost: "Roughly £150–£300 depending on product and dose",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Multiple sclerosis"],
    suits: [
      "Patients who want an established clinic with a long track record",
      "People who'd like a choice of specialists across several conditions",
      "Anyone who prefers a straightforward online booking process",
    ],
    drawbacks: [
      "Follow-up fees add to the yearly total — worth adding up before you commit",
      "Appointment availability can vary by specialist, so popular doctors book up",
    ],
    process: [
      "Register online and upload or authorise access to your medical records",
      "Book a video consultation with a specialist matched to your condition",
      "If prescribed, your medication is dispensed by a partner pharmacy and posted to you",
    ],
    verdict:
      "A sensible starting point for most patients: established, broadly priced in line with the market, and used to handling common conditions like chronic pain and PTSD.",
  },
  {
    slug: "releaf",
    name: "Releaf",
    tag: "Fully online, app-based",
    score: 9.1,
    bestFor: "Keeping costs down",
    summary:
      "A fully digital clinic with some of the lowest advertised initial consultation fees in the UK, run largely through its own app.",
    initialFee: "From £79",
    followUpFee: "Subscription-style plans available",
    monthlyCost: "From around £100 on some plans, rising with dose",
    format: "Online only, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Fibromyalgia", "Sleep disorders"],
    suits: [
      "Patients on a tighter budget who still want a licensed clinic",
      "People comfortable managing appointments and prescriptions through an app",
      "Anyone who wants to get started quickly without phone calls",
    ],
    drawbacks: [
      "Online-only — no option to see anyone face to face if you'd prefer that",
      "The lowest advertised prices usually depend on a subscription, so read the terms",
    ],
    process: [
      "Sign up in the app and complete the medical questionnaire",
      "Have a video consultation with a specialist",
      "Prescription goes to a partner pharmacy and is delivered to your door",
    ],
    verdict:
      "Worth a look if cost is your main concern and you're happy with an app-first service. Do the maths on subscription versus pay-as-you-go before deciding.",
  },
  {
    slug: "mamedica",
    name: "Mamedica",
    tag: "Specialist-led",
    score: 8.7,
    bestFor: "Complex conditions",
    summary:
      "An independent specialist clinic with a focus on complex and treatment-resistant conditions, offering appointments seven days a week.",
    initialFee: "From £95",
    followUpFee: "Around £60–£75",
    monthlyCost: "Roughly £150–£350 depending on prescription",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "Epilepsy", "Multiple sclerosis", "Cancer-related symptoms"],
    suits: [
      "Patients with complex or less common conditions",
      "People who need weekend or evening appointments",
      "Anyone who has struggled to be taken seriously elsewhere",
    ],
    drawbacks: [
      "Slightly pricier follow-ups than the budget clinics",
      "As with most clinics, repeat prescription fees sit on top of consultations",
    ],
    process: [
      "Self-refer online and share your medical history",
      "Attend a specialist video consultation, with weekend slots available",
      "Prescription dispensed by a licensed pharmacy and posted in discreet packaging",
    ],
    verdict:
      "A strong option for anything complex or long-standing. The seven-day appointment availability is genuinely useful if you work irregular hours.",
  },
  {
    slug: "curaleaf-clinic",
    name: "Curaleaf Clinic",
    tag: "Part of an international group",
    score: 8.3,
    bestFor: "Product choice",
    summary:
      "The UK prescribing arm of a large international cannabis company, with a structured patient pathway and a wide range of licensed products.",
    initialFee: "From £100",
    followUpFee: "Around £50–£70",
    monthlyCost: "Roughly £120–£300 depending on product",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "Anxiety", "PTSD", "Neurological conditions"],
    suits: [
      "Patients who value a structured, well-documented treatment pathway",
      "People interested in a wider choice of products and formats",
      "Anyone reassured by a larger organisation behind the clinic",
    ],
    drawbacks: [
      "Being part of a producer group, it's fair to ask how product choices are made",
      "Larger organisations can sometimes feel less personal",
    ],
    process: [
      "Register and complete the eligibility questionnaire online",
      "See a specialist by video for assessment",
      "Prescription fulfilled through their pharmacy network and delivered",
    ],
    verdict:
      "A solid, structured service. If you go with them, it's perfectly reasonable to ask your specialist why a particular product is being recommended.",
  },
  {
    slug: "sapphire-medical",
    name: "Sapphire Medical Clinics",
    tag: "Research-focused",
    score: 8.5,
    bestFor: "Clinical rigour",
    summary:
      "A clinically rigorous clinic that runs the UK Medical Cannabis Registry, with specialists from strong academic and NHS backgrounds.",
    initialFee: "From £150",
    followUpFee: "Around £75",
    monthlyCost: "Roughly £150–£350 depending on prescription",
    format: "Online and some in-person appointments",
    conditions: ["Epilepsy", "Tourette syndrome", "Chronic pain", "PTSD"],
    suits: [
      "Patients who want a particularly thorough clinical assessment",
      "People interested in contributing to UK research through the registry",
      "Anyone with a neurological condition seeking deep specialist expertise",
    ],
    drawbacks: [
      "Among the more expensive options for the initial consultation",
      "The rigorous approach can mean a slower first appointment process",
    ],
    process: [
      "Apply online with consent to access your medical records",
      "Attend a detailed specialist assessment",
      "If prescribed, follow-ups feed into the UK Medical Cannabis Registry with your consent",
    ],
    verdict:
      "The priciest of the mainstream options, but arguably the most academically rigorous. A good fit if you want belt-and-braces assessment.",
  },
  {
    slug: "alternaleaf",
    name: "Alternaleaf",
    tag: "Patient-experience focused",
    score: 8.6,
    bestFor: "A smooth first experience",
    summary:
      "Formerly Integro Medical Clinics, now an online-only service with clear pricing and an emphasis on patient experience.",
    initialFee: "From £99",
    followUpFee: "Membership-style pricing available",
    monthlyCost: "From around £120 on membership plans",
    format: "Online only, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Patients who value clear, upfront pricing",
      "People who like a polished, well-organised patient portal",
      "Anyone anxious about the process who wants plenty of hand-holding",
    ],
    drawbacks: [
      "Online-only, with no physical locations",
      "Membership pricing works out best if you stay long-term — check the commitment",
    ],
    process: [
      "Check eligibility and register online",
      "Video consultation with a specialist",
      "Medication dispensed and delivered, with follow-ups booked through the portal",
    ],
    verdict:
      "A well-run, patient-friendly service with transparent pricing. Compare the membership maths against pay-per-appointment clinics before signing up.",
  },
  {
    slug: "zerenia",
    name: "Zerenia Clinic",
    tag: "Large clinic network",
    score: 8.4,
    bestFor: "In-person appointments",
    summary:
      "One of the UK's larger medical cannabis clinic networks, with self-referral, multiple locations and broad condition coverage.",
    initialFee: "From £99",
    followUpFee: "Around £50–£70",
    monthlyCost: "Roughly £120–£300 depending on product",
    format: "Online plus some physical locations",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Patients who'd like the option of an in-person appointment",
      "People who want to self-refer without GP involvement at the first step",
      "Anyone looking for competitive pricing from a larger network",
    ],
    drawbacks: [
      "Physical locations are concentrated in certain cities — check before assuming",
      "Larger networks can mean you see different clinicians between appointments",
    ],
    process: [
      "Self-refer through the website and provide your medical history",
      "Attend an online or in-person consultation",
      "Prescription sent to a partner pharmacy for home delivery",
    ],
    verdict:
      "A practical all-rounder, especially if the option of seeing someone in person matters to you. Confirm whether your nearest location actually offers face-to-face appointments.",
  },
  {
    slug: "tmcc",
    name: "The Medical Cannabis Clinics (TMCC)",
    tag: "Early UK prescriber",
    score: 8.0,
    bestFor: "An experienced team",
    summary:
      "One of the UK's first licensed cannabis prescribers, with specialist-led assessments and a focus on chronic pain and PTSD.",
    initialFee: "From £149",
    followUpFee: "Around £75",
    monthlyCost: "Roughly £150–£350 depending on prescription",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Neurological conditions", "Cancer-related symptoms"],
    suits: [
      "Patients who want a clinic that's been prescribing since the early days",
      "People with chronic pain or PTSD as their primary condition",
      "Anyone who values continuity with an experienced specialist team",
    ],
    drawbacks: [
      "Initial consultation sits at the higher end of the market",
      "Fewer budget options than the subscription-led clinics",
    ],
    process: [
      "Enquire online and share access to your medical records",
      "Specialist-led assessment by video",
      "Prescription dispensed by a licensed pharmacy and delivered",
    ],
    verdict:
      "An experienced, credible clinic with prices to match. If budget matters more than pedigree, compare it against the cheaper options first.",
  },
];

export function getClinic(slug: string) {
  return clinics.find((c) => c.slug === slug);
}
