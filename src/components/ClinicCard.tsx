import Link from "next/link";
import type { Clinic } from "@/data/clinics";
import styles from "@/app/clinics/clinics.module.css";

export default function ClinicCard({
  clinic,
  comparison,
}: {
  clinic: Clinic;
  comparison: React.ReactNode;
}) {
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
      <p className={styles.cardFormat}>{clinic.format}</p>
      <div className={styles.cardBottom}>
        {comparison}
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
