import type { Section } from "@/components/ArticleSections";
import { references } from "@/data/guides";

export type Condition = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  sections: Section[];
};

type Topic = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  discussion: string[];
  source?: { label: string; href: string };
};

const topics: Topic[] = [
  {
    slug: "chronic-pain",
    name: "Chronic pain",
    short: "What NICE recommends for long-term pain.",
    intro:
      "NICE advises against offering THC, THC with CBD, nabilone or dronabinol for chronic pain in adults. It limits CBD for this use to clinical trials.",
    discussion: [
      "Describe a task that pain affects, such as walking to the shops or sitting at work.",
      "Ask what approaches are recommended for your type of pain and what outcomes would matter most to you.",
    ],
  },
  {
    slug: "anxiety-disorders",
    name: "Anxiety disorders",
    short: "Preparing to discuss anxiety and current treatment.",
    intro:
      "Generalised anxiety can be treated with talking therapies and, where appropriate, medicines. Tell a clinician if a previous treatment helped in some ways but caused difficulties in others.",
    discussion: [
      "Bring the names and dates of therapies or medicines you have tried.",
      "Ask how a proposed change could affect your anxiety, concentration and existing prescriptions.",
    ],
    source: {
      label: "NHS guide to generalised anxiety",
      href: "https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/",
    },
  },
  {
    slug: "ptsd",
    name: "PTSD",
    short: "Questions about trauma-focused treatment and ongoing care.",
    intro:
      "Trauma-focused psychological therapies are important treatment options for PTSD. If you are receiving care from several services, ask how they will coordinate any proposed change.",
    discussion: [
      "Identify which symptoms affect your daily life and what you hope to change.",
      "Ask how a proposed treatment fits with your psychological therapy or existing care plan.",
    ],
    source: {
      label: "NHS guide to PTSD",
      href: "https://www.nhs.uk/mental-health/conditions/ptsd-post-traumatic-stress-disorder/",
    },
  },
  {
    slug: "epilepsy",
    name: "Epilepsy",
    short: "Why the particular epilepsy syndrome matters.",
    intro:
      "Some specific, severe epilepsy syndromes have specialist treatment options involving prescribed cannabidiol. The diagnosis, other medicines and response to treatment all matter.",
    discussion: [
      "Bring seizure records, neurology letters and a current medicine list.",
      "Ask the epilepsy team whether guidance applies to the particular syndrome and how response would be monitored.",
    ],
    source: {
      label: "NHS guide to epilepsy",
      href: "https://www.nhs.uk/conditions/epilepsy/",
    },
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple sclerosis",
    short: "Understanding guidance on muscle stiffness and spasms.",
    intro:
      "NICE describes a trial of THC:CBD spray for certain adults with moderate to severe spasticity due to MS when other drug treatments have been ineffective. A specialist assesses response.",
    discussion: [
      "Describe what stiffness prevents you doing and what previous treatments have changed.",
      "Ask how the team would measure response and decide whether to continue.",
    ],
    source: {
      label: "NHS guide to multiple sclerosis",
      href: "https://www.nhs.uk/conditions/multiple-sclerosis/",
    },
  },
  {
    slug: "fibromyalgia",
    name: "Fibromyalgia",
    short: "Discussing pain, fatigue and day-to-day function.",
    intro:
      "Fibromyalgia can involve widespread pain, fatigue and disturbed sleep. Identifying the symptom that matters most to you helps focus an appointment. NICE’s adult chronic pain guidance is relevant when considering cannabis-based medicines for pain.",
    discussion: [
      "Describe how pain or fatigue affects a typical day as well as a difficult one.",
      "Ask about the evidence for each treatment and how you could measure a meaningful change.",
    ],
    source: {
      label: "NHS guide to fibromyalgia",
      href: "https://www.nhs.uk/conditions/fibromyalgia/",
    },
  },
  {
    slug: "insomnia",
    name: "Insomnia",
    short: "Discussing sleep patterns and their possible causes.",
    intro:
      "Difficulty sleeping has many possible causes. A clinician may ask about sleep patterns, medicines, other symptoms and how you feel during the day before discussing options.",
    discussion: [
      "Bring a brief sleep diary if you have one.",
      "Ask how daytime sleepiness, work or driving might be affected by a proposed treatment.",
    ],
    source: {
      label: "NHS guide to insomnia",
      href: "https://www.nhs.uk/conditions/insomnia/",
    },
  },
  {
    slug: "migraines",
    name: "Migraine and cluster headache",
    short: "Preparing an accurate headache and treatment history.",
    intro:
      "Migraine and cluster headache have different treatment pathways. Check the diagnosis and whether an appointment concerns preventing attacks or treating them when they occur.",
    discussion: [
      "Record attack frequency and how much of your day each attack affects.",
      "Bring the names of medicines used during attacks and the number of days each month you take them.",
    ],
    source: {
      label: "NHS guide to migraine",
      href: "https://www.nhs.uk/conditions/migraine/",
    },
  },
  {
    slug: "tourette-syndrome",
    name: "Tourette syndrome",
    short: "Discussing tics and the impact of treatment.",
    intro:
      "The effect of tics on daily activities varies. A clinician can help weigh behavioural approaches and medicines against the particular difficulties a person wants help with.",
    discussion: [
      "Explain which tics interfere with everyday activities and when that happens.",
      "Ask about evidence for any proposed treatment in your age group and how unwanted effects would be monitored.",
    ],
    source: {
      label: "NHS guide to Tourette syndrome",
      href: "https://www.nhs.uk/conditions/tourette-syndrome/",
    },
  },
  {
    slug: "cancer-related-symptoms",
    name: "Cancer-related symptoms",
    short: "Understanding guidance for sickness caused by chemotherapy.",
    intro:
      "NICE describes nabilone as an option to add for some adults whose chemotherapy-related nausea or vomiting persists despite conventional anti-sickness treatment. This concerns symptom management.",
    discussion: [
      "Tell the oncology team when sickness starts in relation to treatment and what anti-sickness medicines you already take.",
      "Ask who to contact if you cannot keep fluids or prescribed medicines down.",
    ],
    source: {
      label: "NHS guide to chemotherapy",
      href: "https://www.nhs.uk/tests-and-treatments/chemotherapy/",
    },
  },
  {
    slug: "adhd",
    name: "ADHD",
    short: "Preparing questions about symptoms and existing care.",
    intro:
      "An ADHD specialist can discuss established options for adults, including medicines and psychological support. Bring details of your current care before asking about a different treatment.",
    discussion: [
      "Describe the specific activities you find difficult and what already helps.",
      "Ask about interactions with current medicines and who would monitor changes in sleep, attention or mood.",
    ],
    source: {
      label: "NHS guide to adult ADHD",
      href: "https://www.nhs.uk/conditions/adhd-adults/",
    },
  },
];

export const conditions: Condition[] = topics.map(
  ({ discussion, source, ...condition }) => ({
    ...condition,
    sections: [
      { heading: "Questions for your clinician", bullets: discussion },
      {
        heading: "Read the guidance",
        paragraphs: [
          "The evidence and prescribing guidance depend on the symptom, medicine and individual circumstances. A specialist can explain how they apply to you.",
        ],
        sources: source
          ? [source, references.nice]
          : [references.nice, references.nhs],
      },
    ],
  }),
);

export function getCondition(slug: string) {
  return conditions.find((condition) => condition.slug === slug);
}
