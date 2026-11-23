import type { Section } from "@/components/ArticleSections";

export type Condition = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  commonlyPrescribed: boolean;
  sections: Section[];
};

export const conditions: Condition[] = [
  {
    slug: "chronic-pain",
    name: "Chronic pain",
    short: "The most common reason for a UK medical cannabis prescription.",
    intro:
      "Chronic pain — pain that's persisted for three months or more — is the single most common condition UK specialists prescribe medical cannabis for. That covers everything from long-standing back pain to neuropathic (nerve) pain that hasn't responded to standard medication.",
    commonlyPrescribed: true,
    sections: [
      {
        heading: "What counts as chronic pain?",
        paragraphs: [
          "If your pain has lasted beyond the normal healing time — usually taken as three months — it's considered chronic. It might be constant or come and go. Common examples include lower back pain, arthritis-related pain, nerve damage after surgery or injury, and pain conditions like fibromyalgia (which has its own page).",
          "For prescription purposes, what matters is less the label and more the history: what you've tried, what happened, and how the pain affects your daily life.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "The evidence for cannabis-based medicines in chronic pain is mixed but real. NICE — the body that advises the NHS — found some evidence of benefit for chronic pain in adults, though it judged the evidence not strong enough to recommend routine NHS prescribing. Private specialists work to broader guidelines and can prescribe where they believe it's clinically justified.",
          "In practice, many private patients report meaningful improvements in pain scores and sleep. But it's not a cure, it doesn't work for everyone, and side effects like drowsiness or dizziness are common early on.",
        ],
        callout:
          "Be sceptical of anyone — clinic or website — who promises medical cannabis will definitely fix your pain. Honest clinicians talk in terms of 'worth trying', not certainties.",
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A confirmed diagnosis or a well-documented history of the pain",
          "Evidence you've tried at least two conventional treatments — for example standard painkillers, nerve-pain medication like amitriptyline or gabapentin, physiotherapy, or pain-clinic referral",
          "Recent medical records, usually obtained from your GP with your consent",
        ],
      },
      {
        heading: "Questions worth asking at your consultation",
        bullets: [
          "What improvement should I realistically expect, and how will we measure it?",
          "What side effects should I watch for in the first few weeks?",
          "How does this interact with the medication I'm already on?",
          "What's the plan if it doesn't help after a trial period?",
        ],
      },
    ],
  },
  {
    slug: "anxiety-disorders",
    name: "Anxiety disorders",
    short: "Including generalised anxiety, social anxiety and OCD.",
    intro:
      "Anxiety disorders are among the most common reasons people enquire about medical cannabis in the UK. Specialists may consider prescribing where diagnosed anxiety hasn't responded to standard treatments like SSRIs or talking therapy.",
    commonlyPrescribed: true,
    sections: [
      {
        heading: "Which anxiety conditions are considered?",
        paragraphs: [
          "Generalised anxiety disorder (GAD), social anxiety disorder, panic disorder and OCD are all conditions UK specialists will assess. What matters is that the condition is formally diagnosed, significantly affects your life, and hasn't responded adequately to conventional treatment.",
          "Everyday stress or mild worry won't meet the threshold — prescriptions are for clinical conditions, not for taking the edge off a busy life.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Research into cannabis-based medicines for anxiety is still developing. Some studies suggest CBD in particular may reduce anxiety symptoms, while THC can either relieve or worsen anxiety depending on the dose and the person. That unpredictability is exactly why prescribing is done cautiously, starting low and adjusting slowly.",
          "If you have a history of psychosis or certain other conditions, THC-containing products may be unsuitable — a good specialist will go through this carefully with you.",
        ],
        callout:
          "THC can increase anxiety in some people, especially at higher doses. If your anxiety worsens after starting treatment, contact your clinic rather than stopping abruptly or pushing through.",
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A formal diagnosis from your GP or a psychiatrist",
          "A record of at least two previous treatments — for example an SSRI or SNRI, plus CBT or another talking therapy",
          "Your recent mental health history, including any hospital treatment",
        ],
      },
      {
        heading: "Questions worth asking at your consultation",
        bullets: [
          "Would you start with CBD-dominant or balanced products for my situation?",
          "How will we tell the difference between the medicine working and a placebo effect?",
          "What happens if my anxiety gets worse on THC?",
          "Can I keep seeing my therapist while using medical cannabis?",
        ],
      },
    ],
  },
  {
    slug: "ptsd",
    name: "PTSD",
    short: "Post-traumatic stress disorder, including treatment-resistant cases.",
    intro:
      "Post-traumatic stress disorder is one of the better-established reasons for a private medical cannabis prescription in the UK, particularly where trauma-focused therapy and medication haven't brought enough relief.",
    commonlyPrescribed: true,
    sections: [
      {
        heading: "PTSD and its symptoms",
        paragraphs: [
          "PTSD can follow any traumatic event — accidents, assaults, military service, medical emergencies. Symptoms typically include intrusive memories and flashbacks, nightmares, hypervigilance, and avoiding anything that recalls the event. Sleep disturbance is often the symptom people find hardest to live with.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Evidence here is promising but not conclusive. A number of studies and patient surveys report improvements in sleep quality and nightmare frequency, and some reduction in overall symptom severity. Much of the strongest patient-reported data in the UK comes through the UK Medical Cannabis Registry.",
          "Specialists generally see cannabis-based medicine as an addition to trauma-focused psychological therapy, not a replacement for it.",
        ],
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A PTSD diagnosis from a GP, psychiatrist or psychologist",
          "Evidence of previous treatment — typically trauma-focused CBT or EMDR, and often an antidepressant such as sertraline or venlafaxine",
          "Any history of substance misuse, which will be discussed frankly rather than used to rule you out automatically",
        ],
      },
      {
        heading: "Questions worth asking at your consultation",
        bullets: [
          "Will the focus be on improving my sleep, my daytime symptoms, or both?",
          "How does this fit alongside the therapy I'm having (or waiting for)?",
          "What's the approach to dosing around nightmares specifically?",
        ],
      },
    ],
  },
  {
    slug: "epilepsy",
    name: "Epilepsy",
    short: "Mainly severe, treatment-resistant forms of epilepsy.",
    intro:
      "Epilepsy is the condition at the heart of the 2018 law change — the cases of children with severe treatment-resistant epilepsy prompted medical cannabis legalisation. Privately, specialists prescribe for adults and children whose seizures haven't been controlled by standard anti-epileptic medication.",
    commonlyPrescribed: false,
    sections: [
      {
        heading: "When is it considered?",
        paragraphs: [
          "Medical cannabis for epilepsy is generally reserved for treatment-resistant cases — where at least two or three anti-seizure medications have been tried without adequate control. For children, prescribing is especially cautious and usually involves paediatric neurology specialists.",
          "The best-known evidence involves CBD (cannabidiol), in particular the licensed medicine Epidyolex for Dravet syndrome, Lennox-Gastaut syndrome and tuberous sclerosis complex.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "CBD has the strongest evidence base of any cannabis-based medicine: clinical trials show meaningful reductions in seizure frequency for certain severe epilepsy syndromes. Evidence for THC-containing products in epilepsy is much thinner.",
          "This is the one area where NICE does recommend a cannabis-based medicine on the NHS — but only Epidyolex, and only for specific syndromes. NHS access outside those criteria is extremely rare, which is why many families look to private clinics.",
        ],
        callout:
          "Never stop or reduce prescribed anti-seizure medication to try cannabis products on your own. Seizure medication changes need specialist supervision — stopping suddenly can be dangerous.",
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A confirmed epilepsy diagnosis, ideally with neurology reports",
          "A clear record of which anti-seizure medications have been tried and what happened",
          "Seizure diaries or frequency records if you have them",
        ],
      },
    ],
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple sclerosis",
    short: "Mainly for muscle spasticity and nerve pain that hasn't responded to treatment.",
    intro:
      "MS is one of the few conditions with a cannabis-based medicine actually licensed in the UK — Sativex, a mouth spray for moderate to severe spasticity. Private clinics also prescribe for MS-related pain and sleep problems.",
    commonlyPrescribed: false,
    sections: [
      {
        heading: "MS symptoms that may be considered",
        paragraphs: [
          "The clearest case is spasticity — the muscle stiffness and spasms that affect many people with MS. Sativex (a THC and CBD spray) is licensed for this when other treatments haven't helped enough, though NHS funding for it remains patchy across the country.",
          "Specialists may also consider prescribing for MS-related neuropathic pain, bladder symptoms that disturb sleep, and tremor — though the evidence for these is weaker than for spasticity.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Sativex has proper clinical trial evidence behind it for spasticity, which is why it's licensed. NICE has recommended it as a cost-effective option, but local NHS funding decisions vary — an ongoing source of frustration for patients and neurologists alike.",
          "For pain and sleep symptoms, the evidence is more modest, resting mainly on smaller studies and patient reports.",
        ],
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A confirmed MS diagnosis from a neurologist",
          "Records of spasticity or pain treatments already tried — for example baclofen, gabapentin, or physiotherapy",
          "A summary of how symptoms affect your mobility, sleep and daily life",
        ],
      },
    ],
  },
  {
    slug: "fibromyalgia",
    name: "Fibromyalgia",
    short: "Widespread pain, fatigue and poor sleep that standard treatment hasn't shifted.",
    intro:
      "Fibromyalgia causes widespread pain, profound fatigue, unrefreshing sleep and often 'fibro fog' — difficulty concentrating. Because standard treatments help only some patients, fibromyalgia is a common reason for private medical cannabis prescriptions.",
    commonlyPrescribed: true,
    sections: [
      {
        heading: "Living with fibromyalgia",
        paragraphs: [
          "Fibromyalgia is real, common, and frequently misunderstood — many patients spend years being told their tests are normal while their lives shrink. Diagnosis is clinical: widespread pain lasting over three months, alongside fatigue, sleep disturbance and cognitive symptoms, once other causes are excluded.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Evidence for cannabis-based medicines in fibromyalgia is limited but growing. Some studies and registry data report improvements in pain and sleep quality, and it's one of the more common conditions in the UK Medical Cannabis Registry. Researchers suspect the endocannabinoid system may play a role in the condition itself, though that theory isn't settled.",
          "As ever: it helps some patients considerably, others modestly, and some not at all.",
        ],
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A fibromyalgia diagnosis from a GP or rheumatologist",
          "Records of previous treatment — typically amitriptyline, duloxetine, pregabalin, graded exercise, or pain-management programmes",
          "A picture of how symptoms affect your sleep, work and daily functioning",
        ],
      },
      {
        heading: "Questions worth asking at your consultation",
        bullets: [
          "Should the priority be my pain, my sleep, or both?",
          "How will this fit with the pacing and exercise approaches I've been advised to follow?",
          "What follow-up schedule do you recommend for fibromyalgia patients?",
        ],
      },
    ],
  },
  {
    slug: "insomnia",
    name: "Insomnia and sleep disorders",
    short: "Chronic insomnia, usually where it's tied to another condition.",
    intro:
      "Chronic insomnia can be considered for medical cannabis treatment in the UK, particularly when it's linked to another condition like chronic pain, PTSD or anxiety — and when standard approaches like CBT for insomnia haven't worked.",
    commonlyPrescribed: true,
    sections: [
      {
        heading: "When insomnia qualifies",
        paragraphs: [
          "Occasional bad nights won't meet the threshold. Clinics look for chronic insomnia — difficulty getting to sleep or staying asleep, at least a few nights a week, over months — that genuinely affects your daytime life.",
          "Standalone insomnia can be considered, but many prescriptions are for sleep disturbance as part of another condition. That's not a loophole; it reflects how often poor sleep and chronic illness travel together.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "THC can reduce the time it takes to fall asleep, and many patients report better sleep quality — particularly where pain or nightmares were the thing waking them. The catch is tolerance: effects on sleep can fade with regular use, and stopping suddenly can cause rebound insomnia. A good specialist will discuss this openly.",
          "CBT for insomnia (CBT-I) remains the best-evidenced long-term treatment, so expect clinics to ask whether you've tried it.",
        ],
        callout:
          "If you're prescribed a THC product for sleep, using the lowest effective dose and taking occasional breaks (agreed with your clinician) can help manage tolerance.",
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A history of chronic insomnia, ideally documented by your GP",
          "Previous treatments tried — sleep hygiene approaches, CBT-I, or medications like zopiclone or melatonin",
          "Any linked conditions such as pain, PTSD or anxiety",
        ],
      },
    ],
  },
  {
    slug: "migraines",
    name: "Migraines and cluster headaches",
    short: "Chronic migraine or cluster headache that standard prevention hasn't controlled.",
    intro:
      "Chronic migraine — headaches on 15 or more days a month — can be life-limiting, and some patients find standard preventive medications ineffective or impossible to tolerate. It's an area where UK specialists will consider medical cannabis, though the evidence base is still young.",
    commonlyPrescribed: false,
    sections: [
      {
        heading: "Which headache conditions are considered?",
        paragraphs: [
          "Chronic migraine is the most common. Cluster headache — excruciating attacks in bouts — is also considered by some clinics, given how few effective treatments exist. Occasional migraines that respond to triptans won't meet the bar.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Research here is early-stage. Some studies report reduced migraine frequency and intensity with cannabis-based medicines, and there's plausible biology behind it. But there are no large definitive trials yet, and overuse of any acute headache medication — possibly including cannabis — can itself cause medication-overuse headache.",
          "Expect a specialist to weigh this carefully rather than promise results.",
        ],
      },
      {
        heading: "What clinics will want to see",
        bullets: [
          "A diagnosis of chronic migraine or cluster headache, ideally from a neurologist or headache clinic",
          "Records of preventive treatments tried — for example propranolol, amitriptyline, topiramate, or CGRP medications",
          "A headache diary, if you keep one — frequency, severity, and triggers",
        ],
      },
    ],
  },
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
