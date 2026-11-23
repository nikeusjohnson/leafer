import type { Section } from "@/components/ArticleSections";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  readTime: string;
  intro: string;
  sections: Section[];
};

export const guides: Guide[] = [
  {
    slug: "costs",
    title: "What does medical cannabis actually cost?",
    description:
      "Consultation fees, prescription costs and the yearly total — with honest ways to keep it down.",
    kicker: "Cost & pricing",
    readTime: "6 min read",
    intro:
      "Nobody likes vague pricing, so here's the honest picture: private medical cannabis in the UK typically costs somewhere between £1,500 and £4,000 a year all-in. Where you land in that range depends on your clinic, your dose, and the products you're prescribed.",
    sections: [
      {
        heading: "The costs, broken down",
        bullets: [
          "Initial consultation: £79–£200 depending on the clinic (a few boutique clinics charge more)",
          "Follow-up appointments: £50–£75 each, usually every 1–3 months at first, then less often",
          "Medication: roughly £100–£400 a month, depending on product type (oil, flower, capsules) and dose",
          "Prescription and dispensing fees: some clinics include these, others charge £10–£30 per prescription",
        ],
      },
      {
        heading: "What a typical year looks like",
        paragraphs: [
          "In year one, expect an initial consultation (£79–£200), three or four follow-ups (£150–£300), and twelve months of medication. A moderate oil prescription might run £150 a month; a heavier flower prescription could be double that.",
          "That puts a realistic first-year total between about £1,500 for a careful budget setup and £4,000 or more at the higher end. Year two is usually cheaper, as follow-ups become less frequent.",
        ],
        callout:
          "Before committing to a clinic, ask for their full fee schedule in writing — consultation fees, follow-ups, prescription fees, and any subscription terms. A reputable clinic will give you this without fuss.",
      },
      {
        heading: "Ways to keep costs down",
        bullets: [
          "Compare clinics before registering — initial fees alone vary by £100 or more",
          "Ask about subscription or membership pricing, but do the yearly maths before signing up",
          "Oils are often cheaper per dose than flower, though they're not interchangeable clinically",
          "Ask whether your dose can be reviewed downward once your symptoms are stable",
          "Check whether the clinic charges for repeat prescriptions or letters",
        ],
      },
      {
        heading: "Is it ever available on the NHS?",
        paragraphs: [
          "Technically yes, practically almost never. NHS prescriptions for cannabis-based medicines are vanishingly rare outside a few specific epilepsy syndromes. For the overwhelming majority of patients, private is the only realistic route — which is exactly why understanding the costs matters.",
        ],
      },
    ],
  },
  {
    slug: "first-consultation",
    title: "Your first consultation: what to expect",
    description:
      "What the specialist will ask, what records to prepare, and how to get the most from 30 minutes.",
    kicker: "Consultations",
    readTime: "5 min read",
    intro:
      "A first consultation usually lasts 20 to 45 minutes and happens over video. It's a proper medical appointment, not a formality — but there's no reason to be nervous if you come prepared.",
    sections: [
      {
        heading: "Before the appointment",
        paragraphs: [
          "The clinic will ask for access to your medical records. Usually that means either a summary care record from your GP or clinic-requested records with your consent. Some clinics handle the whole thing; others ask you to request a copy yourself. Either way, start this early — GP surgeries can take a week or two.",
        ],
        bullets: [
          "Gather a list of everything you currently take, including doses",
          "Note down the treatments you've already tried and what happened",
          "Write a short, honest summary of how your condition affects your daily life",
          "Think about what you'd want treatment to achieve — better sleep, less pain, fewer attacks",
        ],
      },
      {
        heading: "During the appointment",
        paragraphs: [
          "The specialist will go through your history, your diagnosis, and your previous treatments. They'll ask about your symptoms in detail and about anything that might make cannabis-based medicines unsuitable — a history of psychosis, certain heart conditions, pregnancy, or problematic substance use.",
          "If they think treatment is appropriate, they'll explain the options — typically starting with a low dose — and a multidisciplinary team at the clinic confirms the prescription. If they don't think it's right for you, a good clinic will say so plainly rather than sell you false hope.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "If prescribed, your prescription goes to a licensed pharmacy, which dispenses and delivers it — usually within two to five working days. You'll have a follow-up booked, typically within a month, to see how you're getting on and adjust the dose if needed.",
          "Your clinic will normally write to your GP to keep your records straight. That's good practice, not something to worry about.",
        ],
        callout:
          "You're allowed to ask anything. 'Why this product?', 'What side effects should I expect?', 'What's the total monthly cost?' — a good specialist will welcome the questions.",
      },
    ],
  },
  {
    slug: "driving",
    title: "Driving and medical cannabis: the honest picture",
    description:
      "What UK drug-driving law actually says, the medical defence, and why caution is still the sensible default.",
    kicker: "Legal & driving",
    readTime: "5 min read",
    intro:
      "This is one of the most misunderstood areas of UK medical cannabis law, so let's be direct: having a prescription is not a free pass to drive with THC in your system. Here's how it actually works.",
    sections: [
      {
        heading: "What the law says",
        paragraphs: [
          "UK drug-driving law sets a blood threshold of 2 micrograms of THC per litre. It's an offence to drive over that limit — but there is a statutory medical defence if you're taking the medicine as prescribed and your driving isn't impaired.",
          "In practice: the medical defence exists, but you'd be relying on it after being stopped, tested, and possibly charged. It's a defence in court, not a shield at the roadside.",
        ],
        callout:
          "THC can stay detectable in blood long after any impairing effect has worn off — sometimes for days with regular use. You could feel completely fine and still test over the limit.",
      },
      {
        heading: "The sensible approach",
        bullets: [
          "Never drive while you feel any effects — drowsiness, slower reactions, altered perception",
          "Talk to your prescribing specialist about driving before you start treatment",
          "Carry evidence of your prescription: the dispensing label on your medication and any clinic letter",
          "Be aware that a roadside saliva test can show positive days after your last dose",
          "Consider avoiding driving on days you medicate, especially early in treatment",
        ],
      },
      {
        heading: "Insurance and your licence",
        paragraphs: [
          "You should tell your insurer about your prescription — failing to disclose a medical condition or medication could invalidate your policy. You don't automatically need to inform the DVLA unless your condition itself is notifiable, but your specialist can advise on your specific situation.",
        ],
      },
    ],
  },
  {
    slug: "travelling",
    title: "Travelling with a medical cannabis prescription",
    description:
      "Flying abroad, the Schengen certificate, and why 'it's prescribed' doesn't travel well.",
    kicker: "Travel",
    readTime: "4 min read",
    intro:
      "Here's the uncomfortable truth: your UK prescription is valid in the UK. Many countries treat cannabis as an illegal drug regardless of your paperwork, and some impose severe penalties. Travelling with medical cannabis takes planning — and sometimes the honest answer is 'don't'.",
    sections: [
      {
        heading: "Within the UK",
        paragraphs: [
          "Travelling domestically with your prescribed medication is fine. Keep it in its original pharmacy packaging with the dispensing label, and carry a copy of your prescription or clinic letter. That applies to trains, domestic flights, and driving (see our driving guide for the THC rules).",
        ],
      },
      {
        heading: "Travelling abroad",
        paragraphs: [
          "Every country sets its own rules, and most don't recognise foreign cannabis prescriptions. Within the Schengen area, a Schengen certificate from the prescriber can allow you to carry certain controlled medicines — but it doesn't cover every product, and several Schengen countries ban THC outright regardless.",
          "Outside Europe the picture gets riskier. Some countries treat any cannabis possession as a serious criminal offence. Contact the embassy of your destination before you travel, get their answer in writing, and check the rules for any country you're transiting through.",
        ],
        callout:
          "CBD products are not the safe fallback people assume. Some countries ban CBD entirely, and products legally sold in the UK can contain trace THC above other countries' limits.",
      },
      {
        heading: "Practical options",
        bullets: [
          "Ask your clinic whether a treatment break or alternative medication is sensible for the trip",
          "If travel with medication is essential, start the paperwork at least a month ahead",
          "Carry original packaging, dispensing labels, a clinic letter, and any required certificates",
          "Never put cannabis-based medicine in checked luggage without confirming airline and destination rules",
        ],
      },
    ],
  },
  {
    slug: "flower-vs-oil",
    title: "Flower vs oil: what's the difference?",
    description:
      "The two main prescription formats, how they differ in practice, and what specialists consider.",
    kicker: "Products",
    readTime: "5 min read",
    intro:
      "UK medical cannabis prescriptions come mainly in two forms: dried flower for vaporisation, and oils taken under the tongue. Neither is 'better' — they do different jobs, and many patients end up prescribed a combination.",
    sections: [
      {
        heading: "Oils",
        paragraphs: [
          "Cannabis oils are taken with a dropper under the tongue and absorbed slowly. Effects take 30 minutes to two hours to arrive and can last six hours or more. That makes oils well suited to steady, all-day symptom control — and to precise dosing, since every drop is measured.",
          "The slow onset is also the main downside: oils can't help much with sudden breakthrough symptoms, and it's easy to take more too soon because 'nothing's happening yet'.",
        ],
      },
      {
        heading: "Flower",
        paragraphs: [
          "Prescription flower is vaporised — never smoked. Smoking remains illegal and clinics are explicit about it; a dry-herb vaporiser heats the flower enough to release cannabinoids without burning. Effects arrive within minutes and last one to three hours, which suits breakthrough pain, sudden nausea, or getting to sleep.",
          "Flower tends to cost more per month than oil, dosing is less precise, and you'll need to buy a vaporiser (typically £50–£300). Some clinics also place limits on monthly flower quantities.",
        ],
      },
      {
        heading: "How specialists decide",
        bullets: [
          "Your symptoms: steady background control (oil) versus fast relief (flower), or both",
          "Your experience: complete beginners are often started on oil for dosing precision",
          "Your lifestyle: vaporising at work or in shared housing isn't always practical",
          "Cost: oils usually work out cheaper per month at equivalent symptom control",
        ],
      },
      {
        heading: "A note on strength",
        paragraphs: [
          "Products vary enormously in THC and CBD content, and higher is not better. Most specialists start patients on low-THC or balanced products and adjust from there. If a clinic's first suggestion is a very high-THC product with no titration plan, that's worth a polite question.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
