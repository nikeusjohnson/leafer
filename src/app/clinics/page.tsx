import type { PageMeta } from "@/page-meta";
import Image from "@/components/Image";
import ClinicBrowser from "@/components/ClinicBrowser";
import { clinics, feesChecked } from "@/data/clinics";
import styles from "./clinics.module.css";

export const metadata: PageMeta = {
  title: "Compare UK medical cannabis clinics",
  description:
    "Compare published clinic fees, subscription terms and appointment formats, with direct links to provider prices and UK regulator records.",
};

export default function ClinicsIndex() {
  return (
    <>
      <header className={styles.banner}>
        <div className={styles.wrap + " " + styles.heroGrid}>
          <div>
            <nav aria-label="Breadcrumb" className={styles.crumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>Clinic comparison
            </nav>
            <h1>Compare UK clinics</h1>
            <p className={styles.lead}>
              See what a first appointment costs, how follow-ups are billed and
              where to check each clinic’s registration. Select any two to
              compare the full terms side by side.
            </p>
          </div>
          <p className={styles.checked}>
            Fees checked <time dateTime="2026-11-23">{feesChecked}</time>
          </p>
          <div className={styles.heroArt}>
            <Image
              src="/images/sections/clinic-directory.webp"
              width={720}
              height={480}
              sizes="(max-width: 760px) 12rem, 22vw"
              alt=""
            />
          </div>
        </div>
      </header>
      <div className={styles.wrap}>
        <div id="clinic-browser"><ClinicBrowser clinics={clinics} /></div>
        <section className={styles.notes}>
          <h2>How to read the fees</h2>
          <p>
            Starting fees show what a new patient pays for the appointment or
            onboarding route named. Subscription prices, follow-up charges and
            pharmacy costs can change the total. All listed prices exclude
            medicine.
          </p>
          <p>
            Each profile links to the clinic’s price list and the relevant
            public register. In England we use the Care Quality Commission
            (CQC). In Wales we use Healthcare Inspectorate Wales (HIW). A
            clinician assesses whether treatment is suitable.
          </p>
          <a href="/guides/costs" className={styles.link}>
            Read the guide to treatment costs
          </a>
        </section>
      </div>
    </>
  );
}
