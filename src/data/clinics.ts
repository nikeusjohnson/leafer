export type Clinic = {
  slug: string;
  name: string;
  tag: string;
  score: number;
  bestFor: string;
  initialFeeNum: number;
  inPerson: boolean;
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
  /** Monogram tile colour (placeholder for a clinic logo). */
  color: string;
  /** Trustpilot rating at last check, where available. */
  trustpilot?: { score: number; count: number };
};

export const clinics: Clinic[] = [
  {
    slug: "releaf",
    name: "Releaf",
    tag: "Fully online, subscription-led",
    score: 9.1,
    bestFor: "Keeping monthly costs predictable",
    initialFeeNum: 99.99,
    inPerson: false,
    summary:
      "A fully digital clinic with 60+ specialist doctors, a B Corp certification, and one of the highest patient review scores in the sector.",
    initialFee: "£99.99 initial consultation",
    followUpFee: "Releaf+ subscription from £39.99/month, or pay per appointment",
    monthlyCost: "From around £100–£150 all-in on subscription, rising with dose",
    format: "Online only, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Fibromyalgia", "Sleep disorders"],
    suits: [
      "Patients on a tighter budget who still want a large, licensed clinic",
      "People comfortable managing appointments and prescriptions through an app",
      "Anyone who values a clinic with a strong published review record",
    ],
    drawbacks: [
      "Online-only — no option to see anyone face to face if you'd prefer that",
      "The best-value pricing assumes a monthly subscription, so read the terms",
    ],
    process: [
      "Sign up online and complete the medical questionnaire",
      "Have a video consultation with one of 60+ specialist doctors",
      "Prescription goes to a partner pharmacy and is delivered to your door",
    ],
    verdict:
      "The strongest all-round option for most patients right now: competitive pricing, a big clinical team, and an unusually deep pool of patient reviews. Do the maths on subscription versus pay-as-you-go before deciding.",
    color: "#1E9E6A",
    trustpilot: { score: 4.8, count: 9200 },
  },
  {
    slug: "alternaleaf",
    name: "Alternaleaf",
    tag: "High-volume, low entry price",
    score: 8.8,
    bestFor: "A cheap, quick start",
    initialFeeNum: 29,
    inPerson: false,
    summary:
      "One of the UK's highest-volume clinics, with a £29 pay-as-you-go initial appointment or a £5/month membership, and thousands of patient reviews.",
    initialFee: "£29 pay-as-you-go, or from £5/month membership",
    followUpFee: "Included in membership on some plans; PAYG rates vary",
    monthlyCost: "From around £100–£130 on membership plans, plus medication",
    format: "Online only, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Patients who want the cheapest credible route to a first prescription",
      "People who like a polished, well-organised patient portal",
      "Anyone anxious about the process who wants plenty of structure",
    ],
    drawbacks: [
      "Rated 'Requires Improvement' by the CQC at its September 2025 inspection — worth reading the report before deciding",
      "Membership pricing works out best if you stay long-term — check the commitment",
    ],
    process: [
      "Check eligibility and register online",
      "Video consultation with a specialist",
      "Medication dispensed and delivered, with follow-ups booked through the portal",
    ],
    verdict:
      "Hard to beat on entry price and sheer scale, and the patient review score is genuinely strong. The 2025 CQC rating is the one blemish — read what it actually said rather than assuming the worst.",
    color: "#7C4DBE",
    trustpilot: { score: 4.6, count: 6113 },
  },
  {
    slug: "mamedica",
    name: "Mamedica",
    tag: "Specialist-led, flexible plans",
    score: 8.7,
    bestFor: "Complex conditions",
    initialFeeNum: 49,
    inPerson: false,
    summary:
      "An independent specialist clinic offering Flex (£49), Standard (£150) and transfer (£75) plans — with no clinic fees at all once you've been a patient for nine months.",
    initialFee: "£49 (Flex) or £150 (Standard); £75 if transferring from another clinic",
    followUpFee: "Plan-dependent; no clinic fees after nine months as a patient",
    monthlyCost: "Roughly £120–£300 depending on plan and prescription",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "Epilepsy", "Multiple sclerosis", "Cancer-related symptoms"],
    suits: [
      "Patients with complex or less common conditions",
      "People who need weekend or evening appointments",
      "Anyone planning to stay long-term who likes the fee-free nine-month promise",
    ],
    drawbacks: [
      "The plan structure takes a bit of reading — cheaper up front can cost more per appointment",
      "Medication costs sit on top, as with every clinic",
    ],
    process: [
      "Self-refer online and share your medical history",
      "Attend a specialist video consultation, with weekend slots available",
      "Prescription dispensed by a licensed pharmacy and posted in discreet packaging",
    ],
    verdict:
      "A strong option for anything complex or long-standing, and the 'no clinic fees after nine months' model is genuinely unusual. Compare the Flex and Standard plans carefully for your situation.",
    color: "#2E7DD1",
    trustpilot: { score: 4.6, count: 1777 },
  },
  {
    slug: "curaleaf-clinic",
    name: "Curaleaf Clinic",
    tag: "Formerly Sapphire Medical",
    score: 8.5,
    bestFor: "Clinical pedigree on a budget",
    initialFeeNum: 30,
    inPerson: false,
    summary:
      "The renamed Sapphire Medical Clinics — founded by Dr Mikael Sodergren — now offering £30 pay-as-you-go appointments or a £5/month plan, rated Good by the CQC.",
    initialFee: "£30 pay-as-you-go, or from £5/month",
    followUpFee: "Plan-dependent; PAYG follow-ups priced separately",
    monthlyCost: "Roughly £100–£250 depending on plan and product",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "Anxiety", "PTSD", "Neurological conditions"],
    suits: [
      "Patients who want academic-grade clinical oversight at budget prices",
      "People interested in contributing to UK research via the patient registry",
      "Anyone reassured by a CQC 'Good' rating (February 2025)",
    ],
    drawbacks: [
      "Part of a large international group — the service can feel less personal",
      "Being tied to a producer, it's fair to ask how product choices are made",
    ],
    process: [
      "Register and complete the eligibility questionnaire online",
      "See a specialist by video for assessment",
      "Prescription fulfilled through their pharmacy network and delivered",
    ],
    verdict:
      "A rare combination: serious clinical heritage at some of the lowest prices in the market. If you go with them, it's perfectly reasonable to ask your specialist why a particular product is being recommended.",
    color: "#D94F70",
    trustpilot: { score: 4.3, count: 2674 },
  },
  {
    slug: "sapphire-medical",
    name: "Sapphire Medical Clinics",
    tag: "Now operating as Curaleaf Clinic",
    score: 8.4,
    bestFor: "Clinical rigour",
    initialFeeNum: 30,
    inPerson: false,
    summary:
      "Important update: Sapphire Medical Clinics has been renamed and now operates as Curaleaf Clinic. The research-led team and UK Medical Cannabis Registry work continue under the new name.",
    initialFee: "Now £30 pay-as-you-go under the Curaleaf Clinic name",
    followUpFee: "Plan-dependent; see Curaleaf Clinic pricing",
    monthlyCost: "Roughly £100–£250 depending on plan and product",
    format: "Online consultations, UK-wide",
    conditions: ["Epilepsy", "Tourette syndrome", "Chronic pain", "PTSD"],
    suits: [
      "Patients who came looking for Sapphire specifically — it's now Curaleaf Clinic",
      "People who value the registry research heritage",
      "Anyone with a neurological condition seeking deep specialist expertise",
    ],
    drawbacks: [
      "The name change has caused genuine confusion — check you're on the current Curaleaf Clinic site",
      "Older pricing and reviews under the Sapphire name no longer reflect the service",
    ],
    process: [
      "Register via the Curaleaf Clinic website (the Sapphire site redirects)",
      "Attend a specialist video assessment",
      "With your consent, follow-ups feed into the UK Medical Cannabis Registry",
    ],
    verdict:
      "If you were recommended Sapphire, you haven't been misled — it's the same organisation under its new name. Read our Curaleaf Clinic review for current pricing and what to expect.",
    color: "#4A5BC9",
    trustpilot: { score: 4.3, count: 2674 },
  },
  {
    slug: "lyphe",
    name: "Lyphe Clinic",
    tag: "One of the most established",
    score: 8.3,
    bestFor: "A safe all-round choice",
    initialFeeNum: 49,
    inPerson: false,
    summary:
      "One of the UK's longest-running medical cannabis clinics, with a £49 initial consultation or a £19.99/month membership model, and nationwide video appointments.",
    initialFee: "£49 initial consultation, or from £19.99/month membership",
    followUpFee: "Membership includes follow-ups; PAYG rates on top otherwise",
    monthlyCost: "Roughly £120–£280 depending on plan, product and dose",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Multiple sclerosis"],
    suits: [
      "Patients who want an established clinic with a long track record",
      "People who'd like a choice of specialists across several conditions",
      "Anyone weighing a simple membership against per-appointment fees",
    ],
    drawbacks: [
      "Appointment availability can vary by specialist, so popular doctors book up",
      "The membership only pays off if you use it — light users may be better on PAYG elsewhere",
    ],
    process: [
      "Register online and upload or authorise access to your medical records",
      "Book a video consultation with a specialist matched to your condition",
      "If prescribed, your medication is dispensed by a partner pharmacy and posted to you",
    ],
    verdict:
      "A sensible, experienced option with pricing that's become much more competitive. A safe middle-of-the-road choice rather than the cheapest or the flashiest.",
    color: "#0E8A8A",
  },
  {
    slug: "zerenia",
    name: "Zerenia Clinic",
    tag: "Large clinic network",
    score: 7.9,
    bestFor: "In-person appointments",
    initialFeeNum: 99,
    inPerson: true,
    summary:
      "One of the UK's larger clinic networks with self-referral and multiple locations — though patient-tracking services report it may not be accepting new patients at present. Check first.",
    initialFee: "From £99 — confirm current availability before applying",
    followUpFee: "Around £50–£70",
    monthlyCost: "Roughly £120–£300 depending on product",
    format: "Online plus some physical locations",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Existing patients checking what changed",
      "People who'd like the option of an in-person appointment (if accepting)",
      "Anyone comparing the bigger networks side by side",
    ],
    drawbacks: [
      "Reports suggest new-patient intake is paused or restricted — verify directly before paying anything",
      "Physical locations are concentrated in certain cities — check before assuming",
    ],
    process: [
      "Check the clinic's current intake status on its website before registering",
      "If accepting, self-refer online and provide your medical history",
      "Prescription sent to a partner pharmacy for home delivery",
    ],
    verdict:
      "Historically a practical all-rounder, especially for in-person appointments — but we can't recommend it as a first choice while its new-patient status is unclear. Contact them directly before committing.",
    color: "#B0782A",
  },
  {
    slug: "tmcc",
    name: "The Medical Cannabis Clinics (TMCC)",
    tag: "Early UK prescriber",
    score: 7.8,
    bestFor: "An experienced team",
    initialFeeNum: 149,
    inPerson: false,
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
      "Initial consultation now sits well above the market average of around £50",
      "Fewer budget options than the subscription-led clinics",
    ],
    process: [
      "Enquire online and share access to your medical records",
      "Specialist-led assessment by video",
      "Prescription dispensed by a licensed pharmacy and delivered",
    ],
    verdict:
      "An experienced, credible clinic with prices to match. Given how far competitors' fees have fallen, it's now mainly for patients who specifically value that early-pioneer pedigree.",
    color: "#5B8C3E",
  },
  {
    slug: "cb1-medical",
    name: "CB1 Medical",
    tag: "Leicester-based, veteran-friendly",
    score: 8.2,
    bestFor: "Free follow-ups",
    initialFeeNum: 50,
    inPerson: true,
    summary:
      "A Leicester-based clinic charging £50 for the initial consultation, with follow-up consultations free thereafter — and free care for eligible veterans.",
    initialFee: "£50 initial consultation; follow-up consultations free",
    followUpFee: "£0 — follow-ups included",
    monthlyCost: "Medication costs only after the first appointment, plus prescription fees",
    format: "Online UK-wide, plus in-person in Leicester",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Veterans — eligible patients can be treated free of charge",
      "Patients who hate the idea of paying for every check-in",
      "Anyone in the Midlands wanting a face-to-face option",
    ],
    drawbacks: [
      "Its Trustpilot score (3.6) sits well below the market leaders — read the reviews to see why",
      "Smaller team, so appointment choice is narrower than the big online clinics",
    ],
    process: [
      "Register online or by phone and share your medical records",
      "Attend an initial consultation, online or in Leicester",
      "Follow-ups are free; prescriptions dispensed by a partner pharmacy",
    ],
    verdict:
      "The free-follow-ups model is genuinely patient-friendly and the veterans' scheme is laudable. But the mediocre review score deserves your attention — read recent reviews before deciding.",
    color: "#3E6FB0",
    trustpilot: { score: 3.6, count: 319 },
  },
  {
    slug: "medicann",
    name: "Medicann",
    tag: "Zero consultation fees",
    score: 8.0,
    bestFor: "The cheapest possible start",
    initialFeeNum: 0,
    inPerson: false,
    summary:
      "The only UK clinic advertising £0 consultations — you pay for your medication and a £4.99 delivery charge, rather than for the doctor's time.",
    initialFee: "£0 — consultations are free",
    followUpFee: "£0",
    monthlyCost: "Medication plus £4.99 delivery per prescription",
    format: "Online consultations, UK-wide",
    conditions: ["Chronic pain", "Anxiety", "PTSD", "Sleep disorders"],
    suits: [
      "Patients for whom the consultation fee is the main barrier",
      "People who want to try the process with minimal financial risk",
      "Anyone happy with a straightforward, no-frills service",
    ],
    drawbacks: [
      "A newer, smaller clinic — less of a track record to judge by",
      "Free consultations mean revenue comes from medication — ask how products are chosen",
    ],
    process: [
      "Sign up online and complete the eligibility questionnaire",
      "Free video consultation with a specialist",
      "Medication posted for a flat £4.99 delivery fee",
    ],
    verdict:
      "A genuinely different model, and for some patients the right one. As with any clinic where the consultation is free, it's fair to ask how it makes money and how product recommendations are made.",
    color: "#C2552F",
  },
  {
    slug: "integro-clinics",
    name: "Integro Clinics",
    tag: "£0 consultations, flat prescription fee",
    score: 7.9,
    bestFor: "Transparent flat fees",
    initialFeeNum: 0,
    inPerson: false,
    summary:
      "A nurse-led clinic charging nothing for consultations and a flat £4.99 per prescription. Note: it only accepts patients aged 21 and over.",
    initialFee: "£0 — consultations are free",
    followUpFee: "£0; £4.99 flat fee per prescription",
    monthlyCost: "Medication plus £4.99 per prescription",
    format: "Online consultations, UK-wide (21+ only)",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Cancer-related symptoms"],
    suits: [
      "Patients aged 21+ who want zero consultation costs",
      "People who value a simple, flat-fee pricing structure",
      "Anyone who prefers a nurse-led care model",
    ],
    drawbacks: [
      "Strictly 21 and over — younger eligible patients must look elsewhere",
      "Smaller operation with fewer published reviews than the big names",
    ],
    process: [
      "Register online and confirm you're 21 or over",
      "Free consultation with the clinical team",
      "Pay £4.99 per prescription, with medication delivered",
    ],
    verdict:
      "One of the simplest pricing models in the market, and hard to fault on cost. The 21+ rule and smaller scale are the main limitations.",
    color: "#1F7A5C",
  },
  {
    slug: "myaccess-clinics",
    name: "MyAccess Clinics",
    tag: "Bristol-based, straightforward pricing",
    score: 7.8,
    bestFor: "Free repeat prescriptions",
    initialFeeNum: 79,
    inPerson: true,
    summary:
      "A Bristol clinic with plain pricing: £79 initial consultation, £50 follow-ups, and repeat prescriptions issued free between appointments.",
    initialFee: "£79 initial consultation",
    followUpFee: "£50; repeat prescriptions free between follow-ups",
    monthlyCost: "Roughly £120–£280 depending on medication and dose",
    format: "Online UK-wide, plus in-person in Bristol",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Neurological conditions"],
    suits: [
      "Patients in the South West wanting a face-to-face option",
      "People who like knowing exactly what each step costs",
      "Anyone who'd rather not juggle a subscription",
    ],
    drawbacks: [
      "No subscription discounts for long-term patients",
      "Fewer specialists than the large national clinics",
    ],
    process: [
      "Enquire online and provide access to your medical records",
      "Attend an initial consultation in Bristol or by video",
      "Repeat prescriptions issued free between scheduled follow-ups",
    ],
    verdict:
      "A refreshingly plain price list with no gotchas, and a good option if you're near Bristol. National patients on a budget may still do better with a subscription clinic.",
    color: "#8A5BA8",
  },
  {
    slug: "elios-clinic",
    name: "Elios Clinic",
    tag: "Midlands coverage",
    score: 7.6,
    bestFor: "A regional, in-person option",
    initialFeeNum: 50,
    inPerson: true,
    summary:
      "A Birmingham clinic offering £50 initial consultations, giving Midlands patients a local alternative to the online-only national services.",
    initialFee: "£50 initial consultation",
    followUpFee: "Around £50",
    monthlyCost: "Roughly £120–£280 depending on prescription",
    format: "In-person in Birmingham, online elsewhere",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Sleep disorders"],
    suits: [
      "Midlands patients who prefer to see a doctor in person",
      "People who'd rather support a regional clinic than a national chain",
      "Anyone wanting mid-market pricing with a physical location",
    ],
    drawbacks: [
      "Limited track record and few published reviews compared with established clinics",
      "Less useful if you live outside the Midlands and want face-to-face care",
    ],
    process: [
      "Register online and share your medical history",
      "Attend a consultation in Birmingham or by video",
      "Prescription dispensed by a partner pharmacy and delivered",
    ],
    verdict:
      "A reasonable regional choice if you're local and value meeting your clinician. Otherwise, the bigger clinics currently offer more for similar money.",
    color: "#2FA3A0",
  },
  {
    slug: "cantourage-clinic",
    name: "Cantourage Clinic",
    tag: "London-based, veterans' scheme",
    score: 7.5,
    bestFor: "London patients",
    initialFeeNum: 89.1,
    inPerson: true,
    summary:
      "A London clinic with an £89.10 sign-up fee, consultations from £26.10 to £66.60, and a dedicated scheme supporting veterans.",
    initialFee: "£89.10 sign-up, then consultations £26.10–£66.60",
    followUpFee: "£26.10–£66.60 depending on appointment type",
    monthlyCost: "Roughly £130–£300 depending on prescription",
    format: "In-person in London, online UK-wide",
    conditions: ["Chronic pain", "PTSD", "Anxiety", "Cancer-related symptoms"],
    suits: [
      "London-based patients who want a local, in-person clinic",
      "Veterans looking for a clinic with a dedicated support scheme",
      "People who like itemised, pay-for-what-you-use pricing",
    ],
    drawbacks: [
      "The fee list is fiddly — sign-up plus per-appointment charges take some adding up",
      "Part of a German pharmaceutical group — a newer name in UK patient care",
    ],
    process: [
      "Sign up online and pay the registration fee",
      "Attend a consultation in London or by video",
      "Prescription dispensed and delivered, or collectable locally",
    ],
    verdict:
      "A decent London option with fair per-appointment pricing and a genuine veterans' scheme. Add up the sign-up fee plus your likely appointments before comparing it to flat-fee rivals.",
    color: "#B0483E",
  },
];

export function getClinic(slug: string) {
  return clinics.find((c) => c.slug === slug);
}
