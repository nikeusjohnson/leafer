export type Clinic = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  initialFeeNum: number;
  initialFee: string;
  initialFeeLabel: string;
  followUpFee: string;
  ongoing: string;
  extraCosts: string;
  format: string;
  inPerson?: boolean;
  pricingUrl: string;
  reviewsUrl?: string;
  regulator: "CQC" | "HIW";
  registeredName: string;
  regulatorUrl: string;
  furtherReading?: { label: string; url: string };
};

export const feesChecked = "23 November 2026";
const cqc = (id: string) => `https://www.cqc.org.uk/location/${id}`;

// Starting charges use the standard new-patient, non-subscription route where one exists.
// Each label identifies what the charge buys. Medicine is separate across these plans.
export const clinics: Clinic[] = [
  {
    slug: "airmed-clinic",
    reviewsUrl: "https://uk.trustpilot.com/review/airmedclinic.co.uk",
    name: "Airmed Clinic",
    tag: "Pay per consultation",
    summary:
      "The booking fee is refundable after an unsuccessful assessment. Approved patients can use it as credit towards their first prescription at MY Dispensary.",
    initialFeeNum: 20,
    initialFee: "£20",
    initialFeeLabel: "First consultation",
    followUpFee: "Included",
    ongoing:
      "Follow-up care is included. Airmed lists no ongoing clinic subscription.",
    extraCosts:
      "Medicines are priced separately. Using a pharmacy other than MY Dispensary attracts a £20 administration fee per prescription.",
    format: "Remote consultations",
    pricingUrl: "https://airmedclinic.co.uk/airmed-clinic-pricing/",
    regulator: "CQC",
    registeredName: "Structured Care Ltd · Solihull Health Check Clinic",
    regulatorUrl:
      "https://www.cqc.org.uk/provider/1-2700339131/registration-info",
    furtherReading: {
      label: "Consultation and pharmacy terms",
      url: "https://airmedclinic.co.uk/pricing-terms-conditions/",
    },
  },
  {
    slug: "alternaleaf",
    reviewsUrl: "https://uk.trustpilot.com/review/alternaleaf.co.uk",
    name: "Alternaleaf",
    tag: "Membership or pay per visit",
    summary:
      "Appointments cost £29 each on pay as you go. A £5 monthly membership covers required video appointments and has a 12-month minimum term.",
    initialFeeNum: 29,
    initialFee: "£29",
    initialFeeLabel: "First assessment, pay as you go",
    followUpFee: "£29 per visit",
    ongoing:
      "The clinic’s four-appointment first-year schedule comes to £116 on pay as you go or £60 for twelve membership payments.",
    extraCosts:
      "Both routes include one delivery per month. Your prescription determines the cost of medicine.",
    format: "Video consultations",
    pricingUrl: "https://www.alternaleaf.co.uk/pricing",
    regulator: "CQC",
    registeredName: "Montu Group UK Ltd · Alternaleaf",
    regulatorUrl: cqc("1-30377877546"),
    furtherReading: {
      label: "Membership terms",
      url: "https://support.alternaleaf.co.uk/hc/en-gb/articles/41029780057617-Can-you-tell-me-more-about-your-membership-scheme",
    },
  },
  {
    slug: "cantourage-clinic",
    reviewsUrl: "https://uk.trustpilot.com/review/cantourageclinic.com",
    name: "Can° Clinic",
    tag: "Onboarding and check-ins",
    summary:
      "Can° Clinic, registered as Cantourage Clinic Ltd, publishes a £99 onboarding charge for new patients. This includes the first specialist consultation.",
    initialFeeNum: 99,
    initialFee: "£99",
    initialFeeLabel: "New-patient onboarding",
    followUpFee: "£29 scheduled check-in",
    ongoing:
      "The clinic’s new-patient plan lists three £29 check-ins after onboarding, bringing the published first-year clinic fees to £186. Transfers have a separate schedule.",
    extraCosts:
      "One delivery a month and repeat prescription processing are included. Prescription changes or split deliveries can add £15. Medicine is separate.",
    format: "Video consultations",
    pricingUrl: "https://www.canclinic.com/pricing",
    regulator: "CQC",
    registeredName: "Cantourage Clinic Ltd",
    regulatorUrl: cqc("1-12775917424"),
  },
  {
    slug: "cannabis-clinic-cardiff",
    reviewsUrl: "https://uk.trustpilot.com/review/cannabiscliniccardiff.co.uk",
    name: "Cannabis Clinic Cardiff",
    tag: "Consultation and monthly plan",
    summary:
      "A mental health clinic registered in Barry, Wales, offering video consultations. An initial specialist appointment is followed by a fixed monthly plan.",
    initialFeeNum: 250,
    initialFee: "£250",
    initialFeeLabel: "First consultation",
    followUpFee: "£33.33 monthly plan",
    ongoing:
      "The monthly payment covers quarterly specialist reviews, repeat prescriptions and administrative support.",
    extraCosts:
      "If a prescription is issued, the patient pays the selected pharmacy for the medicine.",
    format: "Video consultations",
    pricingUrl: "https://www.cannabiscliniccardiff.co.uk/prices",
    regulator: "HIW",
    registeredName: "Cannabis Clinic Cardiff",
    regulatorUrl: "https://www.hiw.org.uk/cannabis-clinic-cardiff",
    furtherReading: {
      label: "Appointment arrangements",
      url: "https://www.cannabiscliniccardiff.co.uk/eligibility",
    },
  },
  {
    slug: "cb1-medical",
    reviewsUrl: "https://uk.trustpilot.com/review/cb1medical.com",
    name: "CB1 Medical",
    tag: "Single consultation fee",
    summary:
      "A £50 initial consultation covers future clinical follow-ups. CB1 offers video appointments and can arrange an in-person consultation in Leicester.",
    initialFeeNum: 50,
    initialFee: "£50",
    initialFeeLabel: "First consultation",
    followUpFee: "Included",
    ongoing:
      "CB1 lists ongoing check-ups and support as included. It waives the initial fee for veterans and patients transferring from another clinic.",
    extraCosts:
      "Medication is paid for separately. Ask the dispensing pharmacy about charges for the chosen delivery method.",
    format: "Video or Leicester by arrangement",
    inPerson: true,
    pricingUrl: "https://cb1medical.com/pricing-guide/",
    regulator: "CQC",
    registeredName: "CB1 Medical Ltd",
    regulatorUrl: cqc("1-26554291527"),
    furtherReading: {
      label: "Appointments and fee waivers",
      url: "https://cb1medical.com/medical-cannabis-faqs/",
    },
  },
  {
    slug: "curaleaf-clinic",
    reviewsUrl: "https://uk.trustpilot.com/review/curaleafclinic.com",
    name: "Curaleaf Clinic",
    tag: "Subscription or pay per visit",
    summary:
      "Formerly known as Sapphire, Curaleaf offers £30 pay-as-you-go appointments, a £5 monthly subscription or a £50 annual plan paid upfront.",
    initialFeeNum: 30,
    initialFee: "£30",
    initialFeeLabel: "First appointment, pay as you go",
    followUpFee: "£30 per visit",
    ongoing:
      "The monthly and annual plans cover the initial assessment and four routine appointments per year. The monthly option has a four-month minimum for new patients and a three-month notice period.",
    extraCosts:
      "Clinic plans exclude medication. Curaleaf includes home delivery and repeat prescription administration.",
    format: "Remote consultations",
    pricingUrl: "https://curaleafclinic.com/pricing/",
    regulator: "CQC",
    registeredName: "Sapphire Clinics (London) Limited",
    regulatorUrl: cqc("1-7773710913"),
  },
  {
    slug: "elios-clinic",
    name: "Elios Clinics",
    tag: "Subscription or pay per visit",
    summary:
      "Everyone starts with a £50 payment. Follow-ups cost £50 each on pay as you go, or the first payment can count towards a 12-month subscription.",
    initialFeeNum: 50,
    initialFee: "£50",
    initialFeeLabel: "First consultation",
    followUpFee: "£50 per visit",
    ongoing:
      "The subscription totals £240 including the initial £50. It covers follow-ups and one document request. Early cancellation has a £50 charge.",
    extraCosts:
      "The dispensing pharmacy bills separately for medication, dispensing and delivery.",
    format: "Video, or Birmingham if required",
    inPerson: true,
    pricingUrl: "https://www.eliosclinics.com/pricing/",
    regulator: "CQC",
    registeredName: "Elios Clinics Limited",
    regulatorUrl: cqc("1-14470575511"),
    furtherReading: {
      label: "Appointments and service FAQs",
      url: "https://www.eliosclinics.com/medical-cannabis/faqs/",
    },
  },
  {
    slug: "integro-clinics",
    reviewsUrl: "https://uk.trustpilot.com/review/integroclinics.com",
    name: "Integro Clinics",
    tag: "Prescription administration fee",
    summary:
      "Initial assessments and follow-ups carry no consultation fee. Integro applies a £4.99 charge each time a prescription is issued.",
    initialFeeNum: 0,
    initialFee: "£0",
    initialFeeLabel: "First consultation",
    followUpFee: "£0 per visit",
    ongoing:
      "There is no charge for repeat prescription reviews. The £4.99 administration charge applies to each issued prescription.",
    extraCosts:
      "Medication is a separate pharmacy cost. The number of prescriptions issued affects the total administration charge.",
    format: "Remote consultations",
    pricingUrl: "https://integroclinics.com/how-it-works",
    regulator: "CQC",
    registeredName: "Integro Medical Clinics Limited",
    regulatorUrl: cqc("1-16309714737"),
  },
  {
    slug: "lyphe",
    reviewsUrl: "https://uk.trustpilot.com/review/lyphe.com",
    name: "Lyphe Clinic",
    tag: "Membership or pay per visit",
    summary:
      "Lyphe, formerly The Medical Cannabis Clinics, publishes separate fees for pay-as-you-go consultations and repeat prescriptions.",
    initialFeeNum: 49,
    initialFee: "£49",
    initialFeeLabel: "New-patient appointment",
    followUpFee: "£49 per visit",
    ongoing:
      "Pay-as-you-go repeats are £25. Following the initial consultation, Lyphe advertises membership from £9.99 monthly or £99.99 annually with routine reviews and repeat prescriptions included within plan limits.",
    extraCosts:
      "Medication is separate. Check the plan’s allowance for appointments, prescriptions and delivery if you expect to need extras.",
    format: "Video consultations",
    pricingUrl: "https://lyphe.com/pricing",
    regulator: "CQC",
    registeredName: "Lyphe Clinic Ltd",
    regulatorUrl: cqc("1-7699897928"),
    furtherReading: {
      label: "Patient terms",
      url: "https://lyphe.com/terms-conditions",
    },
  },
  {
    slug: "mamedica",
    reviewsUrl: "https://uk.trustpilot.com/review/www.mamedica.co.uk",
    name: "Mamedica",
    tag: "Plan-based clinic fees",
    summary:
      "New patients can choose £49 Flex or £150 Standard onboarding. The plans have different clinic and delivery charges after enrolment.",
    initialFeeNum: 49,
    initialFee: "£49",
    initialFeeLabel: "Flex onboarding",
    followUpFee: "£49 scheduled Flex fee",
    ongoing:
      "In addition to onboarding, Mamedica lists £49 in months one and nine on Flex. Standard has £75 charges in months one, three, six and nine. Access and transfer plans have separate eligibility rules.",
    extraCosts:
      "Flex deliveries cost £9.99 each. Standard includes one monthly delivery. Fees for medicine are separate on every plan.",
    format: "Video consultations",
    pricingUrl: "https://mamedica.co.uk/pricing",
    regulator: "CQC",
    registeredName: "Mamedica Limited · Head Office",
    regulatorUrl: cqc("1-20017082238"),
  },
  {
    slug: "releaf",
    reviewsUrl: "https://uk.trustpilot.com/review/releaf.co.uk",
    name: "Releaf",
    tag: "Membership or pay per visit",
    summary:
      "Releaf lists a £29.99 first consultation for most new patients in its November terms. After assessment, patients can pay as they go or choose a £39.99 monthly membership.",
    initialFeeNum: 29.99,
    initialFee: "£29.99",
    initialFeeLabel: "First consultation, most new patients",
    followUpFee: "Included with Releaf+",
    ongoing:
      "Releaf+ includes routine follow-up consultations, prescription charges and delivery. The clinic lists a two-month minimum membership term.",
    extraCosts:
      "Medicine is separate. The November promotion returns the consultation fee as account credit for eligible patients. The credit offer ends on 3 December 2026. Confirm the live consultation price before booking.",
    format: "Remote consultations",
    pricingUrl: "https://releaf.co.uk/pricing",
    regulator: "CQC",
    registeredName: "Releaf Dispensary Clinics Ltd",
    regulatorUrl: cqc("1-26566722762"),
    furtherReading: {
      label: "November consultation offer and dates",
      url: "https://releaf.co.uk/green-friday-terms-and-conditions",
    },
  },
  {
    slug: "zerenia",
    reviewsUrl: "https://uk.trustpilot.com/review/zereniaclinic.co.uk",
    name: "Zerenia Clinic",
    tag: "Pay per visit",
    summary:
      "Zerenia publishes separate prices for a specialist consultation, follow-ups and repeat prescriptions. Contact the clinic to confirm current new-patient availability.",
    initialFeeNum: 15,
    initialFee: "£15",
    initialFeeLabel: "Published consultation fee",
    followUpFee: "From £79 per visit",
    ongoing:
      "The clinic lists a free eligibility callback, follow-ups from £79 and a £15 repeat prescription fee. Ask which type of follow-up applies to your care.",
    extraCosts:
      "The published clinic fees exclude the prescribed medicine. Ask for a current quotation before paying.",
    format: "Video consultations",
    pricingUrl: "https://zereniaclinic.co.uk/pricing/",
    regulator: "CQC",
    registeredName: "Zerenia Clinics Limited · The Wilbraham Practice",
    regulatorUrl: cqc("1-10478815305"),
    furtherReading: {
      label: "Contact the clinic",
      url: "https://zereniaclinic.co.uk/contact-us",
    },
  },
];

export const clinicAliases: Record<string, string> = {
  "sapphire-medical": "curaleaf-clinic",
  tmcc: "lyphe",
};

export const previousListings: Record<
  string,
  { name: string; note: string; source: string; label: string }
> = {
  "myaccess-clinics": {
    name: "MyAccess Clinics",
    note: "The CQC archived the Bristol My Access Clinic service on 8 April 2026. We removed its historical fees from our current comparison.",
    source: "https://www.cqc.org.uk/location/1-7339246824",
    label: "Archived CQC record",
  },
  medicann: {
    name: "Medicann UK",
    note: "Medicann says it has permission to operate while Healthcare Improvement Scotland considers its application. Our directory requires a current public regulator record before we include a clinic’s prices.",
    source: "https://www.medicann.co.uk/safeguarding-statement",
    label: "Medicann’s registration statement",
  },
};

export function getClinic(slug: string) {
  return clinics.find((clinic) => clinic.slug === slug);
}
