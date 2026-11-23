import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClinicBrowser from "@/components/ClinicBrowser";
import { clinics, feesChecked } from "@/data/clinics";
import styles from "./clinics.module.css";

export const metadata: Metadata = {
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
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>Clinic comparison
            </nav>
            <h1>Compare UK clinics</h1>
            <p className={styles.lead}>
              See what a first appointment costs, how follow-ups are billed and
              where to check each clinic’s registration. Select any two to
              compare the full terms side by side.
            </p>
            <p className={styles.checked}>
              Fees checked <time dateTime="2026-11-23">{feesChecked}</time>
            </p>
          </div>
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
        <ClinicBrowser clinics={clinics} />
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
          <Link href="/guides/costs" className={styles.link}>
            Read the guide to treatment costs
          </Link>
        </section>
      </div>
    </>
  );
}
