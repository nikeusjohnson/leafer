import Link from "next/link";
import type { Clinic } from "@/data/clinics";
import styles from "@/app/clinics/clinics.module.css";

export default function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIntro}>
        <p className={styles.model}>{clinic.tag}</p>
        <h3>
          <Link href={`/clinics/${clinic.slug}`}>{clinic.name}</Link>
        </h3>
        <p className={styles.description}>{clinic.summary}</p>
      </div>
      <dl className={styles.cardFees}>
        <div>
          <dt>{clinic.initialFeeLabel}</dt>
          <dd>{clinic.initialFee}</dd>
        </div>
        <div>
          <dt>Follow-up care</dt>
          <dd>{clinic.followUpFee}</dd>
        </div>
      </dl>
      <div className={styles.cardBottom}>
        <span>{clinic.format}</span>
        <Link
          className={styles.link}
          href={`/clinics/${clinic.slug}`}
          aria-label={`View fees and sources for ${clinic.name}`}
        >
          Fees and sources
        </Link>
      </div>
    </article>
  );
}
