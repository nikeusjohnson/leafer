import type { Section } from "@/components/ArticleSections";

export const guideTopics = [
  {
    id: "choosing-a-clinic",
    title: "Choose and compare clinics",
    short: "Choosing a clinic",
    intro:
      "Compare fees, check the service behind a name and plan a move between clinics.",
    image: "/images/checking-clinic-fees.webp",
    next: { label: "Compare clinic fees", href: "/clinics" },
  },
  {
    id: "preparing-for-an-appointment",
    title: "Prepare for an appointment",
    short: "Appointments and records",
    intro:
      "Gather the documents, questions and treatment history your clinician needs.",
    image: "/images/preparing-a-checklist.webp",
    next: { label: "Open the eligibility checklist", href: "/eligibility" },
  },
  {
    id: "living-with-a-prescription",
    title: "Manage ongoing care",
    short: "Life with a prescription",
    intro:
      "Find guidance on medicine reviews, everyday activities and reporting a problem.",
    image: "/images/appointment-discussion.webp",
    next: { label: "Read patient questions", href: "/faq" },
  },
] as const;

export type Guide = {
  topic: (typeof guideTopics)[number]["id"];
  slug: string;
  title: string;
  description: string;
  kicker: string;
  readTime: string;
  intro: string;
  sections: Section[];
};

export const references = {
  nhs: {
    label: "NHS guide to medical cannabis",
    href: "https://www.nhs.uk/medicines/medical-cannabis/",
  },
  nice: {
    label: "NICE prescribing recommendations",
    href: "https://www.nice.org.uk/guidance/ng144/chapter/recommendations",
  },
  records: {
    label: "NHS England guidance on GP records",
    href: "https://digital.nhs.uk/services/nhs-app/nhs-app-features/gp-health-records-in-the-app",
  },
  gmc: {
    label: "Search the GMC registers",
    href: "https://www.gmc-uk.org/registers",
  },
  law: {
    label: "Home Office guidance on prescribing",
    href: "https://www.gov.uk/government/publications/circular-0182018-rescheduling-of-cannabis-based-products-for-medicinal-use-in-humans/rescheduling-of-cannabis-based-products-for-medicinal-use-in-humans-accessible-version",
  },
  driving: {
    label: "GOV.UK drug-driving rules",
    href: "https://www.gov.uk/drug-driving-law",
  },
  travel: {
    label: "Home Office guidance for travellers",
    href: "https://www.gov.uk/guidance/controlled-drugs-personal-licences",
  },
  fees: { label: "Compare the clinics’ published fees", href: "/clinics" },
  care: {
    label: "Care Quality Commission",
    href: "https://www.cqc.org.uk/care-services",
  },
};

export const guides: Guide[] = [
  {
    slug: "membership-or-pay-as-you-go",
    topic: "choosing-a-clinic",
    title: "Monthly membership or pay as you go?",
    kicker: "Clinic costs",
    readTime: "4 min read",
    description:
      "Compare the same appointments over a year and see when the totals change.",
    intro:
      "A monthly payment spreads costs across the year. A pay-as-you-go plan ties them to appointments. Start with the reviews your clinician expects you to need, then price both plans for that same care.",
    sections: [
      {
        heading: "Set the comparison period",
        paragraphs: [
          "Ask how long a membership commits you for, which appointments it includes and what happens if your care ends early. For pay as you go, ask for separate prices for the first consultation and each follow-up.",
          "For example, Alternaleaf publishes a minimum 12-month membership covering required appointments. It charges separately for some extra appointments. Its pay-as-you-go consultation fee excludes medicines. Read the terms for the specific clinic you are considering.",
        ],
        sources: [
          {
            label: "Alternaleaf membership terms",
            href: "https://support.alternaleaf.co.uk/hc/en-gb/articles/41029780057617-Can-you-tell-me-more-about-your-membership-scheme",
          },
          {
            label: "Alternaleaf pay-as-you-go terms",
            href: "https://support.alternaleaf.co.uk/hc/en-gb/articles/40678801698321-How-much-does-a-PAYG-consult-cost",
          },
        ],
      },
      {
        heading: "Compare a worked example",
        paragraphs: [
          "Imagine a clinic offers a 12-month membership at £12 a month, with the first appointment and all required reviews included. Its alternative is £45 for the first appointment and £30 for each review. Both figures below cover appointments only. These are invented prices to show the arithmetic.",
        ],
        table: {
          caption: "Illustrative appointment fees over 12 months",
          columns: ["Care over the year", "Membership", "Pay as you go"],
          rows: [
            [
              "First visit and two reviews",
              "£12 × 12 = £144",
              "£45 + £60 = £105",
            ],
            [
              "First visit and four reviews",
              "£12 × 12 = £144",
              "£45 + £120 = £165",
            ],
          ],
        },
        callout:
          "In the first scenario, pay as you go costs £39 less. In the second, membership costs £21 less. Use the review schedule advised for your care when comparing real quotes.",
      },
      {
        heading: "Check what changes the total",
        checklist: [
          "Get the monthly price, minimum term and any joining fee in writing.",
          "Mark which reviews are included and ask about extra or missed appointments.",
          "Check repeat prescription, delivery, equipment and letter charges. Get a separate quote for any medicine.",
          "Ask when payments stop if you transfer or treatment ends, and when any cancellation takes effect.",
        ],
        sources: [references.fees],
      },
    ],
  },
  {
    slug: "transferring-clinics",
    topic: "choosing-a-clinic",
    title: "Moving to a different clinic",
    kicker: "Changing clinics",
    readTime: "3 min read",
    description:
      "Coordinate assessments, discharge paperwork, outstanding fees and who to contact during the handover.",
    intro:
      "Before leaving your current clinic, ask the receiving clinic to explain its assessment, paperwork and timing. Get both teams to confirm who is responsible for your care during the change.",
    sections: [
      {
        heading: "Check the receiving clinic’s requirements",
        paragraphs: [
          "Clinics publish different transfer instructions. Mamedica asks for details of the first and latest prescription from the previous clinic, along with a discharge letter. Alternaleaf advises patients to request discharge after approval at the new appointment and requires the letter before releasing a first prescription.",
          "Ask the receiving service what it can confirm before you request discharge. Share your current prescription and contact both clinical teams if timing could leave you without care.",
        ],
        sources: [
          {
            label: "Mamedica transfer FAQs",
            href: "https://mamedica.co.uk/faqs",
          },
          {
            label: "Alternaleaf transfer process",
            href: "https://www.alternaleaf.co.uk/transfer",
          },
        ],
      },
      {
        heading: "Request the paperwork",
        checklist: [
          "Ask which prescriptions, clinician letters and GP records are needed, and how recent they must be.",
          "Confirm the secure route for sending copies. Keep a copy of your own request and the date you sent it.",
          "Find out when the current service can issue a discharge letter, whether it costs anything and who receives it.",
        ],
      },
      {
        heading: "Agree the handover dates and costs",
        checklist: [
          "Write down the dates of the last review, the new assessment and the point at which each clinic’s responsibility changes.",
          "Ask the current clinic about outstanding invoices, membership notice periods and any appointments already booked.",
          "Confirm any transfer fee, follow-up charge and separate pharmacy costs with the receiving clinic.",
          "Ask both teams whom to call about side effects or a prescription query while the transfer is under way.",
        ],
        callout:
          "If you have an appointment or supply concern during a transfer, ask your treating team for a plan specific to you. Agree the timing before cancelling an appointment or changing a medicine.",
      },
    ],
  },
  {
    slug: "costs",
    topic: "choosing-a-clinic",
    title: "How to compare clinic fees",
    description:
      "Price the first appointment, ongoing care and extras on the same basis.",
    kicker: "Clinic costs",
    readTime: "3 min read",
    intro:
      "A clinic might quote by appointment, month or year. To work out what you could pay, ask each clinic to price the same period of care.",
    sections: [
      {
        heading: "Start with the first appointment",
        paragraphs: [
          "A free screening call and a specialist consultation can be separate appointments. Check which one the advertised fee buys, when payment is due and what happens if the clinic cannot offer treatment.",
        ],
      },
      {
        heading: "Write down a year of clinic fees",
        bullets: [
          "Enter the initial fee once. Add the price of each review the clinic expects you to attend.",
          "For a monthly membership, multiply the monthly charge by the months you expect to be enrolled. Check the minimum term and the cancellation rules.",
          "Add repeat prescription, delivery and letter fees where they apply. Avoid counting an appointment twice if a membership already covers it.",
        ],
        callout:
          "For example, if a written quote lists a £40 assessment and three £30 reviews, the appointment subtotal is £130. This is an illustration. Medicine, pharmacy charges and any extra reviews would change what you spend.",
      },
      {
        heading: "Ask the pharmacy about medicine separately",
        paragraphs: [
          "The medicine, quantity and dispensing arrangements affect the pharmacy bill. A fee for issuing a prescription pays for a different service from supplying its contents. Ask for an itemised quote before agreeing to pay.",
        ],
        sources: [
          references.fees,
          {
            label: "Example of published pay-as-you-go terms",
            href: "https://support.alternaleaf.co.uk/hc/en-gb/articles/40678801698321-How-much-does-a-PAYG-consult-cost",
          },
        ],
      },
    ],
  },
  {
    slug: "checking-a-clinic",
    topic: "choosing-a-clinic",
    title: "How to check a clinic’s registration",
    description:
      "Match the service, location and specialist to the public records.",
    kicker: "Clinic checks",
    readTime: "3 min read",
    intro:
      "Look for the organisation that will actually provide your care. Its registered name may be different from the name at the top of its website.",
    sections: [
      {
        heading: "Match the service to its regulator",
        paragraphs: [
          "Start with the country where the service is registered, including for an online appointment. Compare the provider name, service address and current registration with the details on the clinic’s own website. If a record is archived, look for the current location before booking.",
        ],
        sources: [
          references.care,
          {
            label: "Healthcare Inspectorate Wales",
            href: "https://www.hiw.org.uk/",
          },
          {
            label: "Scottish independent healthcare registration",
            href: "https://www.gov.uk/find-licences/registration-independent-healthcare-service-scotland",
          },
          {
            label: "Northern Ireland RQIA inspections",
            href: "https://www.rqia.org.uk/inspections/",
          },
        ],
      },
      {
        heading: "Read the actual inspection",
        paragraphs: [
          "A registration tells you which service the regulator oversees. For an inspection, check the date, what the inspector looked at, any concerns and the provider’s response. A newly registered location may have no published inspection yet.",
        ],
      },
      {
        heading: "Check who will assess you",
        paragraphs: [
          "Ask for the specialist’s full name or GMC number. The doctor’s entry shows registration details and whether they are on the Specialist Register. For a question about a fee or booking term, ask the clinic directly.",
        ],
        sources: [references.gmc],
      },
    ],
  },
  {
    slug: "first-consultation",
    topic: "preparing-for-an-appointment",
    title: "Prepare for a first appointment",
    description:
      "What to gather and what to ask before paying for a consultation.",
    kicker: "Appointments",
    readTime: "2 min read",
    intro:
      "Start by asking the clinic which records it needs, who will see you and how long the appointment will last.",
    sections: [
      {
        heading: "Gather the relevant records",
        bullets: [
          "Ask which documents the clinic accepts and how to share them securely.",
          "Write down previous treatments, dates where you know them, and why each was changed or stopped.",
          "Bring a list of current prescriptions, supplements, allergies and the questions you want answered.",
        ],
        sources: [references.records],
      },
      {
        heading: "Questions to take into the room",
        checklist: [
          "What options fit my symptoms and treatment history?",
          "Which benefits and unwanted effects should I look for, and how will we review them?",
          "Which costs come from the clinic and which come from the pharmacy?",
          "Who can I contact between reviews, and who will send my GP a summary?",
        ],
      },
      {
        heading: "Use the appointment to make a decision",
        paragraphs: [
          "Ask what other treatments could suit your circumstances, how the clinician would judge any benefit and how you would contact the team about side effects. The specialist may suggest another approach. Agree who will send a summary and when you should hear back.",
        ],
        sources: [references.nice],
      },
    ],
  },
  {
    slug: "driving",
    topic: "living-with-a-prescription",
    title: "Driving with a prescription",
    description:
      "Understand impairment, prescribed medicines and the different rules across the UK.",
    kicker: "Driving",
    readTime: "2 min read",
    intro:
      "If medicine affects your ability to drive safely, you must not drive. Ask your prescriber or pharmacist about your particular medicine and when to seek advice again.",
    sections: [
      {
        heading: "Check the rules where you drive",
        paragraphs: [
          "England, Wales and Scotland have specified blood limits for certain drugs. A medical defence may apply to a limit offence where medicine was lawfully prescribed and taken according to the directions. Driving while unfit remains an offence. Northern Ireland has different legislation and driving while unfit can still lead to arrest.",
        ],
        sources: [references.driving],
      },
      {
        heading: "Before taking the wheel",
        bullets: [
          "Discuss work driving, changes to your prescription and any other medicines with your clinician.",
          "Keep the dispensing label and a copy of the prescription available as evidence of lawful treatment.",
          "If you feel drowsy, dizzy or unable to concentrate, arrange another way to travel.",
        ],
      },
    ],
  },
  {
    slug: "travelling",
    topic: "living-with-a-prescription",
    title: "Taking prescribed medicine abroad",
    description:
      "Check each destination and transit country before you travel.",
    kicker: "Travel",
    readTime: "2 min read",
    intro:
      "A UK prescription shows who prescribed your medicine. Permission to enter another country with it depends on the rules there.",
    sections: [
      {
        heading: "Check the whole journey",
        paragraphs: [
          "Contact the embassy of each destination and transit country before booking. Give the medicine name, form, quantity and travel dates. Ask whether the medicine is permitted and whether approval, translation or a particular form is required.",
        ],
        sources: [references.travel],
      },
      {
        heading: "Get your paperwork together",
        paragraphs: [
          "Ask the clinic early about travel-letter charges and lead times. Keep the original labelled container and the documents required for your route. Check the Home Office guidance for returning to the UK. If carriage is prohibited, discuss your options with your prescriber before travelling.",
        ],
        sources: [references.nhs],
      },
    ],
  },
  {
    slug: "flower-vs-oil",
    topic: "living-with-a-prescription",
    title: "Understanding your prescription format",
    description:
      "Questions about the form, instructions and equipment for a prescribed medicine.",
    kicker: "Prescription formats",
    readTime: "2 min read",
    intro:
      "The form of a medicine affects how you take it. Written instructions for one product may be inappropriate for another.",
    sections: [
      {
        heading: "Check the dispensing label",
        paragraphs: [
          "Before taking a new medicine, ask the pharmacist to show you how to measure or administer the prescribed amount. For a liquid, check the units on the measuring device and how to store the bottle after opening.",
        ],
      },
      {
        heading: "Ask about equipment and costs",
        paragraphs: [
          "If the prescription requires a device, ask which device is suitable, how to use and clean it, and whether it is included in the quoted cost. Smoking prescribed cannabis is prohibited. Ask the clinic or pharmacist before changing how you take a medicine.",
        ],
        sources: [references.law],
      },
    ],
  },
  {
    slug: "cbd-vs-medical-cannabis",
    topic: "living-with-a-prescription",
    title: "CBD products and prescribed medicines",
    description:
      "What a shop label tells you and what to discuss with your pharmacist.",
    kicker: "CBD explained",
    readTime: "2 min read",
    intro:
      "Some high-street CBD products are sold as foods or supplements. A product with CBD in its name can be quite different from a medicine prescribed for a particular condition.",
    sections: [
      {
        heading: "Check what you already take",
        paragraphs: [
          "Tell your pharmacist or specialist about any CBD products you use, alongside your prescriptions and supplements. Take the packaging or a photograph of the ingredients if you are unsure what it contains.",
        ],
      },
      {
        heading: "Why a clinician asks",
        paragraphs: [
          "CBD and THC can interact with other medicines. The NHS also cautions that the ingredients and quality of products bought online can be uncertain. Ask for advice before replacing or combining a prescribed treatment with a shop-bought product.",
        ],
        sources: [references.nhs],
      },
    ],
  },
  {
    slug: "side-effects",
    topic: "living-with-a-prescription",
    title: "Reporting side effects",
    description:
      "Who to contact and what information to keep when a medicine causes problems.",
    kicker: "Follow-up care",
    readTime: "2 min read",
    intro:
      "Before starting a medicine, ask which symptoms need urgent attention and how to reach your clinical team between appointments.",
    sections: [
      {
        heading: "Keep a short note",
        paragraphs: [
          "Record the name and strength on the label, when you took it, when symptoms started and any other medicines you took. Tell the clinical team about changes in mood, alertness or coordination and ask what to do next.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Seek emergency help for a life-threatening reaction. You can also report suspected side effects through the MHRA Yellow Card scheme. Your pharmacist or prescriber can advise about your own treatment.",
        ],
        sources: [
          references.nhs,
          {
            label: "MHRA Yellow Card reporting",
            href: "https://yellowcard.mhra.gov.uk/",
          },
        ],
      },
    ],
  },
  {
    slug: "talking-to-your-gp",
    topic: "preparing-for-an-appointment",
    title: "Getting the right medical records",
    description:
      "Find out what to ask your GP surgery for and how to share it.",
    kicker: "Your records",
    readTime: "2 min read",
    intro:
      "Ask the clinic for a specific list before requesting your records. A list of current prescriptions might leave out a previous treatment or an important specialist letter.",
    sections: [
      {
        heading: "Find the relevant dates",
        paragraphs: [
          "In England, recent GP entries may be visible in the NHS App. Older entries or hospital documents may need a separate request. If a letter is missing, check whether your GP surgery or the hospital department holds it. Elsewhere in the UK, ask your practice how local access works.",
        ],
        sources: [references.records],
      },
      {
        heading: "Agree how the records will be used",
        bullets: [
          "Tell the surgery what the clinic needs and the period it should cover.",
          "Use the clinic’s confirmed secure channel for sensitive documents.",
          "Ask who sends the appointment summary to your GP and how you can get a copy.",
        ],
      },
    ],
  },
  {
    slug: "tolerance-breaks",
    topic: "living-with-a-prescription",
    title: "When to review your treatment",
    description:
      "Prepare for a discussion if the effects or drawbacks of a medicine change.",
    kicker: "Treatment reviews",
    readTime: "2 min read",
    intro:
      "If your symptoms change or treatment feels less helpful, contact the prescribing team. Changes to the amount you take or the timing of a break need individual advice.",
    sections: [
      {
        heading: "Review the original aim",
        paragraphs: [
          "Note what you and the clinician hoped would change, what you noticed, and how it affects everyday tasks. Include unwanted effects and new prescriptions. This gives the clinician a better starting point than a single good or bad day.",
        ],
      },
      {
        heading: "Agree the next step",
        paragraphs: [
          "Ask whether to continue, change or stop, and get the instructions in writing. Confirm when to contact the team again, who to reach between reviews and whether an additional appointment carries a fee.",
        ],
        sources: [references.nice],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

const nextReading: Record<string, readonly [string, string]> = {
  costs: ["membership-or-pay-as-you-go", "checking-a-clinic"],
  "membership-or-pay-as-you-go": ["costs", "transferring-clinics"],
  "checking-a-clinic": ["costs", "first-consultation"],
  "transferring-clinics": ["talking-to-your-gp", "checking-a-clinic"],
  "first-consultation": ["talking-to-your-gp", "costs"],
  "talking-to-your-gp": ["first-consultation", "transferring-clinics"],
  driving: ["side-effects", "travelling"],
  travelling: ["driving", "flower-vs-oil"],
  "flower-vs-oil": ["side-effects", "cbd-vs-medical-cannabis"],
  "cbd-vs-medical-cannabis": ["first-consultation", "flower-vs-oil"],
  "side-effects": ["tolerance-breaks", "driving"],
  "tolerance-breaks": ["side-effects", "talking-to-your-gp"],
};

export function relatedGuides(guide: Guide): Guide[] {
  const slugs = nextReading[guide.slug] ?? [];
  return slugs.map(getGuide).filter((item): item is Guide => Boolean(item));
}
